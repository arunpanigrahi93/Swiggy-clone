import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({ restaurant }) {
  const { name, cuisines, areaName, avgRating, costForTwo } = restaurant;
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
        <Button
          variant="primary"
          href={restaurant?.cta?.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Menu
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
