import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import { ThemeProvider } from "./context/ThemeContext";
import BackgroundAnimations from "./components/BackgroundAnimations";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider>
        <div className="flex flex-col min-h-screen">
          <BackgroundAnimations />
          <Navbar />
          <div className="flex-grow pt-14">
            <Routes>
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio/:category" element={<PortfolioPage />} />
              <Route
                path="/portfolio"
                element={<Navigate to="/portfolio/branding" />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;