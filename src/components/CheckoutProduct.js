import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import { getProductData } from './ProductData'

function CheckoutProduct({id}) {

    const [{basket}, dispatch] =useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    const product = getProductData(id)

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProductImage' src={product.image} />

            <div className='checkoutProductInfo'>
                <p className='checkoutProductTitle'>{product.title}</p>
                <p className='checkoutProductPrice'>
                    <small>€</small>
                    <strong>{product.price}</strong>
                </p>
                <div className='checkoutProductRating'>
                    {Array(product.rating)
                    .fill()
                    .map((_,i) => (
                        "⭐"
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
  )
}

export default CheckoutProduct
