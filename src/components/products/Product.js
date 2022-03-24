import React, { useState } from 'react'
import styles from './Product.module.scss'

const Product = (props) => {
    return (
    <div className={styles.card}>
        <img src={props.item.pic} alt={props.name} className={styles.img}/>

        <div className={styles.infoBox}>
            <h3 className={styles.title}> {props.item.name} </h3>
            <p className={styles.price}>{props.item.price}
            {props.item.discount !== 0 ? <span className={styles.discount}>{props.item.discount}</span>: ''}
            </p>
            <span className={styles.index}>{props.index+1}</span>
        </div>

    </div>
  )
}

export default Product