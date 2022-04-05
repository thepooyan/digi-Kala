import React, { useContext, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { faSearch, faShoppingCart, faUser, faSortDown, faSignOutAlt, faShoppingBag, faHeart, faComment, faCircle, faUserCircle, faBars, faFireAlt, faTicketAlt, faPercent, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fonts/Iranian Sans.ttf";
import { Link, useSearchParams } from "react-router-dom";
import { LoginContext } from "../../data/LoginContext";

import logo from "../../assets/images/logo.svg";
import QueryNavLink from "../../data/QueryNavLink";
import AddProductsModal from "../addProducts/AddProducts";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/usersActions";

const HomePage = () => {
  const [login,logout,isLoggedIn] = useContext(LoginContext);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [addProductModal, setaddProductModal] = useState(false)
  const dispatch = useDispatch()

  const loginClickHandler = () => {
    setIsLoginClicked(!isLoginClicked);
  };
  const expandAddProduct = () => {
    setaddProductModal(true)
  }

  const [searchParam, setsearchParam] = useSearchParams();
  const searchHandler = (e) => {
    let search = e.target.value;
    setsearchParam({search})
  }

  const deleteButton = () => {
    dispatch(deleteUser(isLoggedIn.username))
    logout()
  }

  return (
    <>
    {addProductModal&&<AddProductsModal close={setaddProductModal}/>}
      <div className={styles.container}>
        <QueryNavLink to='/' className={styles.one}>
          <img src={logo} className={styles.logo}></img>
        </QueryNavLink>
        <div className={styles.two}>
          <input
            className={styles.input}
            type="text"
            name=""
            id=""
            placeholder="جستجو در دیجی کالا..."
            value={searchParam.get('search')}
            onChange={searchHandler}
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
            <div className={styles.loggedIn}>
              <div onClick={loginClickHandler} className={styles.onclick}>
              <FontAwesomeIcon icon={faUser} className={styles.user} />
              <FontAwesomeIcon icon={faSortDown} className={styles.tic} />
              </div>
              {isLoginClicked && (
                <div className={styles.extend}>
                  <div className={styles.item}>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className={styles.mainIcon}
                    />
                    <span className={styles.mainItem}>{isLoggedIn.nickname}</span>
                  </div>
                  {isLoggedIn.admin && <div className={styles.item} onClick={expandAddProduct}>
                    <FontAwesomeIcon className={styles.icon} icon={faCircle} />
                    <span>اضافه کردن محصول</span>
                  </div>}
                  
                  <div className={styles.item} onClick={deleteButton}>
                    <FontAwesomeIcon className= {styles.icon} icon={faHeart} />
                    <span>حذف اکانت</span>
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
                    onClick={logout}
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
          <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} className={styles.cart} /></Link>
        </div>
      </div>
      <div className={styles.secondLayer}>
        <div className={styles.right}>
          <span className={styles.main}>
            <FontAwesomeIcon icon={faBars} className={styles.icon}/>
            دسته‌بندی کالا‌ها</span>

          <div className={styles.partOne}>
            <QueryNavLink to='/bestseller' className={({isActive})=> styles[isActive?'activeItem':'item']} >
            
              <FontAwesomeIcon icon={faFireAlt} className={styles.icon}/>
              پر‌فروش‌ترین‌ها</QueryNavLink>
            <QueryNavLink to='/discounts' className={({isActive})=> styles[isActive?'activeItem':'item']} >
              <FontAwesomeIcon icon={faTicketAlt} className={styles.icon}/>
              تخفیف‌ها و پیشنهاد‌ها</QueryNavLink>
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
