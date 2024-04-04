import { useState, useEffect } from 'react';
import { NavBar, ProductCard } from './utils/Components'
import getProducts from './utils/api';


function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useState([])

    const ITEMS = Array(3)
        .fill()
        .map(() => `Product #${Math.round(Math.random() * 100)}`);

    const ROWS = Array(3)
        .fill()
        .map((value, i) => `Row #${i}`);

    
    function updateCart(cartUpdate) {
        if (cart.length === 0) {
            setCart([cartUpdate])
            return
        }

        const alreadyInCart = cart
            .map(product => product.id)
            .includes(cartUpdate.id);       
        
        if (!alreadyInCart) {
            setCart([...cart, cartUpdate]);
            return
        }

        const newCart = cart.map(product => {
            if (product.id === cartUpdate.id) {
                product.quantity = product.quantity + cartUpdate.quantity;
                return product
            }    
            return product
        })
        setCart(newCart);
    }


    useEffect(() => {
        async function loadProducts() {
            try {
                const products = await getProducts();
                setProducts(products)
            }
            catch (error) {
                throw new Error(`Unable to retrieve products: ${error}`)
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
                <dialog>We&apos;re getting those products for you</dialog>
            </>
        )
    }

    return (
        <>
            <NavBar />
            <ProductCard productInfo={products} updateCart={updateCart}/>
            <table>
                <tbody>
                    {ROWS.map(row => (
                        <tr key={row}>
                            {ITEMS.map(item => (
                                <td key={item}>{item}</td>
                            ))
                            }
                        </tr>
                    ))

                    }
                </tbody>
            </table>
        </>
    )
}

export default Products;