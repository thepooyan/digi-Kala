import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import reactDom from 'react-dom'
import styles from './AddProducts.module.scss'

const AddProductsModal = (props) => {
    return <>
    {reactDom.createPortal(<AddProducts close={props.close}/>,document.getElementById('modal'))}
    </>
}

const AddProducts = (props) => {
  const close = () => {
    props.close(false)
  }
  return (
    <form className={styles.wrapper}>
        <div className={styles.box}>
            <FontAwesomeIcon className={styles.close} icon={faWindowClose} onClick={close}/>
            <h2 className={styles.title}>اضافه کردن محصول</h2>
            <input className={styles.input} type="text" placeholder='نام محصول' />
            <input className={styles.input} type="text" placeholder='قیمت' />
            <input className={styles.input} type="text" placeholder='تخفیف (درصد)' />
            <input className={styles.input} type="text" placeholder='تصویر' />
            <input className={styles.checkbox} type="checkbox" /> <span>پر‌فروش</span>
            <button className={styles.button}>اضافه کردن</button>
        </div>
    </form>
  )
}

export default AddProductsModal