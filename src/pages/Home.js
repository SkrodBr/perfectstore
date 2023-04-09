import React, { useState } from 'react'
import './Home.css'
import Product from '../components/Product'
import { Col, Row } from 'react-bootstrap'
import { productsData } from '../components/ProductData'


function Home() {
  return (
    <div className='home'>
        <div className="homeContainer">
            <img 
                className="homeImage" 
                src="https://www.mitchellandbrown.co.uk/wp-content/uploads/2022/03/Prime-Video.jpg"
                alt=""
            />
            
            <Row xs={1} sm={2} md={3} className="homeRow">
                {productsData.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </div>
    </div>
  )
}

export default Home
