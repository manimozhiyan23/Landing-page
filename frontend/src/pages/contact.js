import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "../styles/contact.css"
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
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
            

           







        </div>
        </>
    );
}
export default Contact;