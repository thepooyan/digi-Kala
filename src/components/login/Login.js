import React, { useContext, useRef, useState } from 'react'
import styles from './Login.module.scss'
import logo from '../../images/logo.svg'
import Button from '../general/Button'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../data/GeneralInfo'


const Login = () => {

  let navigate = useNavigate();
  const [isError, setIsError] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext)
  let Username = useRef();
  let Password = useRef();
  const [errorMassage, setErrorMassage] = useState('')

  const loginHandler = (e) => {
    e.preventDefault();
    if (Username.current.value.trim().length===0||Password.current.value.trim().length===0) {
      setErrorMassage('لطفا کادر ها را خالی نگذارید')
      setIsError(true)
    } else {
    if (Username.current.value==='pooyan'&&Password.current.value==='1234')
    {
    setIsLoggedIn(true)
    navigate('/')
    } else {
      setErrorMassage('اطلاعات اشتباه میباشد')
      setIsError(true)
    }}
  }


  const inErrorRemoved = () => {
    if (Username.current.value.trim().length!==0 || Password.current.value.trim().length!==0)
    setIsError(false) 
  }







  return (
    <div className={styles.wrapper}>
        <form className={styles.box} onSubmit={loginHandler}>
            <img className={styles.logo} src={logo} alt="no" />
            <h2 className={styles.title}>
              <span>ورود</span>
              <span>|</span>
              <span>ثبت نام</span>
            </h2>
            <p>سلام!
              <br />
            لطفا اطلاعات ورود خود را وارد کنید</p>
            <div className={styles.inputBox}>
            <input className={styles[`${isError ?'error':''}`]} ref={Username} placeholder='Username' type="text" onBlur={inErrorRemoved}/>
            <input className={styles[`${isError ?`error`:''}`]} ref={Password} placeholder='Password' type="text" onBlur={inErrorRemoved}/>
            {isError&&<span className={styles.errorMassage}>{errorMassage}</span>}
            </div>
            <Button type='submit'>ورود</Button>
              <p className={styles.agreement}>
              با ورود به دیجی‌کالا،
               <a href="#"> شرایط دیجی کالا </a>
               و
              <a href="#"> قوانین حریم خصوصی </a>
               را می پذیرم
              </p>
            
        </form>
    </div>
  )
}

export default Login