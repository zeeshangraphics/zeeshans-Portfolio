import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { account } from "./appwrite/config";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { ManagePhotos } from "./pages/ManagePhotos";
import { AuthProvider } from "./context/auth.context";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      await account.getSession("current");
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
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
            path="/admin/photos"
            element={
              <ProtectedRoute>
                <ManagePhotos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={<Navigate to="/admin/dashboard" replace />}
          />
          <Route
            path="/"
            element={<Navigate to="/admin/dashboard" replace />}
          />
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-2xl font-bold">404 - Page Not Found</div>
              </div>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
