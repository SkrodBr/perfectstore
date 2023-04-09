import React from 'react'
import './Checkout.css'
import Subtotal from '../components/Subtotal'
import { useStateValue } from '../components/StateProvider'
import CheckoutProduct from '../components/CheckoutProduct'

function Checkout() {
  const [{basket}] =useStateValue()

  return (
    <div className="checkout">
      <div className='checkoutLeft'>
        <img className='checkoutAd' src="https://www.wordstream.com/wp-content/uploads/2021/07/optimize-cta-buttons.png" alt=""></img>

        <div>
            <h2 className='checkoutTitle'>
                Your Shopping Basktet
            </h2>
            {basket.map((basketItem,idx) =>(
              <CheckoutProduct
                id={basketItem.id} key={idx}
              />
            ))}
        </div>
      </div>

      <div className='checkoutRight'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
