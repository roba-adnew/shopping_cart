import PropTypes from 'prop-types' 
import { CartProductCard } from './utils/Components'
import './Products.css'

function Cart({cart, updateCart}) {
    return (
        <div 
            id="cart"
            className={cart.length > 0 && "show"}>
            {cart.map(item => 
            <CartProductCard 
                key={item.product.id}
                cartItemInfo={item} 
                updateCart={updateCart}  
            />)}
        </div>
    )
}

Cart.propTypes = {
    cart : PropTypes.array,
    updateCart : PropTypes.func

}

export default Cart;