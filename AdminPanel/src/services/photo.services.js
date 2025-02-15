import { databases, storage } from "../appwrite/config";
import { ID } from "appwrite";

export const photoService = {
  async uploadPhoto(file, title, description, category, editingPhoto = null) {
    try {
      let uniqueId = editingPhoto ? editingPhoto.$id : ID.unique();
      let storageFileId = null;

      // Handle file upload
      if (file) {
        console.log("New file detected:", file.name); // Debug log

        // Delete old file if editing and there's an existing file
        if (editingPhoto && editingPhoto.storageFileId) {
          console.log("Attempting to delete old file:", editingPhoto.storageFileId); // Debug log
          try {
            await storage.deleteFile(
              import.meta.env.VITE_APPWRITE_BUCKET_ID,
              editingPhoto.storageFileId
            );
            console.log("Old file deleted successfully"); // Debug log
          } catch (deleteError) {
            console.error("Failed to delete old file:", deleteError);
          }
        }

        // Upload new file
        try {
          console.log("Uploading new file..."); // Debug log
          const uploadedFile = await storage.createFile(
            import.meta.env.VITE_APPWRITE_BUCKET_ID,
            uniqueId,
            file
          );
          storageFileId = uploadedFile.$id;
          console.log("New file uploaded successfully, ID:", storageFileId); // Debug log
        } catch (uploadError) {
          console.error("File upload failed:", uploadError);
          throw new Error(`File upload failed: ${uploadError.message}`);
        }
      } else if (editingPhoto) {
        console.log("No new file, keeping existing storageFileId:", editingPhoto.storageFileId); // Debug log
        storageFileId = editingPhoto.storageFileId;
      }

      // Prepare photo data
      const photoData = {
        title,
        description,
        category,
        storageFileId: storageFileId, // Always include storageFileId
        imageUrl: storageFileId 
          ? `${import.meta.env.VITE_APPWRITE_URL}/storage/buckets/${
              import.meta.env.VITE_APPWRITE_BUCKET_ID
            }/files/${storageFileId}/view?project=${
              import.meta.env.VITE_APPWRITE_PROJECT
            }`
          : editingPhoto?.imageUrl // Keep old imageUrl if no new file
      };

      console.log("Prepared photo data:", photoData); // Debug log

      // Update or create document
      if (editingPhoto) {
        console.log("Updating existing document:", uniqueId); // Debug log
        const updated = await databases.updateDocument(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_COLLECTION_ID,
          uniqueId,
          photoData
        );
        console.log("Document updated successfully:", updated); // Debug log
        return updated;
      } else {
        if (!storageFileId) {
          throw new Error("New photos must include an image file");
        }
        console.log("Creating new document"); // Debug log
        const created = await databases.createDocument(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_COLLECTION_ID,
          uniqueId,
          photoData
        );
        console.log("Document created successfully:", created); // Debug log
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
