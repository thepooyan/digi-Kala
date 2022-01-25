import React from 'react'
import styles from './HomePage.module.scss'
import './HomePageCommon.scss'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

const Main = () => {
    return (
        <div>
            <Header/>
            <div className={styles.container}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Main
