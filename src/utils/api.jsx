async function getProducts() {
    const rawResponse = await fetch('https://fakestoreapi.com/products?limit=1');
    const jsonResponse = await rawResponse.json();
    const product = jsonResponse[0];
    
    return product;
}

export default getProducts;