import React from 'react'
import styles from './ProductsCart.module.scss'

const ProductsCart = ({product}) => {
  return (
    <div className={styles.wrapper}>
    <h2>فروشنده</h2>  
    <h3>صنایع چرم دلاور</h3>  
    <p>گارانتی اصالت و سلامت فیزیکی کالا</p>
    <div className={styles.box}>
        <span>قیمت فروشنده:</span>
        <span>{product.price}</span>
    </div>
    </div>
  )
}

export default ProductsCart