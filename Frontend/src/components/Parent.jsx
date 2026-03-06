import React from 'react'
import Child from './Child'

const Parent = ({message}) => {
  return (
    <div>
      <button onClick={()=>message("Message from")}>send message</button>

      <Child name="madhumathi"  age={20} isActive={true} food={["Biriyani","curd","Lemon"]}
        contact={{mobile:9392113976, email:"thatiparthymadhumathi@gmail.com"}}
        sendMessage={message}/>
          
        <Child name="madhu"  age={21} isActive={true} food={["Biriyani","curd","Lemon"]}
        contact={{mobile:9392113975, email:"madhumathi@gmail.com"}}
        sendMessage={message}/>

    </div>
  )
}

export default Parent