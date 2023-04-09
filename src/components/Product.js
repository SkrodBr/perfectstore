import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({product}) {

    const [, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: product.id
            },
        })
    }

    return (
        <div className='product'>

            <div className='productInfo'>
                
                <p className='productTitle'>{product.title}</p>

                <p className='productPrice'>
                    <small>$</small>
                    <strong>{product.price}</strong>
                </p>

                <div className='productRating'>
                    {Array(product.rating)
                    .fill()
                    .map((_, i) => (
                        "⭐"
                    ))}
                    
                </div>

            </div>

            <img src={product.image} 
            alt="" />

            <button className='productButton' onClick={addToBasket}>Add to basket</button>

        </div>
    )
}

export default Product
