import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

function Shimmer() {
  // Create an array of 5 placeholder cards
  return (
    <div className="products-grid">
      {Array(8)
        .fill(null)
        .map((_, index) => (
          <Card key={index} style={{ width: "18rem", margin: "10px" }}>
            <Placeholder
              as={Card.Img}
              variant="top"
              animation="wave"
              style={{ height: "180px" }}
            />
            <Card.Body>
              <Placeholder as={Card.Title} animation="wave">
                <Placeholder xs={6} />
              </Placeholder>

              <Placeholder as={Card.Text} animation="wave">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={6} />
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={6} />
              </Placeholder>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default Shimmer;
