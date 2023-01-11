import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../reducers/Count.slice.js';

function Count() {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count - {count.value}</h1>
      <button onClick={() => dispatch(increment(10))}>Increment</button>
      <button onClick={() => dispatch(decrement(20))}>Decrement</button>
    </div>
  );
}

export default Count;
