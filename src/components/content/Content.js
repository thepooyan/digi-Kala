import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Products from '../products/Products';
import Sample from '../sample/Sample';

const Content = () => {
  const products = useSelector(state=>state)
  const [searchParam, setsearchParam] = useSearchParams()
  
  
  let filtered = products.filter(item=>{
    if (!searchParam.get('search')) return item
    return item.name.toLowerCase().includes(searchParam.get('search').toLowerCase())
  })

  return (<div>
      <Products data={filtered}/>
      <Sample/>
      <Sample/>
      <Sample/>
  </div>);
};

export default Content;
