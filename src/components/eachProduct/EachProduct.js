import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartActions";
import Button from "../general/Button";
import ProductsCart from "../productCart/ProductsCart";
import styles from "./EachProduct.module.scss";

const EachProduct = () => {
  const cart = useSelector(state=>state.cart)
  const ID = useParams();
  const data = useSelector((state) => state.products);
  const product = data[ID.productID - 1];
  const dispatch = useDispatch()
  const [isBought, setisBought] = useState(()=>{
    let cartFilter = cart.filter(item=>item.id==product.id)
    if (cartFilter.length!=0) {return true} else {return false}
  })

  const addProduct = () => {
    dispatch(addToCart(product))
    setisBought(true)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.right}>
        <img src={product.pic} />
        <h3>{product.name}</h3>
        <h3>
          {product.price} تومان
          
        </h3>
        {product.seller && (
          <p className={styles.seller}>
            <FontAwesomeIcon icon={faFire} /> پرفروش
          </p>
        )}
        <Button active={!isBought} onClick={addProduct}>اضافه کردن به سبر خرید</Button>
        {isBought&&<p>به سبد خرید شما اضافه شد. <Link to="/cart">مشاهده سبد خرید</Link></p>}

      </div>

    </div>
  );
};

export default EachProduct;
