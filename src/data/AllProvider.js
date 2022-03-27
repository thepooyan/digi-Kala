import React from 'react'
import { Provider } from 'react-redux'
import { LoginProvider } from './LoginContext'
import Store from '../redux/productsStore'

const AllProvider = (props) => {
  return (
    <Provider store={Store}><LoginProvider>{props.children}</LoginProvider></Provider>
  )
}

export default AllProvider