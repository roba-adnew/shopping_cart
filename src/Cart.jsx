import { useState } from 'react';
import PropTypes from 'prop-types'
import { CartProductCard } from './utils/Components'
import './Products.css'
import OrderConfirmation from './Confirmation';

function Cart({ cart, updateCart, setCart }) {
    const [purchased, setPurchased] = useState(false);
    const itemTotals = cart.map(item => (
        parseInt(item.quantity) * item.product.price.toFixed(2)
    ));

    const sumTotal = itemTotals.reduce((sumTotal, itemTotal) => (sumTotal + itemTotal), 0).toFixed(2);

    const activeCart = cart.length > 0;

    return (

        <div
            id="cart"
            className={activeCart && "show"}
        >
            {cart.map(item =>
                <CartProductCard
                    key={item.product.id}
                    cartItemInfo={item}
                    updateCart={updateCart}
                />)
            }
            {activeCart &&
                <div id="total">Total: ${sumTotal}</div>
            }
            {activeCart && <div id="purchase" onClick={() => setPurchased(true)}>Purchase</div>}
            <OrderConfirmation
                sumTotal={sumTotal}
                setCart={setCart}
                purchased={purchased}
                setPurchased={setPurchased}
            />
        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.array,
    updateCart: PropTypes.func,
    setCart: PropTypes.func

}

export default Cart;