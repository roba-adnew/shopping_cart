import { useState } from 'react'
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
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="productCard">
            <h3 className="title">{productInfo.title}</h3>
            <img className="image" src={productInfo.image}></img>
            <p className="desc">{productInfo.description}</p>
            <div className="checkout">
                <span 
                    className="price"
                >
                    {productInfo.price && `$${productInfo.price.toFixed(2)}`}
                </span>
                <input
                    className="quantity"
                    type="number"
                    value={quantity}
                    onChange={
                        (e) => setQuantity(e.target.value)}
                >

                </input>
                <button onClick={() => {
                    updateCart(
                        cartUpdate(productInfo, quantity))
                }}>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    productInfo: PropTypes.object,
    updateCart: PropTypes.func
}

export { NavBar, ProductCard };