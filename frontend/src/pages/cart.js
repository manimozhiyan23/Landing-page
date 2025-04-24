import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "../styles/cart.css";

function Cart() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/api/cart")
      .then(res => {
        setItems(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching cart data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="nav">
        <div>
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="nav-names">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/product">Product</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="login">
          <button>LOGIN</button>
        </div>
      </div>

      <div className="cart-content">
        <h2>Your Cart</h2>

        {loading ? (
          <p>Loading cart items...</p>
        ) : items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id || item._id} className="cart-item">
                {item.imageUrl && (
                  <img src={item.imageUrl} alt={item.productName} width="100" />
                )}
                <div>
                  <p><strong>{item.productName}</strong></p>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity || 1}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
