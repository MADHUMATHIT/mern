import React,{useEffect,useState} from 'react'

const Effect = () => {
    const[count,setCount] =useState(0);
    const[value,setValue]=useState

    useEffect(()=>{
        console.log("useEffect Mounted")
    },[count])   
        const handleIncrement = ()=>{ 
            setCount((count)=>count+1);
            setCount((count)=>count+1);
            setCount((count)=>count+1);
        } 
  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <h1>value: {value}</h1>
        <button onClick={()=>setValue(value+1)}>+</button>
        </div>
  )
}

export default Effect