
const productsData=[
    {
        id:"1",
        title: "It - Stephen King",
        price:29.99,
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982127794/it-9781982127794_xlg.jpg",
        rating: 5
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
        title: "Xbox One S",
        price: 299.99,
        image: "https://m.media-amazon.com/images/I/61zjj2sgXML.jpg",
        rating: 5
    }
]

function getProductData(id) {
    let productData = productsData.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id.id);
        return undefined;
    }

    return productData;
}

export { productsData, getProductData };
