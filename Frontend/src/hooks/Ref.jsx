import React,{useEffect,useRef,useState} from 'react'

const Ref = () => {
    const[count,setCount]=useState(0);
    const like=useRef(0);
    // useEffect(()=>{
    //     console.log("component Re-rendered")
    // })
    // const handleLike=()=>{
    //     like.current=like.current+1;
    // }
    useEffect(()=>{
        console.log("component Re-rendered")
    })

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        {/* <h1>Like: {like.current}</h1> // example1
        <button onClick={handleLike}>❤️</button> */}
        <h1>Like:{like.current}</h1>
    </div>
  )
}

export default Ref