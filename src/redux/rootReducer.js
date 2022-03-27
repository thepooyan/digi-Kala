import { combineReducers } from 'redux';
import product from './productsReducer';
import users from './usersReducer';

export const rootReducer = combineReducers({
    products:product,
    users:users
})