import React from 'react'

const productsData=[
    {
        id:"1",
        title: "The lean startup",
        price:29.99,
        image: "https://ireland.apollo.olxcdn.com/v1/files/93xkzvlea20c-PT/image;s=516x361",
        rating: 4
    },
    {
        id:"2",
        title: "Assassins Creed Unity",
        price:49.99,
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91r6NIzvl+L.jpg",
        rating: 2
    },
    {
        id:"3",
        title: "Descobridor dos sete mares",
        price: 9.99,
        image: "https://i1.sndcdn.com/artworks-000223134666-iwx1j2-t500x500.jpg",
        rating: 5
    },
    {
        id:"4",
        title: "Descobridor dos sete mares",
        price: 9.99,
        image: "https://i1.sndcdn.com/artworks-000223134666-iwx1j2-t500x500.jpg",
        rating: 5
    }
]

function getProductData(id) {
    let productData = productsData.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id.id);
        return undefined;
    }

    return productData;
}

export { productsData, getProductData };
