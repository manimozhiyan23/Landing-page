import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram,
    faTwitter,
    faFacebook,
    faWhatsapp,
    faPinterest,
    faYoutube, } from '@fortawesome/free-brands-svg-icons';
import abovefooter from "../images/above-footer.jpg";
import "../styles/contact.css"
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
 import React from 'react';   //this is for set the google map
function Contact(){
    return(
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
                <p>my cart</p>
                <Link to={"/contact"}>contact</Link>
                </div>
                <div className="login">
                    <button>LOGIN</button>
                </div>
            </div>
            

            
            
            <div className='icons'>
                <div className='location-icon'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>13th Street. 47 W 13th St, DELHI, 10011, INDIA</p>
                </div>
                <div className='phone-icon'>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>(+91) 84283 99789
                    Mon-Sat 9:00am-5:00pm</p>
                </div>
                <div className='email-icon'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>mani@gamil.com
                    24 X 7 online support</p>
                </div>

            </div>

            <div className='above-footer-image'>
                    <img src={abovefooter}/>
                </div>


            <div className='contact-map'>
            <div className='contact-box'>
                <div className='get-in-touch'>
                    <p>Get In Touch</p>
                </div>
                <div className='contact-name-email'>
                    <input placeholder='full name'></input>
                    <input placeholder='email id'></input>
                </div>
                <div className='contact-phone-subject'>
                <input placeholder='phone'></input>
                <input placeholder='subject'></input>
                </div>
                <div className='message'>
                    <textarea placeholder='message' style={{ width: '90%', height: '100px', padding: '10px', fontSize: '16px', borderRadius:"20px", }}></textarea>
                </div>
                <div className='contact-submit'>
                    <button type='submit'>submit</button>
                </div>
            </div>
            <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7210216351154!2d77.25186707553948!3d28.548103975711015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce303269b736f%3A0x6a1dc1cf73e5568e!2sJasish!5e0!3m2!1sen!2sin!4v1744953630246!5m2!1sen!2sin"></iframe>
            </div>

            </div>



            <footer className='contact-footer'>
                <div>
                    <p>© 2025 mani. All rights reserved.</p>
                </div>

                <div className='all-in-one-icons'>
                <div className="contact-footer-icon">
                <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="contact-footer-icon">
                <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="contact-footer-icon">
                <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="contact-footer-icon">
                <FontAwesomeIcon icon={faWhatsapp}/>
                </div>
                <div className="contact-footer-icon">
                <FontAwesomeIcon icon={faPinterest}/>
                </div>
                <div className="contact-footer-icon">
                <FontAwesomeIcon icon={faYoutube}/>
                </div>
                </div>
                
            </footer>

    


            
            

           







        </div>
        </>
    );
}
export default Contact;