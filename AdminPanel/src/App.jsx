import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth, AuthProvider } from "./context/auth.context";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ManagePhotos from "./pages/ManagePhotos";

// Protected route that uses the existing auth context
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

// AppRoutes component to use the auth context
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/manage-photos"
        element={
          <ProtectedRoute>
            <ManagePhotos />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Navigate to="/admin/dashboard" />} />
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
