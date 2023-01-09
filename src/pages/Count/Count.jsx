import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incAction, decAction, resetAction, setTotal } from '../../actions/count.actions';

function Count() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1>Count - {count.count}</h1>
      <h1>TOTAL - {count.total}</h1>

      <input
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />

      <button onClick={() => dispatch(incAction(10))}>INC</button>
      <button onClick={() => dispatch(decAction(10))}>DEC</button>
      <button onClick={() => dispatch(setTotal(num))}>SET TOTAL</button>
      <button onClick={() => dispatch(resetAction())}>RESET</button>
    </div>
  );
}

export default Count;
