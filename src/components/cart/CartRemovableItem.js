import React from 'react'
import styles from './CartRemovableItem.module.scss'

const CartRemovableItem = ({product,remove}) => {

  const clickHandler = () => {
    remove(product.id)
  }
  return (
    <div className={styles.wrapper}>
        <span className={styles.remove} onClick={clickHandler}>Remove</span>
        <span>{product.name}</span>
    </div>
  )
}

export default CartRemovableItem