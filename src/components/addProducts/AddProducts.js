import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import reactDom from 'react-dom'
import { useDispatch } from 'react-redux'
import { AddProduct } from '../../redux/productsActions'
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
  const dispatch = useDispatch()
  const name= useRef()
  const price= useRef()
  const discount= useRef()
  const pic= useRef()
  let seller

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(AddProduct(name.current.value,price.current.value,discount.current.value,seller,pic.current.value,))
    close()
  }
  const checkBoxHandler = (e) => {
    seller = e.target.checked;
  }
  return (
    <form className={styles.wrapper} onSubmit={submitHandler}>
        <div className={styles.box}>
            <FontAwesomeIcon className={styles.close} icon={faWindowClose} onClick={close}/>
            <h2 className={styles.title}>اضافه کردن محصول</h2>
            <input className={styles.input} ref={name} type="text" placeholder='نام محصول' />
            <input className={styles.input} ref={price} type="text" placeholder='قیمت' />
            <input className={styles.input} ref={discount} type="text" placeholder='تخفیف (درصد)' />
            <input className={styles.input} ref={pic} type="text" placeholder='تصویر' />
            <input className={styles.checkbox} onChange={e=>{checkBoxHandler(e)}} type="checkbox" /> <span>پر‌فروش</span>
            <button className={styles.button}>اضافه کردن</button>
        </div>
    </form>
  )
}

export default AddProductsModal