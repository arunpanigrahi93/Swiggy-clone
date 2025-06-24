import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Shimmer from "../components/Shimmer";
import { useSelector, useDispatch } from "react-redux";
import { Inc, Dec } from "../redux/counterSlice";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const countValue = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

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

  const handleInc = () => {
    dispatch(Inc());
  };
  const handleDec = () => {
    dispatch(Dec());
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={handleInc}>+</button>
      {countValue}
      <button onClick={handleDec}>-</button>
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
