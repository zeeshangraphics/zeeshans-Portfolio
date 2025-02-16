import { databases, storage } from "../appwrite/config";
import { ID } from "appwrite";

export const photoService = {
  async uploadPhoto(file, title, description, category, editingPhoto = null) {
    try {
      let uniqueId = editingPhoto ? editingPhoto.$id : ID.unique();
      let storageFileId = null;

      // Handle file upload
      if (file) {

        if (editingPhoto && editingPhoto.storageFileId) {
          try {
            await storage.deleteFile(
              import.meta.env.VITE_APPWRITE_BUCKET_ID,
              editingPhoto.storageFileId
            );
          } catch (deleteError) {
            console.error("Failed to delete old file:", deleteError);
          }
        }

        // Upload new file
        try {
          const uploadedFile = await storage.createFile(
            import.meta.env.VITE_APPWRITE_BUCKET_ID,
            uniqueId,
            file
          );
          storageFileId = uploadedFile.$id;
        } catch (uploadError) {
          console.error("File upload failed:", uploadError);
          throw new Error(`File upload failed: ${uploadError.message}`);
        }
      } else if (editingPhoto) {
        storageFileId = editingPhoto.storageFileId;
      }

      // Prepare photo data
      const photoData = {
        title,
        description,
        category,
        storageFileId: storageFileId,
        imageUrl: storageFileId 
          ? `${import.meta.env.VITE_APPWRITE_URL}/storage/buckets/${
              import.meta.env.VITE_APPWRITE_BUCKET_ID
            }/files/${storageFileId}/view?project=${
              import.meta.env.VITE_APPWRITE_PROJECT
            }`
          : editingPhoto?.imageUrl 
      };

      if (editingPhoto) {
        const updated = await databases.updateDocument(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_COLLECTION_ID,
          uniqueId,
          photoData
        );
        return updated;
      } else {
        if (!storageFileId) {
          throw new Error("New photos must include an image file");
        }
        const created = await databases.createDocument(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_COLLECTION_ID,
          uniqueId,
          photoData
        );
        return created;
      }
    } catch (error) {
      console.error("Photo upload error:", error);
      throw error;
    }
  },

  async getPhotos() {
    try {
      const response = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID
      );
      return response.documents;
    } catch (error) {
      console.error("Get photos error:", error);
      throw error;
    }
  },

  async deletePhoto(photoId, storageFileId) {
    try {
      if (storageFileId) {
        try {
          await storage.deleteFile(
            import.meta.env.VITE_APPWRITE_BUCKET_ID,
            storageFileId
          );
        } catch (deleteError) {
          console.warn("Failed to delete file:", deleteError);
        }
      }

      await databases.deleteDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID,
        photoId
      );
    } catch (error) {
      throw error;
    }
  },
};
