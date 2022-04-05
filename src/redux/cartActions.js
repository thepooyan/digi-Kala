export const addToCart = (product) => {
    return {
        type:'ADD_TO_CART',
        product: product
    }
}
export const removeFromCart = ({id}) => {
    return {
        type:'REMOVE_FROM_CART',
        id:id
    }
}