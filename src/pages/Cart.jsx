import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { removeFromCart, increment, decrement } from "../redux/cartSlice"; // ✅ added

function Cart() {
  const cartItemsObj = useSelector((state) => state.cart.items);
  const cartItems = Object.values(cartItemsObj);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleContinueShopping = () => {
    navigate("/");
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleInc = (id) => {
    dispatch(increment(id));
  };

  const handleDec = (id) => {
    dispatch(decrement(id));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <Alert variant="info">Your cart is empty.</Alert>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>₹{(item.price / 100).toFixed(2)}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleDec(item.id)}
                      >
                        −
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleInc(item.id)}
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td>₹{((item.price * item.quantity) / 100).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="text-end fw-bold">
                  Total
                </td>
                <td className="fw-bold" colSpan="2">
                  ₹{(total / 100).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </Table>

          <div className="text-end">
            <Button variant="secondary" onClick={handleContinueShopping}>
              Continue Shopping
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
