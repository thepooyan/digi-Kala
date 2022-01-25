import React from "react";
import styles from "./Header.module.scss";
import { faSearch , faShoppingCart , faUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../../fonts/Iranian Sans.ttf'

const HomePage = () => {
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
            <div className={styles.signUp}>
                <FontAwesomeIcon icon={faUser} className={styles.user}/>
                ورود به حساب کاربری
            </div>
            <div className={styles.border}></div>
            <FontAwesomeIcon icon={faShoppingCart} className={styles.cart}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
