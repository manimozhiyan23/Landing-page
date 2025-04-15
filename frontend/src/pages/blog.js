import "../styles/blog.css"
import Blog_first from "../images/blog-first-image.jpg";
import Blog1 from "../images/blog-image1.jpg";
import Blog2 from "../images/blog-image 2.jpg";
import Blog3 from "../images/blog-image 3.jpg";
import Blog4 from "../images/blog-image 4.jpg";
import Blog5 from "../images/blog-image 5.jpg";
import Blog6 from "../images/blog-image 6.jpg";
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
function Blog(){
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
                <p>contact us</p>
                </div>
                <div className="login">
                    <button>LOGIN</button>
                </div>
            </div>

            
            
            <div className="second">
            <div className='blog-image'>
                <img src={Blog_first}/>
                <div className="both-name">
            <div className="first-name">
                <p>Explore The Features</p>
            </div>
            <div className="second-name">
                <p>Blog Grid</p>
            </div>
            </div>
            </div>
            </div>

            <div className="third">
                <div className="blog">
                    <p>OUR BLOG</p>
                </div>
                <div className="article">
                    <p>CHECK OUR RECENT ARTICLE</p>
                </div>
                <div className="third-blog-image">
                    <div className="first-three">
                    <div className="month">
                        <img  src={Blog1}/>
                        <p>MARCH 20th</p>
                    </div>
                    <div className="month">
                        <img  src={Blog2}/>
                        <p>APRIL 12th</p>
                    </div>
                    <div className="month">
                        <img  src={Blog3}/>
                        <p>APRIL 30th</p>
                    </div>
                    </div>

                    <div className="first-three">
                    <div className="month">
                        <img  src={Blog4}/>
                        <p>MAY 10th</p>
                    </div>
                    <div className="month">
                        <img  src={Blog5}/>
                        <p>JUNE 20th</p>
                    </div>
                    <div className="month">
                        <img  src={Blog6}/>
                        <p>JUNE 30th</p>
                    </div>
                    </div>
                   
                   
                </div>
            </div>


            <div className="fourth">
                <div className="text">
                <div className="question1 question">
                    <p>Where does it come from?</p>
                </div>
                <div className="answer1 answer">
                    <p>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitatio
                         ullamco laboris nisi ut aliquip ex ea commodo consequat.
                         <br/>Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam rem
                          aperiam, eaque ipsa quae ab illo inventore veritatis et 
                          quasi architecto beatae vitae dicta sunt explicabo. Nemo 
                          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                         </p>
                </div>
                <div className="question2 question">
                    <p>What are my payment options?</p>
                </div>
                <div className="answer2 answer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                         eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                         laboris nisi ut aliquip ex ea commodo consequat.
                         <br/>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                         ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                         sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                          aut odit aut fugit.</p>
                </div>
                </div>
              
            </div>

            <footer className="last">
                <p>© 2025 mani. All rights reserved.</p>
            </footer>


            
            








        </div>
        </>
    );
}
export default Blog;