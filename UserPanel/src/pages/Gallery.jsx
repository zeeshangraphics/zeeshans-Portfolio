import React, { useEffect, useState } from "react";
import { Client, Databases, Storage } from "appwrite";

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const appwriteURL = import.meta.env.VITE_APPWRITE_URL;
  const appwriteProjectID = import.meta.env.VITE_APPWRITE_PROJECT;
  const appwriteDatabaseID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
  const appwriteCollectionID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
  const appwriteBucketID = import.meta.env.VITE_APPWRITE_BUCKET_ID;

  useEffect(() => {
    const client = new Client()
      .setEndpoint(appwriteURL)
      .setProject(appwriteProjectID);

    const databases = new Databases(client);
    const storage = new Storage(client);

    const fetchImages = async () => {
      try {
        const response = await databases.listDocuments(
          appwriteDatabaseID,
          appwriteCollectionID
        );

        const imagesWithUrls = response.documents.map((doc) => {
          const fileId = doc.storageFileId || doc.imageId || doc.image;

          const imageUrl = fileId
            ? storage.getFileView(appwriteBucketID, fileId)
            : "/placeholder-image.jpg";

          return {
            id: doc.$id,
            title: doc.title || "Untitled",
            description: doc.description || "No description available.",
            category: doc.category || "Uncategorized",
            imageUrl: imageUrl,
          };
        });

        setImages(imagesWithUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [
    appwriteURL,
    appwriteProjectID,
    appwriteDatabaseID,
    appwriteCollectionID,
    appwriteBucketID,
  ]);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      {/* Header Section */}
      <div className="pt-20 pb-16 px-4 max-w-7xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-5xl font-light">Gallery</h1>
          <div className="h-px lg:w-1/3 w-auto bg-white opacity-50"></div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            No images available
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden bg-gray-900"
              >
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${image.imageUrl}`);
                    console.error(`For document with ID: ${image.id}`);
                    e.target.src = "/placeholder-image.jpg";
                    e.target.alt = "Image failed to load";
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-lg font-light">
                      {image.title}
                    </h3>
                    <p className="text-gray-400 text-lg truncate">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
