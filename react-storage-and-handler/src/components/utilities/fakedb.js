// use local storage to mange cart data
const addToDb = id => {
    let shoppingCart = {};
    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    else {
        shoppingCart = {};
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        // console.log('already exists');
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else {
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}
// remove storage
const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
    console.log('inside-fake-db', id);
}

// delete database
const deleteShoppingCart = ()=>{
    localStorage.removeItem('shopping-cart')
    
}

export { addToDb, removeFromDb, deleteShoppingCart }