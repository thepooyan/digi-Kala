import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../products/Products';
import Sample from '../sample/Sample';

const Content = () => {
  const products = useSelector(state=>state)
  return (<div>
      <Products data={products}/>
      <Sample/>
      <Sample/>
      <Sample/>
  </div>);
};

export default Content;
