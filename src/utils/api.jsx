async function getProducts() {
    const rawResponse = await fetch('https://fakestoreapi.com/products?limit=1');
    const jsonResponse = await rawResponse.json();
    
    return jsonResponse;
}

export default getProducts;