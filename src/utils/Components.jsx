import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { cartUpdate } from './functions';
import '../Products.css'

function NavBar() {
    const location = useLocation();

    return (
        <div id="navBar">
            <span id="homeButton">
                <a href="/">
                    {location.pathname === '/'
                        ? "We're on the home page"
                        : "Go home"}
                </a>
            </span>
            <span id="productsButton">
                <a href="products">
                    {location.pathname === '/products'
                        ? "We're on the product page"
                        : "Go shopping"}

                </a>
            </span>
        </div>
    )
}

function ProductCard({ productInfo, updateCart }) {
    return (
        <div className="productCard">
            <h3 className="title">{productInfo.title}</h3>
            <img className="image" src={productInfo.image}></img>
            <p className="desc">{productInfo.description}</p>
            <span className="price">{productInfo.price && `$${productInfo.price}`}</span>
            <button onClick={() => {
                updateCart(cartUpdate(1,productInfo.id))
            }}>
                Add to cart</button>
        </div>
    )
}

ProductCard.propTypes = {
    productInfo : PropTypes.object,
    updateCart : PropTypes.func
}

export { NavBar, ProductCard };