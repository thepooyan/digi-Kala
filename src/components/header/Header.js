import React, { useContext, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { faSearch, faShoppingCart, faUser, faSortDown, faSignOutAlt, faShoppingBag, faHeart, faComment, faCircle, faUserCircle, faBars, faFireAlt, faTicketAlt, faPercent, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fonts/Iranian Sans.ttf";
import { Link, NavLink } from "react-router-dom";
import { LoginContext } from "../../data/GeneralInfo";

import logo from "../../assets/images/logo.svg";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const loginClickHandler = () => {
    setIsLoginClicked(!isLoginClicked);
  };
  const logOut = () => {
    localStorage.setItem("isLoggedIn", false);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true" && isLoggedIn === false) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Link to='/' className={styles.one}>
          <img src={logo} className={styles.logo}></img>
        </Link>
        <div className={styles.two}>
          <input
            className={styles.input}
            type="text"
            name=""
            id=""
            placeholder="جستجو در دیجی کالا..."
          />
          <FontAwesomeIcon icon={faSearch} className={styles.search} />
        </div>
        <div className={styles.three}>
          {!isLoggedIn ? (
            <Link to="/login" className={styles.signUp}>
              <FontAwesomeIcon icon={faUser} className={styles.user} />
              ورود به حساب کاربری
            </Link>
          ) : (
            <div className={styles.loggedIn} onClick={loginClickHandler}>
              <FontAwesomeIcon icon={faUser} className={styles.user} />
              <FontAwesomeIcon icon={faSortDown} className={styles.tic} />
              {isLoginClicked && (
                <div className={styles.extend}>
                  <div className={styles.item}>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className={styles.mainIcon}
                    />
                    <span className={styles.mainItem}>پویان سلمانی</span>
                  </div>
                  <div className={styles.item}>
                    <FontAwesomeIcon className={styles.icon} icon={faCircle} />
                    <span>فعال سازی کیف پول</span>
                  </div>
                  <div className={styles.item}>
                    <FontAwesomeIcon className={styles.icon} icon={faHeart} />
                    <span>لیست ها</span>
                  </div>
                  <div className={styles.item}>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faShoppingBag}
                    />
                    <span>سفارش ها</span>
                  </div>
                  <div className={styles.item}>
                    <FontAwesomeIcon className={styles.icon} icon={faComment} />
                    <span>دیدگاه ها</span>
                  </div>
                  <div
                    onClick={logOut}
                    className={`${styles.item} ${styles.lastItem}`}
                  >
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faSignOutAlt}
                    />
                    <span>خروج از حساب کاربری</span>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className={styles.border}></div>
          <FontAwesomeIcon icon={faShoppingCart} className={styles.cart} />
        </div>
      </div>
      <div className={styles.secondLayer}>
        <div className={styles.right}>
          <span className={styles.main}>
            <FontAwesomeIcon icon={faBars} className={styles.icon}/>
            دسته‌بندی کالا‌ها</span>

          <div className={styles.partOne}>
            <NavLink to='/bestseller' className={({isActive})=> styles[isActive?'activeItem':'item']} >
              <FontAwesomeIcon icon={faFireAlt} className={styles.icon}/>
              پر‌فروش‌ترین‌ها</NavLink>
            <span>
              <FontAwesomeIcon icon={faTicketAlt} className={styles.icon}/>
              تخفیف‌ها و پیشنهاد‌ها</span>
            <span>
              <FontAwesomeIcon icon={faPercent} className={styles.icon}/>
              شگفت‌انگیز‌ها</span>
          </div>

          <span>سوالی دارید؟</span>
          <span>فروشنده شوید!</span>
        </div>
        <div className={styles.left}>
          <span>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon}/>
            لطفا شهر خود را انتخاب کنید</span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
