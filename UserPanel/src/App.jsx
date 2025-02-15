import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import SocialSidebar from "./components/Sidebar";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/Gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <SocialSidebar />
        <div className="flex-grow pl-16 pt-16">
          {" "}
          {/* Leaves space for sidebar & navbar */}
          <Routes>
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
