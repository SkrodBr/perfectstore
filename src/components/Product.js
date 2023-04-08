import React from 'react'
import './Product.css'

function Product({id, title, image, price, rating}) {
  return (
    <div className='product'>

        <div className='productInfo'>
            
            <p>{title}</p>

            <p className='productPrice'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className='productRating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                    "⭐"
                ))}
                
            </div>

        </div>

        <img src={image} 
        alt="" />

        <button className='productButton'>Add to basket</button>

    </div>
  )
}

export default Product
