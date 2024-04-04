import { useState, useEffect } from 'react';
import { NavBar, ProductCard } from './utils/Components'
import getProducts from './utils/api';


function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const ITEMS = Array(3)
        .fill()
        .map(() => `Product #${Math.round(Math.random() * 100)}`);

    const ROWS = Array(3)
        .fill()
        .map((value, i) => `Row #${i}`);


    useEffect(() => {
        async function loadProducts() {
            try {
                const products = await getProducts();
                console.log(products);
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
            <ProductCard productInfo={products} />
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