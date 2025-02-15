import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { Home, Image, LogOut, Images } from "lucide-react";
import { PhotoForm } from "./PhotoForm";

export const AdminSidebar = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const [showAddPhotosForm, setShowAddPhotosForm] = useState(false);

  const menuItems = [
    { title: "Dashboard", path: "/admin/dashboard", icon: Home },
    { title: "Manage Photos", path: "/admin/photos", icon: Images },
  ];

  const handleAddPhotosClick = () => {
    setShowAddPhotosForm(true);
  };

  const handleFormSuccess = () => {
    setShowAddPhotosForm(false);
  };

  return (
    <>
      <div className="fixed h-full w-64 bg-gray-900 text-white p-4 flex flex-col justify-between">
        <div>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Admin Portal</h2>
          </div>
          <nav>
            <ul className="space-y-2 mt-10">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center justify-center space-x-3 p-3 rounded-lg transition-colors ${
                        location.pathname === item.path
                          ? "bg-blue-600"
                          : "hover:bg-gray-700"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={handleAddPhotosClick}
                  className="flex items-center justify-center space-x-3 p-3 rounded-lg w-full hover:bg-gray-700 transition-colors"
                >
                  <Image className="w-5 h-5" />
                  <span>Add Photos</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full">
          <button
            onClick={logout}
            className="flex items-center justify-center space-x-3 p-3 rounded-lg w-full hover:bg-gray-700 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
      {showAddPhotosForm && (
        <PhotoForm
          onSuccess={handleFormSuccess}
          onCancel={() => setShowAddPhotosForm(false)}
        />
      )}
    </>
  );
};
