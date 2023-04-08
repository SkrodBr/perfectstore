import React from 'react'
import './Checkout.css'

function Checkout() {
  return (
    <div className="checkout">
      <div className='checkoutLeft'>
        <img className='checkoutAd' src="https://www.wordstream.com/wp-content/uploads/2021/07/optimize-cta-buttons.png" alt=""></img>

        <div>
            <h2 className='checkoutTitle'>
                Your Shopping Basktet
            </h2>
            {/* BascketItem */}
            {/* BascketItem */}
            {/* BascketItem */}
            {/* BascketItem */}
        </div>
      </div>

      <div className='checkoutRight'>
        <h2>
            The subtotal will go here
        </h2>
      </div>
    </div>
  )
}

export default Checkout
