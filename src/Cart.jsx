import PropTypes from 'prop-types'
import './Products.css'

function Cart({cart, updateCart}) {
    return (
        <div id="cart">
            {cart.length > 0 && 
            <h3>In your cart...</h3>
            }
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