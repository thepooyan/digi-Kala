import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import styles from './Products.module.scss'

const Products = () => {
    const products = useSelector((state) => state)
    console.log(products)
  return (
    <div className={styles.wrapper}>
        {products.map(item=>{
         return (
             <Product item={item}/>
         )
        })}
    </div>
  )
}

export default Products