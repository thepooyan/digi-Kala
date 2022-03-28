import React, { useContext, useRef, useState } from "react";
import styles from "./Login.module.scss";
import logo from "../../assets/images/logo.svg";
import Button from "../general/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUser } from "../../redux/usersActions";

const SignUp = () => {
    const dispatch = useDispatch()
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate()
  const signUpHandler = (e) => {
    e.preventDefault();
    if (
      username.current.value.trim().length === 0 ||
      gmail.current.value.trim().length === 0 ||
      nickname.current.value.trim().length === 0 ||
      password.current.value.trim().length === 0
    ) {
      setIsError("لطفا کادر ها را خالی نگذارید");
    } else {
        if (admin==undefined) admin = false        
        dispatch(newUser(username.current.value, password.current.value, nickname.current.value, admin))
        navigate('/login')
    }
  };
  const isErrorRemoved = () => {
    if (
      username.current.value.trim().length !== 0 ||
      password.current.value.trim().length !== 0
    )
      setIsError(false);
  };
  let admin;
  const checkBoxHandler = (e) => {
    admin = e.target.checked;
  }
  const username = useRef();
  const password = useRef();
  const gmail = useRef();
  const isAdmin = useRef();
  const nickname = useRef();

  return (
    <>
      <div className={styles.wrapper}>
        <form className={styles.box} onSubmit={signUpHandler}>
          <img className={styles.logo} src={logo} alt="no" />
          <h2 className={styles.title}>
            <span>ثبت نام</span>
          </h2>
          <p>
            سلام!
            <br />
            لطفا برای ثبت نام اطلاعات خود را وارد کنید
          </p>
          <div className={styles.inputBox}>
            <input
              className={styles[`${isError ? "error" : ""}`]}
              ref={username}
              placeholder="Username"
              type="text"
              onBlur={isErrorRemoved}
            />
            <input
              className={styles[`${isError ? `error` : ""}`]}
              ref={password}
              placeholder="Password"
              type="text"
              onBlur={isErrorRemoved}
            />
            <input
              className={styles[`${isError ? `error` : ""}`]}
              ref={gmail}
              placeholder="Gmail"
              type="text"
              onBlur={isErrorRemoved}
            />
            <input
              className={styles[`${isError ? `error` : ""}`]}
              ref={nickname}
              placeholder="Nickname"
              type="text"
              onBlur={isErrorRemoved}
            />
            <input type="checkbox" className={styles.checkbox} onChange={e=>{checkBoxHandler(e)}}/>
            <span>ادمین</span>
            {isError && <span className={styles.errorMassage}>{isError}</span>}
          </div>
          <Button type="submit">ثبت نام</Button>
          <p className={styles.agreement}>
            با ورود به دیجی‌کالا،
            <a href="#"> شرایط دیجی کالا </a>و
            <a href="#"> قوانین حریم خصوصی </a>
            را می پذیرم
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
