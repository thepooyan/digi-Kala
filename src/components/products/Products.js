import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import styles from './Products.module.scss'

const Products = () => {
    const products = useSelector((state) => state)
  return (
    <div className={styles.wrapper}>
        {products.map((item,index)=>{
         return (
             <Product item={item} index={index}/>
         )
        })}
    </div>
  )
}

export default Products