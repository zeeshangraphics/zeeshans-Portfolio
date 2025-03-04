import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Client, Databases, Query } from "appwrite";

const PortfolioPage = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();
  const navigate = useNavigate();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categoryDisplayNames = {
    branding: "Branding",
    "logo-design": "Logo Design",
    "social-media": "Social Media Design",
    "poster-flyers": "Poster and Flyers",
  };

  const displayCategory = categoryDisplayNames[category] || "";

  useEffect(() => {
    if (!category) {
      navigate("/portfolio/branding");
      return;
    }

    const fetchWorks = async () => {
      try {
        const client = new Client()
          .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
          .setProject(import.meta.env.VITE_APPWRITE_PROJECT);

        const databases = new Databases(client);

        let works = await databases.listDocuments(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_COLLECTION_ID,
          [Query.equal("category", category)]
        );

        setWorks(works.documents);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching works:", err);
        setError("Failed to load portfolio items");
        setLoading(false);
      }
    };

    fetchWorks();
  }, [category, navigate]);

  // Function to open lightbox with specific image
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  };

  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    // Restore scrolling
    document.body.style.overflow = "auto";
  };

  // Navigation functions
  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? works.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === works.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? works.length - 1 : prevIndex - 1
        );
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === works.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, works.length]);

  // Touch swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext({ stopPropagation: () => {} });
    } else if (isRightSwipe) {
      goToPrevious({ stopPropagation: () => {} });
    }
  };

  if (loading) {
    return (
      <div className="container section flex flex-col justify-center items-center min-h-screen">
        <div className="loader mb-4">
          <div
            className="spinner"
            style={{
              border: "4px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "50%",
              borderTop: "5px solid var(--color-teal)",
              width: "60px",
              height: "60px",
              animation: "spin 1s linear infinite",
            }}
          ></div>
        </div>
        <style jsx>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container section flex justify-center items-center min-h-screen">
        <p className="text-accent-primary">{error}</p>
      </div>
    );
  }

  return (
    <div className="container section pt-12 px-4 max-w-7xl mt-12 mb-5">
      <h1 className="text-3xl lg:text-5xl mb-4">{displayCategory}</h1>

      <div
        className="mb-8 w-full lg:w-1/2"
        style={{
          height: "2px",
          backgroundColor: "var(--color-teal)",
        }}
      ></div>

      {works.length === 0 ? (
        <p>No items found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {works.map((work, index) => (
            <div
              key={work.$id}
              className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105 mb-4 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={work.imageUrl}
                alt={work.title}
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && works.length > 0 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl z-10 hover:text-gray-300"
            onClick={closeLightbox}
          >
            &times;
          </button>

          {/* Navigation arrows */}
          <button
            className="absolute left-4 text-white text-5xl z-10 hover:text-gray-300 focus:outline-none"
            onClick={goToPrevious}
          >
            &#8249;
          </button>

          <button
            className="absolute right-4 text-white text-5xl z-10 hover:text-gray-300 focus:outline-none"
            onClick={goToNext}
          >
            &#8250;
          </button>

          {/* Current image */}
          <div className="max-w-4xl max-h-screen p-4">
            <img
              src={works[currentImageIndex].imageUrl}
              className="max-h-full max-w-full object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
