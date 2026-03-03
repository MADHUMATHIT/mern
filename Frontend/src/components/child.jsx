import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <h1>Name:{name}</h1>
        <h2>Age:{20}</h2>
        <h3>isActiveStatus:{isActive ? "Active":"inActive"}</h3>
    </div>
  )
}

export default Child