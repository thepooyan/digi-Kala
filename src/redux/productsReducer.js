import { pic } from "../data/pictures"

const INITIAL_STATE = [
    {id:1, discount: 20,name:'Iphone 12', price:2000, pic:pic.iphone12},
    {id:2, discount: 0,name:'Samsong Galaxy A03', price:3000, pic:pic.galaxyA03},
    {id:3, discount: 0,name:'Samsong Galaxy A12', price:5000, pic:pic.galaxyA12},
    {id:4, discount: 10,name:'Iphone 11', price:6000, pic:pic.iphone11},
    {id:5, discount: 15,name:'Iphone 13 proMAX', price:6000, pic:pic.iphone13proMAX},
    {id:6, discount: 30,name:'Redmi A9', price:6000, pic:pic.redmiA9},
    {id:1, discount: 20,name:'Iphone 12', price:2000, pic:pic.iphone12},
    {id:2, discount: 0,name:'Samsong Galaxy A03', price:3000, pic:pic.galaxyA03},
    {id:3, discount: 0,name:'Samsong Galaxy A12', price:5000, pic:pic.galaxyA12},
    {id:4, discount: 10,name:'Iphone 11', price:6000, pic:pic.iphone11},
    {id:5, discount: 15,name:'Iphone 13 proMAX', price:6000, pic:pic.iphone13proMAX},
    {id:6, discount: 30,name:'Redmi A9', price:6000, pic:pic.redmiA9},
]

const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}
export default productsReducer