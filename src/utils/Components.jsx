import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
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

function ProductCard({ productInfo }) {
    return (
        <div className="productCard">
            <h3 className="title">{productInfo.title}</h3>
            <img className="image" src={productInfo.image}></img>
            <p className="desc">{productInfo.description}</p>
            <span className="price">{productInfo.price && `$${productInfo.price}`}</span>
        </div>
    )
}

ProductCard.propTypes = {
    productInfo : PropTypes.object
}

export { NavBar, ProductCard };