import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Client, Databases, Query } from "appwrite";
import { Galleria } from "primereact/galleria";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

const PortfolioPage = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [galleriaVisible, setGalleriaVisible] = useState(false);
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryDisplayNames = {
    branding: "Branding",
    "logo-design": "Logo Design",
    "social-media": "Social Media Design",
    "poster-flyers": "Poster and Flyers",
  };

  const displayCategory = categoryDisplayNames[category] || "";

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  // Template for the full-size image display
  const itemTemplate = (item) => {
    return (
      <div className="flex justify-center">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full max-h-screen object-contain"
        />
      </div>
    );
  };

  // Template for the thumbnail images
  const thumbnailTemplate = (item) => {
    return (
      <div className="flex justify-center p-1">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-20 object-cover cursor-pointer"
        />
      </div>
    );
  };

  useEffect(() => {
    // If no category is provided, redirect to the first category
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

  const openGalleria = (index) => {
    setSelectedIndex(index);
    setGalleriaVisible(true);
  };

  if (loading) {
    return (
      <div className="container section flex justify-center items-center min-h-screen">
        <p>Loading portfolio items...</p>
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
    <div className="container section pt-12">
      <h1 className="text-4xl lg:text-5xl mb-4">{displayCategory}</h1>

      {/* Added divider line below category name */}
      <div className="divider mb-8 lg:w-1/3"></div>

      {works.length === 0 ? (
        <p>No items found in this category.</p>
      ) : (
        <>
          {/* Changed grid to show only 2 images per row and improved sizing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {works.map((work, index) => (
              <div
                key={work.$id}
                className="overflow-hidden rounded-lg cursor-pointer shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105"
                onClick={() => openGalleria(index)}
              >
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>

          {galleriaVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <button
                className="absolute top-4 right-4 text-white text-2xl z-10"
                onClick={() => setGalleriaVisible(false)}
              >
                ×
              </button>
              <div className="w-full max-w-4xl">
                <Galleria
                  value={works}
                  responsiveOptions={responsiveOptions}
                  numVisible={5}
                  style={{ maxWidth: "100%" }}
                  item={itemTemplate}
                  thumbnail={thumbnailTemplate}
                  activeIndex={selectedIndex}
                  onItemChange={(e) => setSelectedIndex(e.index)}
                  showThumbnails
                  showItemNavigators
                  circular
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PortfolioPage;
