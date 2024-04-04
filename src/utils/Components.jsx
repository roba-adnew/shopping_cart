import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

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
            <p className="price">{`$${productInfo.price}`}</p>
        </div>
    )
}

ProductCard.propTypes = {
    productInfo : PropTypes.object
}

export { NavBar, ProductCard };