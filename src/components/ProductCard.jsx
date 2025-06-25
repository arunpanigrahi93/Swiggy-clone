import { useNavigate } from "react-router-dom";

function ProductCard({ restaurant }) {
  const { id, name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    restaurant;

  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      onClick={handleView}
      style={{
        cursor: "pointer",
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt={name}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "16px" }}>
        <h5 style={{ margin: "0 0 8px", fontWeight: "600" }}>{name}</h5>
        <p
          style={{
            fontSize: "14px",
            color: "#686b78",
            margin: 0,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {cuisines?.join(", ")}
        </p>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            color: "#535665",
            gap: "12px",
          }}
        >
          <span style={{ fontWeight: "bold", color: "green" }}>
            ⭐ {avgRating}
          </span>
          <span>{sla?.slaString}</span>
          <span>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
