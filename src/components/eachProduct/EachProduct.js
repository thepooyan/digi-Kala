import { faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import styles from './EachProduct.module.scss'

const EachProduct = () => {
    const ID = useParams();
    const data = useSelector(state=>state)
    const product = data[ID.productID-1]
  return (
    <div className={styles.wrapper}>
        <div className={styles.right}>
            <img src={product.pic} alt="" />
        </div>
        <div className={styles.center}>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            {product.seller && <p className={styles.seller}>
                <FontAwesomeIcon icon={faFire}/>
                پر‌فروش</p>}
        </div>
        <div className={styles.card}></div>
    </div>
    )
}

export default EachProduct