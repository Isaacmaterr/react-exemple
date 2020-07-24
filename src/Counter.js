import React, {useEffect, useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        setCount('isaac');
        return ()=> console.log('testewdw'); 
    },[count])
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

export default Counter;