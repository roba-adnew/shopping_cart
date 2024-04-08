import PropTypes from 'prop-types'
import './Products.css'

function Cart({cart, updateCart}) {
    return (
        <div 
            id="cart"
            className={cart.length > 0 && "show"}>
            {cart.map(item => 
                (<p key={item.product.id}>
                {item.product.title}:
                {item.quantity}
                </p>))

            }
        </div>
    )
}

Cart.propTypes = {
    cart : PropTypes.array,
    updateCart : PropTypes.func

}

export default Cart;