import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import Products from '../../products/Products'

const BestSeller = () => {
    const products = useSelector(state=>state.products);
    const bestSeller = products.filter(item=>item.seller===true)
    const [searchParam, setsearchParam] = useSearchParams()

    let filtered = bestSeller.filter(item=>{
      if (!searchParam.get('search')) return item
      return item.name.toLowerCase().includes(searchParam.get('search').toLowerCase())
    })

  return (
    <>
    <Products data={filtered}/>    
    </>
  )
}

export default BestSeller