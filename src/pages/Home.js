import React from 'react'
import './Home.css'
import Product from '../components/Product'

function Home() {
  return (
    <div className='home'>
        <div className="homeContainer">
            <img 
                className="homeImage" 
                src="https://www.mitchellandbrown.co.uk/wp-content/uploads/2022/03/Prime-Video.jpg"
                alt="" 
            />

            <div className='homeRow'>
                <Product 
                id="323222"
                title="The lean startup" 
                price={29.99}
                image="https://ireland.apollo.olxcdn.com/v1/files/93xkzvlea20c-PT/image;s=516x361"
                rating={4}
                />

                <Product
                id="327532"
                title="Assassins Creed Unity" 
                price={49.99}
                image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91r6NIzvl+L.jpg"
                rating={2}
                />
            </div>

            <div className='homeRow'>
                <Product 
                id="323232"
                title="The lean startup" 
                price={29.99}
                image="https://ireland.apollo.olxcdn.com/v1/files/93xkzvlea20c-PT/image;s=516x361"
                rating={4}
                />

                <Product 
                id="327832"
                title="Assassins Creed Unity" 
                price={49.99}
                image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91r6NIzvl+L.jpg"
                rating={2}
                />

                <Product 
                id="562478"
                title="Descobridor dos sete mares" 
                price={9.99}
                image="https://i1.sndcdn.com/artworks-000223134666-iwx1j2-t500x500.jpg"
                rating={5}
                />
            </div>

            <div className='homeRow'>
                <Product 
                id="374332"
                title="Descobridor dos sete mares" 
                price={9.99}
                image="https://i1.sndcdn.com/artworks-000223134666-iwx1j2-t500x500.jpg"
                rating={5}
                />
            </div>

        </div>
    </div>
  )
}

export default Home
