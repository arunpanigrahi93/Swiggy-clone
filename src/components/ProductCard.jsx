import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
function ProductCard({ restaurant }) {
  const { id, name, cuisines, areaName, avgRating, costForTwo } = restaurant;

  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/product/${id}`);
  };
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img
        variant="top"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.cloudinaryImageId}`}
        alt={name}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {cuisines?.join(", ")} <br />
          Area: {areaName} <br />
          Rating: ⭐ {avgRating} <br />
          {costForTwo}
        </Card.Text>
        <Button variant="primary" onClick={handleView}>
          View Menu
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
