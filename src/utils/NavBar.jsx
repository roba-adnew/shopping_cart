import { useLocation } from 'react-router-dom'

function NavBar() {
    const location = useLocation();

    return (
        <div id="navBar">
            <span id="homeButton">
                <a href="/">
                    {location.pathname === '/' 
                        ? "Go home" : "We're on the home page"}
                </a>
            </span>
            <span id="productsButton">
                <a href="products">
                {location.pathname === '/products' 
                        ? "Go shopping" : "We're on the product page"}
                </a>
            </span>
        </div>
    )
}

export default NavBar;