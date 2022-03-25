import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Product.module.scss'

const Product = (props) => {
    const navigation = useNavigate();
    const navigate = () => {
        navigation(`/${props.item.id}`)
    }
    return (
    <div className={styles.card} onClick={navigate}>
        <img src={props.item.pic} alt={props.name} className={styles.img}/>

        <div className={styles.infoBox}>
            <h3 className={styles.title}> {props.item.name} </h3>
            <p className={styles.price}>{props.item.price}
            {props.item.discount !== 0 ? <span className={styles.discount}>{props.item.discount}</span>: ''}
            </p>
            <span className={styles.index}>{props.index+1}</span>
            {props.item.seller && <p className={styles.seller}>
                <FontAwesomeIcon icon={faFire}/>
                پر‌فروش</p>}
        </div>

    </div>
  )
}

export default Product