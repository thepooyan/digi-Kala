import { combineReducers } from 'redux';
import product from './productsReducer';
import users from './usersReducer';
import cart from './cartReducer';

export const rootReducer = combineReducers({
    products:product,
    users:users,
    cart:cart
})