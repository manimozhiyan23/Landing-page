import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.jpg';
import '../styles/login.css'; // Reusing login styles

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://landing-page-production-4704.up.railway.app/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                setMessage("Registration successful!");
                setTimeout(() => navigate('/login'), 1500);
            } else {
                const text = await response.text();
                setMessage(text || "Error during registration");
            }
        } catch (error) {
            setMessage("Error connecting to server.");
        }
    };

    return (
        <div>
            <div className="nav">
                <div>
                    <img className="logo" src={logo} alt="Logo" />
                </div>
                <div className='nav-names'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/blog"}>Blog</Link>
                    <Link to={"/product"}>Product</Link>
                    <Link to={"/cart"}>Cart</Link>
                    <Link to={"/contact"}>Contact</Link>
                </div>
                <div className="login">
                    <button><Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>LOGIN</Link></button>
                </div>
            </div>

            <div className="login-container">
                <div className="login-box">
                    <h2>Register</h2>
                    {message && <p className="message">{message}</p>}
                    <form onSubmit={handleRegister}>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="Email ID"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-btn">Register</button>
                    </form>
                    <p className="register-link">
                        Already have an account? <Link to="/login">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
