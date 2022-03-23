import { pic } from "../data/pictures"

const INITIAL_STATE = [
    {id:1, name:'Iphone 12', price:2000, pic:pic.iphone12},
    {id:2, name:'Iphone 7', price:3000},
    {id:3, name:'Iphone 8', price:5000},
    {id:4, name:'Iphone 9', price:6000},
]

const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}
export default productsReducer