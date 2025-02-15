import React, { useState, useEffect } from "react";
import { photoService } from "../services/photo.services";
import { AdminSidebar } from "../components/SideBar";
import { PhotoForm } from "../components/PhotoForm";
import { Trash2, Edit } from "lucide-react";

export const ManagePhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState(null);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    try {
      const data = await photoService.getPhotos();
      setPhotos(data);
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

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="ml-64 flex-1 p-8">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-700">
          Manage Photos
        </h1>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.length > 0 ? (
              photos.map((photo) => (
                <div
                  key={photo.$id}
                  className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-300"
                >
                  <img
                    src={photo.imageUrl}
                    alt={photo.title || "Photo"}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/fallback-image.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold">{photo.title}</h3>
                      <p className="text-sm mt-2">{photo.description}</p>
                      <div className="flex justify-center space-x-4 mt-4">
                        <button
                          onClick={() => handleEdit(photo)}
                          className="bg-blue-500 p-2 rounded-full hover:bg-blue-600"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() =>
                            handleDelete(photo.$id, photo.storageFileId)
                          }
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
                No photos available. Start by adding some!
              </p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};
