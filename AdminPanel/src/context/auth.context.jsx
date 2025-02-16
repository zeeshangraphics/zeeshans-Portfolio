import { createContext, useContext, useState, useEffect } from "react";
import { account } from "../appwrite/config";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const session = await account.getSession("current");
      if (session) {
        setUser(session);
      }
    } catch (error) {
      console.error("Session check error:", error);
      setUser(null);
    }
    setLoading(false);
  };

  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const session = await account.getSession("current");
      setUser(session);
      navigate("/admin/dashboard");
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      navigate("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
