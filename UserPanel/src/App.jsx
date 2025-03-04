import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import { ThemeProvider } from "./context/ThemeContext";
import BackgroundAnimations from "./components/BackgroundAnimations";

function App() {
  return (
    <Router>
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
