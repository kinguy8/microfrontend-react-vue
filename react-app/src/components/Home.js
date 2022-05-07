import React, { useState } from 'react';

export const Home = () => {
  const [count, setCount] = useState(0);
  return <div>
    <h1>Hello React!</h1>
    <h3>Count: {count}</h3>
    <button onClick={() => setCount(count+1)}>Increment</button>
    <button onClick={() => setCount(count-1)}>Decrement</button>
  </div>
};