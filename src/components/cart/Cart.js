import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Cart.module.scss'
import Products from '../products/Products'
import MyCart from './MyCart'

const Cart = () => {
    const products = useSelector(state=>state.products)
    const cart = useSelector(state=>state.cart)

  return (
    <div className={styles.wrapper}>
        <div className={styles.map}>
            <Products data={cart}/>
        </div>
        <div className={styles.cart}>
            <MyCart/>
        </div>
    </div>
  )
}

export default Cart