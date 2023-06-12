import React from 'react'
import { useState,useEffect } from 'react'
export default function Prac() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    
  return (
    <button onClick={()=>{
        setCount(count+1);
    }}>You have clicked {count} times</button>
  )
}
