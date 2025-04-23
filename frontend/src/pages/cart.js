import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import "../styles/cart.css";

function Cart(){
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



            <div className='cart-name'>
                <p>Shoping Cart</p>
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
export default Cart;