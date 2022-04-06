import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import styles from './Cart.module.scss'
import Products from '../products/Products'
import MyCart from './MyCart'
import { LoginContext } from '../../data/LoginContext'

const Cart = () => {
    const cart = useSelector(state=>state.cart)
    const [login,logout,isLoggedIn] = useContext(LoginContext)
    let data;
    if (cart[isLoggedIn.username] == undefined) {data=[]} else {data=cart[isLoggedIn.username]}
  return (
    <div className={styles.wrapper}>
        <div className={styles.map}>
            <Products data={data} noButton={true}/>
        </div>
        <div className={styles.cart}>
            <MyCart data={data} user={isLoggedIn.username}/>
        </div>
    </div>
  )
}

export default Cart