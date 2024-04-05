import { useState, useEffect } from 'react';
import { NavBar, ProductCard } from './utils/Components'
import getProducts from './utils/api';


function Products() {
    const [catalog, setCatalog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useState([])

    console.log(cart);

    function updateCart(cartUpdate) {
        if (cart.length === 0) {
            setCart([cartUpdate])
            return
        }

        const alreadyInCart = cart
            .map(product => product.product.id)
            .includes(cartUpdate.product.id);

            console.log(alreadyInCart)

        if (!alreadyInCart) {
            setCart([...cart, cartUpdate]);
            return
        }

        const newCart = cart.map(product => {
            if (product.id === cartUpdate.id) {
                product.quantity = 
                    parseInt(product.quantity) + parseInt(cartUpdate.quantity);
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
                throw new Error(`Unable to retrieve catalog: ${error}`)
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
                <dialog>We&apos;re getting those catalog for you</dialog>
                <h3>In your cart...</h3>

            </>
        )
    }

    return (
        <>
            <NavBar />
            {cart.length > 0 && 
            <h3>In your cart...</h3>
            }
            {cart.map(item => 
                (<p key={item.product.id}>
                {item.product.title}:
                {item.quantity}
                </p>))

            }
            <div id="catalog"> 
            {catalog.map(product => (
                <ProductCard
                    key={product.id}
                    productInfo={product}
                    updateCart={updateCart}
                />
            ))}
            </div>
            
            
        </>
    )
}

export default Products;