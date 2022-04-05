import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartActions";
import CartRemovableItem from "./CartRemovableItem";
import styles from "./MyCart.module.scss";
import Button from '../general/Button'

const MyCart = (props) => {
  const cart = props.data
  const dispatch = useDispatch()
  let wholePrice=0;
  if (cart.length!=0) {
   cart.map(item=>{
     wholePrice+=item.price
   })
  }


  const remove = (id) => {
    dispatch({type:'REMOVE_FROM_CART',id:id,user:props.user})
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>سبد خرید</h3>
      <div className={styles.topSide}>
        <span>جمع قیمت:</span>
        <span>{wholePrice}</span>
      </div>

      
      {cart.map((item) => {
        return <CartRemovableItem product={item} remove={remove}/>;
      })}
      {cart.length==0?<h2 className={styles.error}>سبد خرید شما خالی میباشد!</h2>:<Button className={styles.button}>ادامه</Button>}
      
    </div>
  );
};

export default MyCart;
