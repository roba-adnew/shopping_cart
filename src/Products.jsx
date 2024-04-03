import { NavBar,ProductCard } from './utils/Components'
import getProducts from './utils/api';


function Products() {

    const ITEMS = Array(3)
        .fill()
        .map(() => `Product #${Math.round(Math.random() * 100)}`);

    const ROWS = Array(3)
        .fill()
        .map((value,i) => `Row #${i}`);


    const products = getProducts()[0];
    console.log(products);

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