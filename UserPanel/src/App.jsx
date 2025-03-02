import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import SocialSidebar from "./components/Sidebar";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <div className="flex">
          <SocialSidebar />
          <div className="flex-grow lg:pl-16 pt-16">
            <Routes>
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio/:category" element={<PortfolioPage />} />
              <Route
                path="/portfolio"
                element={<Navigate to="/portfolio/branding" />}
              />
              <Route
                path="/gallery"
                element={<Navigate to="/portfolio/branding" />}
              />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
