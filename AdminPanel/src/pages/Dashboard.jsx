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
              'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrWY5evQ9f7w3UEUwjYQguLeR6to-WpldZQ&s")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h1 className="text-5xl font-bold mb-4">My Dashboard</h1>
            <p className="text-xl max-w-2xl">
              Here I explore, manage, and showcase my graphic designing related
              data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
