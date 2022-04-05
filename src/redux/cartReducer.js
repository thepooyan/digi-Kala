const INITIAL_STATE = {
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (action.user in state) {
                state[action.user] = [...state[action.user], action.product] 
                return state
            } else {
                state[action.user]=[action.product]
                return state
            }
        case 'REMOVE_FROM_CART':
            state[action.user] = state[action.user].filter(item=>item.id!=action.id)
            return state
        default: 
            return state
    }

}
export default cartReducer