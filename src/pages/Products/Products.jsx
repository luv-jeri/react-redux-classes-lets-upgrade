import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setProducts,
  setError,
  setLoading,
  setStatus,
} from '../../reducers/Product.slice';

import './Product.css';

function Products() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(products);

  const fetchProducts = async () => {
    dispatch(setLoading(true));
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      dispatch(setProducts(data));
      dispatch(setLoading(false));
    } catch (e) {
      dispatch(setError(e.message));
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='product_container'>
      {products.loading && <h1>Loading....</h1>}
      {products.error && <h1>{products.error}</h1>}
      {products?.data.map((el) => {
        return (
          <div key={el.id} className='product_img_container'>
            <img className='product_img' src={el.image} alt={el.id} />
          </div>
        );
      })}
    </div>
  );
}

export default Products;
