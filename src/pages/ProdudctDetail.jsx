import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increment, decrement } from "../redux/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.9890648&lng=82.2474648&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const result = await response.json();

      const info = result?.data?.cards?.[2]?.card?.card?.info;
      const menuCards =
        result?.data?.cards?.find((card) => card?.groupedCard)?.groupedCard
          ?.cardGroupMap?.REGULAR?.cards || [];

      const itemCards = menuCards.flatMap(
        (card) => card?.card?.card?.itemCards || []
      );

      setRestaurantInfo(info);
      setMenuItems(itemCards);
    } catch (e) {
      console.log("Error fetching data:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleAddToCart = (item) => {
    const info = item.card.info;
    dispatch(
      addToCart({
        id: info.id,
        name: info.name,
        price: info.price || info.defaultPrice,
        imageId: info.imageId,
      })
    );
  };

  const handleInc = (id) => {
    dispatch(increment(id));
  };

  const handleDec = (id) => {
    dispatch(decrement(id));
  };

  if (loading)
    return <h3 style={{ padding: "20px", textAlign: "center" }}>Loading...</h3>;

  if (!restaurantInfo)
    return (
      <h3 style={{ padding: "20px", textAlign: "center" }}>No data found.</h3>
    );

  return (
    <div
      style={{
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "30px",
          background: "#fff",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "10px" }}>{restaurantInfo.name}</h2>
          <p style={{ color: "#555", marginBottom: "20px" }}>
            {restaurantInfo.areaName} | ⭐ {restaurantInfo.avgRating} |{" "}
            {restaurantInfo.costForTwoMessage}
          </p>
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantInfo.cloudinaryImageId}`}
            alt={restaurantInfo.name}
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "12px",
              margin: "20px 0",
              objectFit: "cover",
            }}
          />
        </div>

        <h3
          style={{
            marginTop: "30px",
            borderBottom: "2px solid #eee",
            paddingBottom: "10px",
          }}
        >
          Menu Items
        </h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {menuItems.map((item) => {
            const info = item.card.info;
            const price = info.price
              ? (info.price / 100).toFixed(2)
              : (info.defaultPrice / 100).toFixed(2);

            const imageUrl = info.imageId
              ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100/${info.imageId}`
              : null;

            const quantity = cartItems[info.id]?.quantity || 0;

            return (
              <li
                key={info.id}
                style={{
                  padding: "16px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={info.name}
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "8px",
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                    />
                  )}

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      {info.name}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        marginBottom: "4px",
                      }}
                    >
                      ₹{price}
                    </div>
                    {info.description && (
                      <div style={{ fontSize: "13px", color: "#999" }}>
                        {info.description}
                      </div>
                    )}
                  </div>

                  {/* Toggle between "Add to Cart" and Counter */}
                  <div style={{ alignSelf: "center" }}>
                    {quantity > 0 ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <button onClick={() => handleDec(info.id)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleInc(info.id)}>+</button>
                      </div>
                    ) : (
                      <button
                        style={{
                          padding: "6px 12px",
                          backgroundColor: "#0f8b8d",
                          color: "#fff",
                          border: "none",
                          borderRadius: "6px",
                          cursor: "pointer",
                          fontSize: "14px",
                          whiteSpace: "nowrap",
                          height: "40px",
                        }}
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
