import React from 'react'
import styles from './HomePage.module.scss'
import './HomePageCommon.scss'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Add from '../ads/Add'
import Products from '../products/Products'
import { Provider } from 'react-redux'
import Store from '../../redux/productsStore'

const Main = () => {
    return (
        <>
            <Add/>
            <Header/>
            <div className={styles.container}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}

export default Main
