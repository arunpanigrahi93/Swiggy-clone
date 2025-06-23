import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Shimmer from "../components/Shimmer";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.9890648&lng=82.2474648&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const result = await response.json();

      // 🔥 Direct access to cards[4]
      const restaurants =
        result?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      console.log("Restaurants:", restaurants);
      setData(restaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {loading ? (
        <Shimmer />
      ) : (
        <div className="products-grid">
          {data.map((restaurant) => (
            <ProductCard
              key={restaurant?.info?.id}
              restaurant={restaurant?.info}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
