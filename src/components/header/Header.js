import React, { useContext, useState } from "react";
import styles from "./Header.module.scss";
import { faSearch , faShoppingCart , faUser, faSortDown, faSignOutAlt, faShoppingBag, faHeart, faComment, faCircle, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../../fonts/Iranian Sans.ttf'
import { Link } from "react-router-dom";
import { LoginContext } from "../../data/GeneralInfo";

const HomePage = () => {

  const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const loginClickHandler = () => {
    setIsLoginClicked(!isLoginClicked)
  }
  const logOut = () => {
    setIsLoggedIn(false)
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.one}>
          <div className={styles.logo}></div>
        </div>
        <div className={styles.two}>
            <input className={styles.input} type="text" name="" id="" placeholder="جستجو در دیجی کالا..."/>
            <FontAwesomeIcon icon={faSearch} className={styles.search}/>
        </div>
        <div className={styles.three}>
            {!isLoggedIn?
            <Link to='/login' className={styles.signUp}>
                <FontAwesomeIcon icon={faUser} className={styles.user}/>
                ورود به حساب کاربری
            </Link>
            :
            <div className={styles.loggedIn} onClick={loginClickHandler}>
              <FontAwesomeIcon icon={faUser} className={styles.user}/>
              <FontAwesomeIcon icon={faSortDown} className={styles.tic}/>
              {isLoginClicked&&<div className={styles.extend}>
                <div className={styles.item}><FontAwesomeIcon icon={faUserCircle} className={styles.mainIcon}/><span className={styles.mainItem}>پویان سلمانی</span></div>
                  <div className={styles.item}><FontAwesomeIcon className={styles.icon} icon={faCircle}/><span>فعال سازی کیف پول</span></div>
                  <div className={styles.item}><FontAwesomeIcon className={styles.icon} icon={faHeart}/><span>لیست ها</span></div>
                  <div className={styles.item}><FontAwesomeIcon className={styles.icon} icon={faShoppingBag}/><span>سفارش ها</span></div>
                  <div className={styles.item}><FontAwesomeIcon className={styles.icon} icon={faComment}/><span>دیدگاه ها</span></div>
                <div onClick={logOut} className={`${styles.item} ${styles.lastItem}`}><FontAwesomeIcon className={styles.icon} icon={faSignOutAlt}/><span>خروج از حساب کاربری</span></div>
              </div>}
            </div>
            }
            <div className={styles.border}></div>
            <FontAwesomeIcon icon={faShoppingCart} className={styles.cart}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
