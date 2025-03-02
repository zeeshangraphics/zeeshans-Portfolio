import React, { useState, useEffect } from "react";
import { photoService } from "../services/photo.services";
import { AdminSidebar } from "../components/SideBar";
import { PhotoForm } from "../components/PhotoForm";
import { Trash2, Edit, Plus } from "lucide-react";

export const ManagePhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = {
    all: "All Photos",
    branding: "Branding",
    "logo-design": "Logo design",
    "social-media": "Social media design",
    "poster-flyers": "Poster and flyers",
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredPhotos(photos);
    } else {
      setFilteredPhotos(
        photos.filter((photo) => photo.category === activeCategory)
      );
    }
  }, [activeCategory, photos]);

  const loadPhotos = async () => {
    try {
      const data = await photoService.getPhotos();
      setPhotos(data);
      setFilteredPhotos(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleDelete = async (photoId, storageFileId) => {
    if (window.confirm("Are you sure you want to delete this photo?")) {
      try {
        await photoService.deletePhoto(photoId, storageFileId);
        await loadPhotos();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEdit = (photo) => {
    setEditingPhoto(photo);
    setShowAddForm(true);
  };

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
  };

  const getCategoryDisplay = (category) => {
    return categories[category] || category;
  };

  return (
    <>
      <div className="flex">
        <AdminSidebar />
        <main className="lg:ml-64 pt-24 lg:pt-12 flex-1 p-8">
          <div className="flex justify-center mb-8">
            <h1 className="text-5xl font-bold text-gray-700">Manage Photos</h1>
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="flex flex-wrap gap-2">
              {Object.entries(categories).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => handleCategoryFilter(key)}
                  className={`py-2 px-4 rounded-lg transition-colors ${
                    activeCategory === key
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setEditingPhoto(null);
                setShowAddForm(true);
              }}
              className="flex items-center gap-2 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Photo
            </button>
          </div>

          {showAddForm && (
            <PhotoForm
              onSuccess={() => {
                loadPhotos();
                setShowAddForm(false);
                setEditingPhoto(null);
              }}
              onCancel={() => {
                setShowAddForm(false);
                setEditingPhoto(null);
              }}
              editingPhoto={editingPhoto}
            />
          )}

          {loading ? (
            <div className="text-center text-gray-500">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredPhotos.length > 0 ? (
                filteredPhotos.map((photo) => (
                  <div
                    key={photo.$id}
                    className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-300 cursor-pointer"
                  >
                    <img
                      src={photo.imageUrl}
                      alt={photo.title || "Photo"}
                      className="w-full h-80 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/fallback-image.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-xl font-bold">{photo.title}</h3>
                        <p className="text-sm mt-2">
                          {getCategoryDisplay(photo.category)}
                        </p>
                        <div className="flex justify-center space-x-4 mt-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEdit(photo);
                            }}
                            className="bg-blue-500 p-2 rounded-full hover:bg-blue-600"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(photo.$id, photo.storageFileId);
                            }}
                            className="bg-red-500 p-2 rounded-full hover:bg-red-600"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500">
                  {activeCategory === "all"
                    ? "No photos available. Start by adding some!"
                    : `No photos found in the "${getCategoryDisplay(
                        activeCategory
                      )}" category.`}
                </p>
              )}
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default ManagePhotos;
