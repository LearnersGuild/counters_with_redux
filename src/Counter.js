import React from 'react';

export default function ({count, increment, decrement}) {
  return (<div>
    <button onClick={increment}>+</button>
    <p>{count}</p>
    <button onClick={decrement}>-</button>
  </div>)
}