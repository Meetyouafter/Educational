import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementSome,
  decrementSome,
} from './store/toolkit/counterSlice.js';
import styles from './Counter.module.scss';

const Counter = () => {
  const [valueForIncrement, setValueForIncrement] = useState('');
  const [valueForDecrement, setValueForDecrement] = useState('');

  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const incrementValue = () => {
    dispatch(incrementSome(Number(valueForIncrement)));
    setValueForIncrement('');
  };

  const decrementValue = () => {
    dispatch(decrementSome(Number(valueForDecrement)));
    setValueForDecrement('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Counter with toolkit</h1>
      <p className={styles.count}>
        Count:
        {count}
      </p>
      <button type="button" onClick={() => dispatch(increment())}>Increment</button>
      <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
      <div>
        <input type="text" placeholder="For increment" value={valueForIncrement} onChange={e => setValueForIncrement(e.target.value)} />
        <button type="button" onClick={incrementValue}>Increment</button>
      </div>
      <div>
        <input type="text" placeholder="For decrement" value={valueForDecrement} onChange={e => setValueForDecrement(e.target.value)} />
        <button type="button" onClick={decrementValue}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
