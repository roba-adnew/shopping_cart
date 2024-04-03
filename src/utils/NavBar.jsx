import { useLocation } from 'react-router-dom'

function NavBar() {
    const location = useLocation();

    const navBarStyle = {
        "display": "flex",
        "flexDirection": "row"

    }
    
    const homeButtonStyle = {
        "textAlign": "center",
        "flexGrow": "1",
        "border": "1px solid black"
    }

    const productsButtonStyle = {
        "textAlign": "center",
        "flexGrow": "1",
        "border": "1px solid black"

    }

    return (
        <div style={navBarStyle}>
            <span style={homeButtonStyle}>
                <a href="/">Home page</a>
            </span>
            <span style={productsButtonStyle}>
                <a href="products">Products page</a>
            </span>
        </div>
    )
}

export default NavBar;