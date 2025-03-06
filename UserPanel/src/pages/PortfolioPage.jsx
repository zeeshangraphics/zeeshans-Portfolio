import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Client, Databases, Query } from "appwrite";

const SkeletonLoader = () => (
  <div className="bg-gray-200 animate-pulse rounded-lg">
    <div className="aspect-square w-full bg-gray-300"></div>
  </div>
);

const PortfolioPage = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();
  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Touch swipe states
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const categoryDisplayNames = {
    branding: "Branding",
    "logo-design": "Logo Design",
    "social-media": "Social Media Design",
    "poster-flyers": "Poster and Flyers",
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

  // Keyboard navigation for lightbox
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

  if (error) {
    return (
      <div className="container section flex justify-center items-center min-h-screen w-full max-w-7xl mx-auto px-4">
        <p className="text-accent-primary">{error}</p>
      </div>
    );
  }

  return (
    <div className="container section pt-12 px-4 w-full max-w-7xl mx-auto mt-12 mb-5">
      <h1
        className="text-3xl lg:text-5xl mb-4 font-bold"
        style={{ color: "var(--color-teal)" }}
      >
        {displayCategory}
      </h1>

      <div
        className="mb-8 w-full lg:w-1/2"
        style={{
          height: "2px",
          backgroundColor: "var(--color-teal)",
        }}
      ></div>

      {loading ? (
        <div className="fixed inset-0 bg-white bg-opacity-70 z-50 flex flex-col justify-center items-center">
          <div className="text-center mb-4 text-xl font-medium">Loading...</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...Array(6)].map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
        </div>
      ) : works.length === 0 ? (
        <p>No items found in this category.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-40">
            {currentImages.map((work, index) => (
              <div
                key={work.$id}
                className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105 mb-4 cursor-pointer"
                onClick={() => openLightbox(indexOfFirstImage + index)}
              >
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full aspect-square object-cover"
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
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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
              alt={works[currentImageIndex].title}
              className="max-h-full max-w-full object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
