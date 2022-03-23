import React from 'react'
import styles from './Product.module.scss'

const Product = (props) => {
  return (
    <div className={styles.card}>
        <img src={props.item.pic} alt={props.name} className={styles.img}/>

        <div className={styles.infoBox}>
            <h3 className={styles.title}> {props.item.name} </h3>
            <p className={styles.price}>{props.item.price}</p>
        </div>

    </div>
  )
}

export default Product