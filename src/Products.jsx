import { useState, useEffect } from 'react';
import { NavBar, ProductCard } from './utils/Components'
import Cart from './Cart.jsx';
import getProducts from './utils/api';


function Products() {
    const [catalog, setCatalog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useState([])

    console.log(cart);

    function addToCart(cartUpdate) {
        if (cart.length === 0) {
            setCart([cartUpdate])
            return
        }

        const alreadyInCart = cart
            .map(product => product.product.id)
            .includes(cartUpdate.product.id);

        if (!alreadyInCart) {
            setCart([...cart, cartUpdate]);
            return
        }

        const newCart = cart.map(product => {
            if (product.product.id === cartUpdate.product.id) {
                product.quantity = parseInt(product.quantity) + parseInt(cartUpdate.quantity);
            }
            return product
        })
        setCart(newCart);
    }

    function updateCart( productId, newQuantity) {
        const newCart = cart.map(product => {
            if (product.product.id === productId) {
                product.quantity = parseInt(newQuantity);
                return product
            }
            return product
        })
        setCart(newCart);
    }


    useEffect(() => {
        async function loadProducts() {
            try {
                const catalog = await getProducts();
                setCatalog(catalog)
            }
            catch (error) {
                console.log(`Unable to retrieve catalog: ${error}`)
            }
            finally {
                setIsLoading(false)
            }
        }
        loadProducts();
    }, [])

    if (isLoading) {
        return (
            <>
                <NavBar />
                <dialog>We&apos;re getting our catalog for you</dialog>
            </>
        )
    }

    return (
        <>
            <NavBar />
            <div id="products">
                <div id="catalog">
                    {catalog.map(product => (
                        <ProductCard
                            key={product.id}
                            productInfo={product}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
                <Cart cart={cart} updateCart={updateCart} />
            </div>
        </>
    )
}

export default Products;