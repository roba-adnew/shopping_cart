import { useLocation } from 'react-router-dom'

function NavBar() {
    const location = useLocation();

    return (
        <>
            <button>
                <a href="/">Home page</a>
            </button>
            <button>
                <a href="products">Products page</a>
            </button>
        </>
    )
}

export default NavBar;