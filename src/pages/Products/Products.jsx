import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct } from '../../actions/product.actions';
import './Product.css';

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProduct());
  }, [dispatch]);

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
