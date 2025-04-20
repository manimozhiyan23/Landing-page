import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import product1 from "../images/product-1.jpg";
import product2 from "../images/product-2.jpg";
import product3 from "../images/product-3.jpg";
import product4 from "../images/product-4.jpg";
import product5 from "../images/product-5.jpg";
import product6 from "../images/product-6.jpg";
import product7 from "../images/product-7.jpg";
import product8 from "../images/product-8.jpg";
import product9 from "../images/product-9.jpg";
import product10 from "../images/product-10.jpg";
import product11 from "../images/product-11.jpg";
import product12 from "../images/product-12.jpg";
import feature from "../images/feature.jpg";

import "../styles/product.css"
function Product(){
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
                <Link to={"/cart"}>cart</Link>
                <Link to={"/contact"}>contact</Link>
                </div>
                <div className="login">
                    <button>LOGIN</button>
                </div>
            </div>

            <div>
                <div className='product-shop'>
                    <p>Shop</p>
                </div>
                <div className='product-shop-home'>
                    <p>Home/Shop</p>
                </div>
            </div>


            <div className='all-image'>
                <div className='product-first-four'>
                <div>
                    <img src={product1}/>
                    <p>Abstract Table</p>
                    <p>$40.00</p>
                    <button>ADD TO CART</button>
                </div>
                <div>
                    <img src={product2}/>
                    <p>Coffee Table</p>
                    <p>$60.00</p>
                    <button>ADD TO CART</button>

                </div>
                <div>
                    <img src={product3}/>
                    <p>Modern Sofa</p>
                    <p>$80.00</p>
                    <button>ADD TO CART</button>

                </div>
                <div>
                    <img src={product4}/>
                    <p>Modren Chair</p>
                    <p>$40.00</p>
                    <button>ADD TO CART</button>

                </div>
                </div>
                
                <div className='product-second-four'>
                <div>
                    <img src={product5}/>
                    <p>Elegant Chair</p>
                    <p>$70.00</p>
                    <button>ADD TO CART</button>

                </div>
                <div>
                    <img src={product6}/>
                    <p>Daily Chair</p>
                    <p>$70.00</p>
                    <button>ADD TO CART</button>

                </div>
                <div>
                    <img src={product7}/>
                    <p>Modren Chair</p>
                    <p>140.00</p>
                    <button>ADD TO CART</button>

                </div>
                <div>
                    <img src={product8}/>
                    <p>Elegant Chair</p>
                    <p>$80.00</p>
                    <button>ADD TO CART</button>

                </div>
                </div>

                <div className='product-third-four'>
                <div>
                    <img src={product9}/>
                    <p>Single Sofa</p>
                    <p>$60.00</p>
                    <button>ADD TO CART</button>

                </div>
                <div>
                    <img src={product10}/>
                    <p>Modren Sofa</p>
                    <p>$60.00</p>
                    <button>ADD TO CART</button>

                </div>
                <div>
                    <img src={product11}/>
                    <p>Confort Chair</p>
                    <p>$40.00</p>
                    <button>ADD TO CART</button>

                </div>
                <div>
                    <img src={product12}/>
                    <p>Daily Sofa</p>
                    <p>$70.00</p>
                    <button>ADD TO CART</button>

                </div>
                </div>
               
            </div>


            <div className='feature'>
                <div>
                    <img src={feature}/>
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
export default Product;