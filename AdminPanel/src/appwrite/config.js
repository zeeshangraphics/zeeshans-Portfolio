import { Client, Account, Storage, Databases } from "appwrite";

const client = new Client();

const endpoint = import.meta.env.VITE_APPWRITE_URL;
const project = import.meta.env.VITE_APPWRITE_PROJECT;

if (!endpoint || !project) {
  throw new Error(
    "Appwrite configuration variables are not properly set in .env file"
  );
}

client.setEndpoint(endpoint).setProject(project);

export const account = new Account(client);
export const storage = new Storage(client);
export const databases = new Databases(client);

export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const PHOTOS_COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
export const BUCKET_ID = import.meta.env.VITE_APPWRITE_BUCKET_ID;

export const getImageUrl = (fileId) => {
  return `${endpoint}/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${project}`;
};

export { client };
