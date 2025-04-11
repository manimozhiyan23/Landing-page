import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
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
                <p>my cart</p>
                <p>contact us</p>
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









        </div>
        </>
    );
}
export default Product;