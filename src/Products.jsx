import NavBar from './utils/NavBar'

function Products() {

    const ITEMS = Array(3)
        .fill()
        .map(() => `Product #${Math.round(Math.random() * 100)}`);
    const ROWS = Array(3)
        .fill()
        .map((value,i) => `Row #${i}`);

    return (
        <>
            <NavBar />
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