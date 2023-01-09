import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNameAction, setAgeAction } from '../../actions/user.actions';

function User() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>USER - {user.name}</h1>
      <h1>AGE - {user.age}</h1>

      <input
        value={age}
        placeholder='Enter a number'
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <input
        value={name}
        placeholder='Enter a Name'
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <button onClick={() => dispatch(setNameAction(name))}>Update name</button>
      <button onClick={() => dispatch(setAgeAction(age))}>Update age</button>
    </div>
  );
}

export default User;
