import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./productsReducer";


const Store = createStore(productsReducer,composeWithDevTools())

export default Store