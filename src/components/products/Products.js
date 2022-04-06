import React from 'react'
import Product from './Product'
import styles from './Products.module.scss'

const Products = (props) => {
  return (
    <div className={styles.wrapper}>
        {props.data.map((item,index)=>{
         return (
             <Product noButton={props.noButton} item={item} index={index}/>
         )
        })}
    </div>
  )
}

export default Products