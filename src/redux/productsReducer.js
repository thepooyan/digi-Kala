import { pic } from "../data/pictures"

const INITIAL_STATE = [
    {id:1, seller: false, discount: 20,name:'Iphone 12', price:220, pic:pic.iphone12},
    {id:2, seller: true, discount: 0,name:'Samsong Galaxy A03', price:5, pic:pic.galaxyA03},
    {id:3, seller: false, discount: 0,name:'Samsong Galaxy A12', price:5000, pic:pic.galaxyA12},
    {id:4, seller: true, discount: 10,name:'Iphone 11', price:6000, pic:pic.iphone11},
    {id:5, seller: true, discount: 15,name:'Iphone 13 proMAX', price:6000, pic:pic.iphone13proMAX},
    {id:6, seller: false, discount: 30,name:'Redmi A9', price:6000, pic:pic.redmiA9},
    {id:7, seller: true, discount: 20,name:'Iphone SE', price:2000, pic:pic.iphoneSE},
    {id:8, seller: false, discount: 0,name:'Nokia', price:3000, pic:pic.nokia},
    {id:9, seller: true, discount: 0,name:'Iphone 5', price:5000, pic:pic.iphone5},
    {id:10, seller: false, discount: 10,name:'Blackcberry', price:6000, pic:pic.blackberry},
    {id:11, seller: true, discount: 15,name:'xiaomy', price:6000, pic:pic.xiaomy},
    {id:12, seller: false, discount: 30,name:'Xbox', price:6000, pic:pic.xbox},
]

const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
        case 'ADD_PRODUCT':
            let discount;
            if (action.discount=='') {discount = 0} else {
            discount = parseInt(action.discount);
            }
            let price;
            if (action.price=='') price=0 
            else price = parseInt(action.price)
            return [...state,{id:state.length+1,  seller:action.seller, discount: discount, name:action.name , price:price ,  pic:action.pic}]
        case 'DELETE_PRODUCT':
            return state.filter(item=>item.id!=action.id)
    }
}
export default productsReducer