import { databases, storage, appwriteConfig } from "../appwrite/config";
import { ID, Query } from "appwrite";
import imageCompression from "browser-image-compression";

export const photoService = {
  /**
   * Compress an image file before upload
   */
  async compressImage(file) {
    const options = {
      maxSizeMB: 1, 
      maxWidthOrHeight: 1920, 
      useWebWorker: true, 
    };
    try {
      const compressedBlob = await imageCompression(file, options);
      // Convert Blob to File
      const compressedFile = new File([compressedBlob], file.name, {
        type: file.type,
        lastModified: Date.now(),
      });
      return compressedFile;
    } catch (error) {
      console.error("Image compression error:", error);
      throw new Error("Failed to compress image");
    }
  },

  /**
   * Upload a thumbnail with compression
   */
  async thumbnailUpload(file) {
    try {
      // Compress the image before uploading
      const compressedFile = await this.compressImage(file);
      const response = await storage.createFile(
        appwriteConfig.bucketId,
        ID.unique(),
        compressedFile
      );
      return response;
    } catch (error) {
      console.error("Appwrite service :: thumbnailUpload :: error", error);
      throw new Error("Failed to upload thumbnail");
    }
  },

  /**
   * Upload a new photo or update an existing one
   */
  uploadPhoto: async (file, title, category, editingPhoto = null) => {
    try {
      let storageFileId = null;
      let imageUrl = null;
      // If we're uploading a new image file
      if (file) {
        // If we're editing and there's an existing file, delete it first
        if (editingPhoto && editingPhoto.storageFileId) {
          try {
            await storage.deleteFile(
              appwriteConfig.bucketId,
              editingPhoto.storageFileId
            );
          } catch (error) {
            console.error("Error deleting old file:", error);
            // Continue anyway - we'll just create a new file
          }
        }

        // Upload the new file with compression
        const uploadResponse = await photoService.thumbnailUpload(file);
        storageFileId = uploadResponse.$id;

        // Get the file view URL
        imageUrl = storage.getFileView(appwriteConfig.bucketId, storageFileId);
      } else if (editingPhoto) {
        // Keep existing file references if editing but no new file was uploaded
        storageFileId = editingPhoto.storageFileId;
        imageUrl = editingPhoto.imageUrl;
      }
      const photoData = {
        title,
        category,
        storageFileId,
        imageUrl,
      };
      if (editingPhoto) {
        // Update existing document
        return await databases.updateDocument(
          appwriteConfig.databaseId,
          appwriteConfig.domainCollectionId,
          editingPhoto.$id,
          photoData
        );
      } else {
        // Create new document
        return await databases.createDocument(
          appwriteConfig.databaseId,
          appwriteConfig.domainCollectionId,
          ID.unique(),
          photoData
        );
      }
    } catch (error) {
      console.error("Error in uploadPhoto:", error);
      throw error;
    }
  },
  /**
   * Get all photos
   */
  getPhotos: async () => {
    try {
      const response = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.domainCollectionId,
        [Query.orderDesc("$createdAt")]
      );

      return response.documents;
    } catch (error) {
      console.error("Error in getPhotos:", error);
      throw error;
    }
  },
  /**
   * Delete a photo and its associated file from storage
   */
  deletePhoto: async (documentId, storageFileId) => {
    try {
      // Delete the document from the database
      await databases.deleteDocument(
        appwriteConfig.databaseId,
        appwriteConfig.domainCollectionId,
        documentId
      );
      // If there's an associated file, delete it from storage
      if (storageFileId) {
        await storage.deleteFile(appwriteConfig.bucketId, storageFileId);
      }
    } catch (error) {
      console.error("Error in deletePhoto:", error);
      throw error;
    }
  },
};
