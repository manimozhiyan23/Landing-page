import logo from '../images/logo.jpg';
import home from '../images/CREATIVE HOME INTERIOR.png';
import third from '../images/third content.jpg'; 
import third1 from '../images/third-content 1.jpg'
import hall from '../images/hall.jpg';
import bedroom from '../images/bedroom.jpg';
import kitchen from '../images/kitchen.jpg';
import first from '../images/first-photo.jpg';
import second from '../images/second-photo.jpg';
import third2 from '../images/third-photo.jpg';
import fourth from '../images/fourth-photo.jpg';
import fifth from '../images/fifth-photo.jpg';
import sixth from '../images/sixth-photo.jpg';
import "../styles/home.css"
import { Link } from 'react-router-dom';
function Home(){
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
                <Link to={"/cart"}>cart</Link>
                <Link to={"/contact"}>contact</Link>
                </div>
                <div className="login">
                    <button>LOGIN</button>
                </div>
            </div>
            <div className='home-image'>
                    <img src={home} alt="home"/>
            </div>


            
            <div className="second-content">
                <div className="box">
                <div className="first-image">
                <p className="high-quality">High Quality</p>
            </div>
            <div>
                <p>At Creative Home Interiors, we believe your home
                     should be a reflection of your personality and
                      a place of ultimate comfort. From modern minimalism
                       to timeless elegance, our expert designers craft
                       interiors that are not only visually stunning but also 
                       functional and tailored to your lifestyle.</p>
            </div>
                </div>

                <div className="box">
                <div className="first-image">
                <p  className="high-quality">FAST DELIVERY</p>
            </div>
            <div>
                <p>At Creative Home Interiors, we believe your home
                     should be a reflection of your personality and
                      a place of ultimate comfort. From modern minimalism
                       to timeless elegance, our expert designers craft
                       interiors that are not only visually stunning but also 
                       functional and tailored to your lifestyle.</p>
            </div>
                </div>


                <div className="box">
                <div className="first-image">
                <p  className="high-quality">BEST WARRENTY</p>
            </div>
            <div>
                <p>At Creative Home Interiors, we believe your home
                     should be a reflection of your personality and
                      a place of ultimate comfort. From modern minimalism
                       to timeless elegance, our expert designers craft
                       interiors that are not only visually stunning but also 
                       functional and tailored to your lifestyle.</p>
            </div>
                </div>

            </div>



                <div>
                    <div className="third-content">
                        <div className="third-image">
                        <img className="image" src={third} alt="Logo" />
                        </div>
                        <div className="whole-two-content">
                        <div className="top-content">
                            <p>We make difference in your homes!</p>
                            
                        </div>
                        <div className="second-content">
                            <p>We have been providing great flooring solutions
                             and customer service for homeowners and commercial clients.</p>
                        </div>
                        
                        <div>
                            <img className="image" src={third1} alt="third"/>
                        </div>
                        </div>
                        
                        
                    </div>
                </div>


                <div className="fourth-content">
                    <div className="heading">
                        <p>CATEGORIES</p>
                    </div>
                    <div className="sub-heading">
                        <p>Check out latest updates</p>
                    </div>
                    <div className="total-image">
                    <div>
                        <img src={first}/>
                        <p>LIVING</p>
                    </div>
                    <div>
                        <p>PEACFUL</p>
                        <img src={second}/>
                        
                    </div>
                    <div>
                        <img src={third2}/>
                        <p>STUDY</p>
                    </div>
                    <div>
                        <p>BEDROOM</p>
                        <img src={fourth}/>
                    </div>
                    <div>
                        <img src={fifth}/>
                        <p>DINNING</p>
                    </div>
                    <div>
                        <p>HALL</p>
                        <img src={sixth}/>
                    </div>
                    </div>
                    
                </div>



                <div className="fifth-content">
                    <div className="content">
                    <div className="small-content">
                    <p>You dream It, we design It</p>
                    </div>
                    <div className="medium-content">
                        <p>Contact us today to begin the
                        journey toward you've always envisioned</p>
                    </div>
                    </div>
                    
                    
                </div>

                <footer>
                        <div className="footer">
                            <p>&#169; 2025 mani. All rights reserved.</p>
                        </div>
                </footer>









        </div>
        </>
    );
}
export default Home;