import PropTypes from 'prop-types' 
import { CartProductCard } from './utils/Components'
import './Products.css'

function Cart({cart, updateCart}) {
    const itemTotals = cart.map(item => (
        parseInt(item.quantity) * item.product.price.toFixed(2)
    ));

    const sumTotal = itemTotals.reduce((sumTotal, itemTotal) => (sumTotal + itemTotal), 0).toFixed(2)


    return (
        <div 
            id="cart"
            className={cart.length > 0 && "show"}
        >
            {cart.map(item => 
            <CartProductCard 
                key={item.product.id}
                cartItemInfo={item} 
                updateCart={updateCart}  
            />)}
            <div id="total">Total: ${sumTotal}</div>
        </div>
    )
}

Cart.propTypes = {
    cart : PropTypes.array,
    updateCart : PropTypes.func

}

export default Cart;