import React, { useState, useEffect } from "react";
import { Camera, Image, Upload, PieChart, Layers } from "lucide-react";
import { photoService } from "../services/photo.services";
import { AdminSidebar } from "../components/SideBar";

export const Dashboard = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryStats, setCategoryStats] = useState({});

  const categories = {
    branding: "Branding",
    "logo-design": "Logo design",
    "social-media": "Social media design",
    "poster-flyers": "Poster and flyers",
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    try {
      const data = await photoService.getPhotos();

      // Store the complete photo array
      setPhotos(data);

      // Calculate category counts separately from the photos state
      const stats = {};
      Object.keys(categories).forEach((key) => {
        // Count photos in each category
        stats[key] = data.filter((photo) => photo.category === key).length;
      });

      // Set category stats state
      setCategoryStats(stats);
    } catch (error) {
      console.error("Error loading photos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="lg:ml-64 flex-1 p-6">
        {/* Main Dashboard Card - Title and Total Images in Same Row */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                My Dashboard
              </h1>
              <p className="text-gray-600 max-w-2xl">
                Here I explore, manage, and showcase my graphic designing
                related data.
              </p>
            </div>

            {/* Total Images Card */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-md p-6 transition-all hover:shadow-lg md:w-72">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-white font-medium">Total Images</h3>
                  <p className="text-4xl font-bold text-white mt-2">
                    {loading ? "..." : photos.length}
                  </p>
                  <p className="text-blue-100 text-sm mt-1">All time uploads</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-full">
                  <Layers className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Stats Cards */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Category Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(categories).map((key) => (
            <div
              key={key}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col transition-all hover:shadow-lg border border-gray-100"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-700">{categories[key]}</h3>
                {key === "branding" && (
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <PieChart className="h-5 w-5 text-blue-500" />
                  </div>
                )}
                {key === "logo-design" && (
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Image className="h-5 w-5 text-purple-500" />
                  </div>
                )}
                {key === "social-media" && (
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Upload className="h-5 w-5 text-green-500" />
                  </div>
                )}
                {key === "poster-flyers" && (
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Camera className="h-5 w-5 text-orange-500" />
                  </div>
                )}
              </div>
              <div className="mt-auto">
                <span className="text-3xl font-bold text-gray-800">
                  {loading ? "..." : categoryStats[key] || 0}
                </span>
                <span className="ml-2 text-sm text-gray-500">images</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
                <div
                  className={`h-1 rounded-full ${
                    key === "branding"
                      ? "bg-blue-500"
                      : key === "logo-design"
                      ? "bg-purple-500"
                      : key === "social-media"
                      ? "bg-green-500"
                      : "bg-orange-500"
                  }`}
                  style={{
                    width: `${
                      loading || photos.length === 0
                        ? 0
                        : (categoryStats[key] / photos.length) * 100 || 0
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
