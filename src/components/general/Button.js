import React from 'react';
import styles from './Button.module.scss'

const Button = ({onClick, active=true, children,className}) => {
  return (
    <button onClick={active?onClick:''} className={`${styles.button} ${active?'':styles['Off']} ${className}`}>{children}</button>
  )
}

export default Button