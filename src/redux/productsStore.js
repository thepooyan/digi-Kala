import { createStore } from "redux";
import productsReducer from "./productsReducer";


const Store = createStore(productsReducer)

export default Store