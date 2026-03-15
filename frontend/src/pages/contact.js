import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import abovefooter from "../images/above-footer.jpg";
import "../styles/contact.css";
import logo from '../images/logo.jpg';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [statusMatch, setStatusMatch] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://landing-page-production-4704.up.railway.app/api/contact/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatusMatch("Message sent successfully! Please check your email for confirmation.");
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                setStatusMatch("Failed to send message. Please try again.");
            }
        } catch (error) {
            setStatusMatch("Error connecting to server. Please try again later.");
        }
    };

    return (
        <>
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

                <div className='icons'>
                    <div className='location-icon'>
                        <p>📍 13th Street. 47 W 13th St, DELHI, 10011, INDIA</p>
                    </div>
                    <div className='phone-icon'>
                        <p>📞 (+91) 84283 99789 Mon-Sat 9:00am-5:00pm</p>
                    </div>
                    <div className='email-icon'>
                        <p>✉️ mani@gamil.com 24 X 7 online support</p>
                    </div>

                </div>

                <div className='above-footer-image'>
                    <img src={abovefooter} alt="Above Footer" />
                </div>


                <div className='contact-map'>
                    <form className='contact-box' onSubmit={handleSubmit}>
                        <div className='get-in-touch'>
                            <p>Get In Touch</p>
                        </div>
                        {statusMatch && <p style={{ color: statusMatch.includes('successfully') ? 'green' : 'red', textAlign: 'center' }}>{statusMatch}</p>}
                        <div className='contact-name-email'>
                            <input name='name' placeholder='full name' value={formData.name} onChange={handleChange} required />
                            <input name='email' type='email' placeholder='email id' value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className='contact-phone-subject'>
                            <input name='phone' placeholder='phone' value={formData.phone} onChange={handleChange} required />
                            <input name='subject' placeholder='subject' value={formData.subject} onChange={handleChange} required />
                        </div>
                        <div className='message'>
                            <textarea name='message' placeholder='message' value={formData.message} onChange={handleChange} style={{ width: '90%', height: '100px', padding: '10px', fontSize: '16px', borderRadius: "20px" }} required></textarea>
                        </div>
                        <div className='contact-submit'>
                            <button type='submit'>submit</button>
                        </div>
                    </form>
                    <div className='map'>
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7210216351154!2d77.25186707553948!3d28.548103975711015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce303269b736f%3A0x6a1dc1cf73e5568e!2sJasish!5e0!3m2!1sen!2sin!4v1744953630246!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                    </div>

                </div>



                <footer className='contact-footer'>
                    <div>
                        <p>© 2025 mani. All rights reserved.</p>
                    </div>

                    <div className='all-in-one-icons'>
                        {/* Icons temporarily removed to fix React error */}
                    </div>

                </footer>















            </div>
        </>
    );
}
export default Contact;