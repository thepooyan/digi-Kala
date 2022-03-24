import React from 'react'
import { useSelector } from 'react-redux';
import Products from '../../products/Products';

const Discounts = () => {
    const products = useSelector(state=>state);
    const bestSeller = products.filter(item=>item.discount>0)
  return (
    <>
    <Products data={bestSeller}/>    
    </>
  )
}

export default Discounts