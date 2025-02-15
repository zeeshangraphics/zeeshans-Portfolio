import React, { useState, useEffect } from "react";
import { photoService } from "../services/photo.services";
import { X } from "lucide-react";

export const PhotoForm = ({ onSuccess, editingPhoto, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: null,
  });

  useEffect(() => {
    if (editingPhoto) {
      setFormData({
        title: editingPhoto.title || "",
        description: editingPhoto.description || "",
        category: editingPhoto.category || "",
        image: null,
      });
    }
  }, [editingPhoto]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log("Submitting form with data:", {
        ...formData,
        image: formData.image ? formData.image.name : "No new image",
      });

      await photoService.uploadPhoto(
        formData.image,
        formData.title,
        formData.description,
        formData.category,
        editingPhoto
      );

      setFormData({
        title: "",
        description: "",
        category: "",
        image: null,
      });

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Form submission error:", error);
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-100 rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {editingPhoto ? "Edit Photo" : "Upload New Photo"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Photo Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-gray-500 bg-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-gray-500 bg-white"
              rows="4"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-gray-500 bg-white"
              required
            >
              <option value="">Select a Category</option>
              <option value="wedding">Wedding</option>
              <option value="nature">Nature</option>
              <option value="art">Art</option>
              <option value="cars">Cars</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border rounded-lg file:mr-4 file:rounded-lg file:border-0 file:bg-gray-200 file:px-4 file:py-2 hover:file:bg-gray-300 bg-white"
              required={!editingPhoto}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400"
          >
            {loading
              ? "Processing..."
              : editingPhoto
              ? "Update Photo"
              : "Upload Photo"}
          </button>
        </form>
      </div>
    </div>
  );
};
