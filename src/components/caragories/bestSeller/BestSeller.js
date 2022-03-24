import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../products/Products'

const BestSeller = () => {
    const products = useSelector(state=>state);
    const bestSeller = products.filter(item=>item.seller===true)
  return (
    <>
    <Products data={bestSeller}/>    
    </>
  )
}

export default BestSeller