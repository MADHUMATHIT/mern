import React from 'react'

const Child = ({name, age, isActive,food,contact,sendMessage}) => {
  return (
    <div>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h3>ActiveStatus: {isActive ? "Active" : "Inactive"}</h3>
        <br />
        <hr />

        <h1>Fav Food</h1>
        <ul>
          {food.map((value,index)=>(
          <li key={index}>{value}</li>
          ))}
          <br/>
          <hr/>
        </ul>
        <h1>Contact details</h1>
        <p>Mobile: {contact.mobile}</p>
        <p>Email: {contact.email}</p>
        <button onClick={()=>sendMessage("Message from child")}>send message</button>
        <br/>
        <hr/>
    </div>
  )
}

export default Child