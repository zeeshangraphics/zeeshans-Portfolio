import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Client, Databases, Query } from "appwrite";
import { motion } from "framer-motion";

const SkeletonLoader = ({ category }) => {
  // Different aspect ratios for skeleton loaders based on category
  const aspectRatioClass = 
    category === "poster-flyers" ? "aspect-[5.83/8.27]" : 
    category === "branding" ? "aspect-[7/5]" : 
    "aspect-square";

  return (
    <div className="overflow-hidden rounded-lg shadow-md mb-4">
      <div className={`w-full ${aspectRatioClass} bg-gray-200 dark:bg-gray-700 animate-pulse`}></div>
    </div>
  );
};

const PortfolioPage = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();
  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Touch swipe states
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const categoryDisplayNames = {
    branding: "Branding",
    "logo-design": "Logo Design",
    "social-media": "Social Media Design",
    "poster-flyers": "Poster and Flyers",
  };

  // Get aspect ratio class based on category
  const getAspectRatioClass = (categoryName) => {
    switch(categoryName) {
      case "poster-flyers":
        return "aspect-[5.83/8.27]";
      case "branding":
        return "aspect-[7/5]";
      default:
        return "aspect-square";
    }
  };

  const displayCategory = categoryDisplayNames[category] || "";

  useEffect(() => {
    // Reset current page and set loading to true when category changes
    setCurrentPage(1);
    setLoading(true);
  }, [category]);

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

    // Small delay to ensure loading state is shown
    const timeoutId = setTimeout(() => {
      fetchWorks();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [category, navigate]);

  // Pagination logic
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = works.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Lightbox functions
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    setImageLoaded(false); // Reset image loaded state
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Restore scrolling
    document.body.style.overflow = "auto";
  };

  // Navigation functions for lightbox
  const goToPrevious = (e) => {
    e.stopPropagation();
    setImageLoaded(false); // Reset image loaded state
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? works.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setImageLoaded(false); // Reset image loaded state
    setCurrentImageIndex((prevIndex) =>
      prevIndex === works.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        setImageLoaded(false); // Reset image loaded state
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? works.length - 1 : prevIndex - 1
        );
      } else if (e.key === "ArrowRight") {
        setImageLoaded(false); // Reset image loaded state
        setCurrentImageIndex((prevIndex) =>
          prevIndex === works.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, works.length]);

  // Touch swipe functionality
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

  // Handle image load in lightbox
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (error) {
    return (
      <div className="container section flex justify-center items-center min-h-screen w-full max-w-7xl mx-auto px-4">
        <p className="text-accent-primary">{error}</p>
      </div>
    );
  }

  return (
    <div className="container section pt-12 px-4 w-full max-w-7xl mx-auto mt-12 mb-5">
      <motion.h2
        className="text-4xl lg:text-5xl font-bold text-center mb-8"
        style={{ color: "var(--color-teal)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {displayCategory}
      </motion.h2>
      <div className="w-24 h-1 bg-[var(--color-teal)] mx-auto mb-12"></div>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 relative z-40">
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SkeletonLoader category={category} />
            </motion.div>
          ))}
        </div>
      ) : works.length === 0 ? (
        <p>No items found in this category.</p>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 relative z-40">
            {currentImages.map((work, index) => (
              <div
                key={work.$id}
                className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105 mb-4 cursor-pointer"
                onClick={() => openLightbox(indexOfFirstImage + index)}
              >
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className={`w-full ${getAspectRatioClass(category)} object-cover`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {works.length > imagesPerPage && (
            <div className="flex justify-center mt-8">
              <nav>
                <ul className="flex space-x-2">
                  {Array.from({
                    length: Math.ceil(works.length / imagesPerPage),
                  }).map((_, index) => (
                    <li key={index}>
                      <button
                        onClick={() => paginate(index + 1)}
                        className={`px-4 py-2 rounded-md transition-colors ${
                          currentPage === index + 1
                            ? "bg-[var(--color-teal)] text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                        }`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </>
      )}

      {/* Lightbox - Now showing original image size */}
      {lightboxOpen && works.length > 0 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Loading spinner */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          )}
          
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

          {/* Current image - No aspect ratio constraints in lightbox */}
          <div className="p-4 flex items-center justify-center w-full h-full">
  <img
    src={works[currentImageIndex].imageUrl}
    alt={works[currentImageIndex].title}
    className="max-w-full max-h-full"
    onLoad={handleImageLoad}
  />
</div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;