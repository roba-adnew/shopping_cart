async function getProducts() {
    const rawResponse = await fetch('https://fakestoreapi.com/products?limit=25');
    const catalog = await rawResponse.json();
    
    return catalog;
}

export default getProducts;