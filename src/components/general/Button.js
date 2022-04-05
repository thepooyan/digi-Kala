import React from 'react';
import styles from './Button.module.scss'

const Button = ({onClick, active, children}) => {
  return (
    <button onClick={active?onClick:''} className={`${styles.button} ${active?'':styles['Off']}`}>{children}</button>
  )
}

export default Button