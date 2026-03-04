import React ,{useEfect,useState}from 'react'

const EffectwithApi = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUser(data))
        .catch((err)=>console.log(err))
},[])
    return (
    <div>
        <ul>
            {data.map((value,index)=>(
                <li key={data.id}>
                    <p>Name: {value.name}</p>
                    <p>Email: {value.email}</p>
                    <p></p>
                    </li>
            ))
       }
            </ul>
    </div>
  )
}

export default EffectwithApi
