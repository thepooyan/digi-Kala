import React from 'react'
import styles from './Login.module.scss'
import logo from '../../images/logo.svg'

const Login = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.box}>
            <img src={logo} alt="no" />
        </div>
    </div>
  )
}

export default Login