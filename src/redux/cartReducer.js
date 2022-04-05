const INITIAL_STATE = []

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.product]
        case 'REMOVE_FROM_CART':
            console.log(action.id)
            return state.filter(item=>item.id!=action.id)
        default: 
            return state
    }

}
export default cartReducer