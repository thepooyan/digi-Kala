import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartActions";
import CartRemovableItem from "./CartRemovableItem";
import styles from "./MyCart.module.scss";
import Button from '../general/Button'

const MyCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  let wholePrice=0;
  if (cart.length!=0) {
   cart.map(item=>{
     wholePrice+=item.price
   })
  }


  const remove = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>سبد خرید</h3>
      <div className={styles.topSide}>
        <span>جمع قیمت:</span>
        <span>{wholePrice}</span>
      </div>

      {cart.length==0?<h2 className={styles.error}>سبد خرید شما خالی میباشد!</h2>:''}
      {cart.map((item) => {
        return <CartRemovableItem product={item} remove={remove}/>;
      })}
      <Button className={styles.button}>ادامه</Button>
    </div>
  );
};

export default MyCart;
