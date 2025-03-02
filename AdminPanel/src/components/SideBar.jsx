import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { Home, Image, LogOut, Images, Menu, X } from "lucide-react";
import { PhotoForm } from "./PhotoForm";

export const AdminSidebar = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const [showAddPhotosForm, setShowAddPhotosForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Dashboard", path: "/admin/dashboard", icon: Home },
    { title: "Manage Photos", path: "/admin/manage-photos", icon: Images },
  ];

  const handleAddPhotosClick = () => {
    setShowAddPhotosForm(true);
    setIsMenuOpen(false);
  };

  const handleFormSuccess = () => {
    setShowAddPhotosForm(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed h-full w-64 bg-gray-900 text-white p-4 flex-col justify-between">
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

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white z-50">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-bold">Admin Portal</h2>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-700">
            <nav className="p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
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
                    className="flex items-center space-x-3 p-3 rounded-lg w-full hover:bg-gray-700 transition-colors"
                  >
                    <Image className="w-5 h-5" />
                    <span>Add Photos</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 p-3 rounded-lg w-full hover:bg-gray-700 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
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
