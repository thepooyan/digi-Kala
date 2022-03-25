import React from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Products from '../../products/Products';

const Discounts = () => {
    const products = useSelector(state=>state);
    const discount = products.filter(item=>item.discount>0)
    const [searchParam, setsearchParam] = useSearchParams()

    let filtered = discount.filter(item=>{
      if (!searchParam.get('search')) return item
      return item.name.toLowerCase().includes(searchParam.get('search').toLowerCase())
    })
  return (
    <>
    <Products data={filtered}/>    
    </>
  )
}

export default Discounts