import React from 'react'
import Parent from '../components/Parent';

const About = () => {
    const element =<div>Hello World</div>;
    const message =(msg)=>{
      console.log(msg)
    }
  return (
    <div>
        <p>{element}</p>
        <Parent message={message}/>
    </div>
  )
}

export default About