// config.js
import { Client, Account, Storage, Databases } from "appwrite";

// Initialize the client
const client = new Client();

// Make sure the environment variables are defined before using them
const endpoint = import.meta.env.VITE_APPWRITE_URL;
const project = import.meta.env.VITE_APPWRITE_PROJECT;

if (!endpoint || !project) {
  throw new Error(
    "Appwrite configuration variables are not properly set in .env file"
  );
}

// Set up the client
client.setEndpoint(endpoint).setProject(project);

// Initialize services
export const account = new Account(client);
export const storage = new Storage(client);
export const databases = new Databases(client);

// Export configuration constants
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const PHOTOS_COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
export const BUCKET_ID = import.meta.env.VITE_APPWRITE_BUCKET_ID;

// Helper function for getting image URLs
export const getImageUrl = (fileId) => {
  return `${endpoint}/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${project}`;
};

export { client };
