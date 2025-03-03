import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Client, Databases, Query } from "appwrite";

const PortfolioPage = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();
  const navigate = useNavigate();

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
    <div className="container section pt-12 px-4">
      <h1 className="text-4xl lg:text-5xl mb-4">{displayCategory}</h1>

      {/* Teal colored divider line below category name - 50% width on large devices */}
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
          {works.map((work) => (
            <div
              key={work.$id}
              className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105 mb-4"
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
    </div>
  );
};

export default PortfolioPage;
