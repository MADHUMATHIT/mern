import React ,{children}from 'react'
import { Link,Outlet} from 'react-router-dom'
import './Hooks.css'
const Hooks = () => {
  return (
    <div>
        <ul className='nestedList'>
            <li>
                <Link to="useState"className='nestedLink'>useState</Link><br/>
                <Link to="form"className='nestedLink'>Form</Link><br/>
                 <Link to="useEffect"className='nestedLink'>Effect</Link><br/>
                 <Link to="useEffectApi"className='nestedLink'>Effect with Api</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Hooks