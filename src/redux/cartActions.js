export const addToCart = (product,user) => {
    return {
        type:'ADD_TO_CART',
        product: product,
        user:user
    }
}
export const removeFromCart = (id,user) => {
    return {
        type:'REMOVE_FROM_CART',
        id:id,
        user:user
    }
}