import React, { useState, useEffect } from "react";
import { Camera, Image, Upload } from "lucide-react";
import { photoService } from "../services/photo.services";
import { AdminSidebar } from "../components/SideBar";

export const Dashboard = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="lg:ml-64 flex-1">
        {/* Hero Section */}
        <div
          className="relative h-[607px] bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlG7YwzX3hHDrYXSrJiNHdm_oYL1WsIulNfQ&s")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h1 className="text-5xl font-bold mb-4">Photo Dashboard</h1>
            <p className="text-xl max-w-2xl">
              Here I explore, manage, and showcase my visual stories. Capture,
              organize, and bring my memories to life.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        {/* <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
              <Camera className="w-12 h-12 text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold">
                  {loading ? "Loading..." : photos.length}
                </h3>
                <p className="text-gray-500">Total Photos</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
              <Image className="w-12 h-12 text-green-500" />
              <div>
                <h3 className="text-xl font-semibold">
                  {loading
                    ? "Loading..."
                    : photos.filter((p) => p.type === "image").length}
                </h3>
                <p className="text-gray-500">Image Photos</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
              <Upload className="w-12 h-12 text-purple-500" />
              <div>
                <h3 className="text-xl font-semibold">
                  {loading
                    ? "Loading..."
                    : photos.filter((p) => p.isRecent).length}
                </h3>
                <p className="text-gray-500">Recently Uploaded</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
