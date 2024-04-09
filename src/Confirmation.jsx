import { useRef } from 'react'
import PropTypes from 'prop-types'

function OrderConfirmation({ sumTotal, setCart, purchased, setPurchased  }) {
    const dialogRef = useRef(null);

    function reset() {
        if (!dialogRef.current) { return }
        setPurchased(false);
        setCart([]);
        dialogRef.current.close();
        
    }

    const orderNumber = Math.round(Math.random() * 1000);

    return (
        <>
            <dialog ref={dialogRef}>
                <div>
                    Confirming Order #{orderNumber} for a total of ${sumTotal} is on it&apos;s way to you!
                </div>
                <button onClick={() => reset()}>
                    Shop some more</button>
            </dialog>
            {purchased && dialogRef.current.showModal()}
        </>
    )
}

OrderConfirmation.propTypes = {
    sumTotal: PropTypes.number,
    setCart: PropTypes.func,
    purchased: PropTypes.bool , 
    setPurchased: PropTypes.func 
}

export default OrderConfirmation;
