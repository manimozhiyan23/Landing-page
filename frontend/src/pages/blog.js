import "../styles/blog.css"
import Blog_first from "../images/home page 1.webp";
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
                <p>product</p>
                <p>my cart</p>
                <p>contact us</p>
                </div>
                <div className="login">
                    <button>LOGIN</button>
                </div>
            </div>

            
            
            <div className="second">
            <div className='blog-image'>
                <img src={Blog_first} alt=''/>
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
            </div>


            
            








        </div>
        </>
    );
}
export default Blog;