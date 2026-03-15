import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.jpg';
import '../styles/login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('username', data.username);
                setMessage("Login successful!");
                setTimeout(() => navigate('/'), 1000);
            } else {
                setMessage("Invalid email or password");
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
                    <button><Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>REGISTER</Link></button>
                </div>
            </div>

            <div className="login-container">
                <div className="login-box">
                    <h2>Login</h2>
                    {message && <p className="message">{message}</p>}
                    <form onSubmit={handleLogin}>
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
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                    <p className="register-link">
                        Don't have an account? <Link to="/register">Register here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
