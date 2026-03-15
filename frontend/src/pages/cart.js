import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "../styles/cart.css";

function Cart() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart items
  useEffect(() => {
    axios.get("https://landing-page-production-4704.up.railway.app/api/cart")
      .then(res => {
        setItems(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching cart data:", err);
        setLoading(false);
      });
  }, []);

  // Remove item from cart
 const handleDelete = async (id) => {
  try {
    await axios.delete(`https://landing-page-production-4704.up.railway.app/api/cart/delete/${id}`);
    alert("Item removed!");

    // 🟢 Refresh cart after delete:
    const res = await axios.get("https://landing-page-production-4704.up.railway.app/api/cart");
    setItems(res.data);
  } catch (error) {
    console.error("Failed to remove item:", error);
  }
};


  // Calculate total price
  const totalPrice = items.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <>
      {/* Navigation Bar */}
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
          {localStorage.getItem('username') ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontWeight: 'bold' }}>{localStorage.getItem('username')}</span>
              <button onClick={() => { localStorage.removeItem('username'); window.location.reload(); }}>LOGOUT</button>
            </div>
          ) : (
            <button><Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>LOGIN</Link></button>
          )}
        </div>
      </div>

      {/* Cart Section */}
      <div className="cart-content">
        <div className="cart-title">
          <h2>Your Cart</h2>
        </div>

        {loading ? (
          <p>Loading cart items...</p>
        ) : items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
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
<button onClick={() => handleDelete(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
