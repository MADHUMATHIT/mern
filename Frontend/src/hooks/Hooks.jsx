import React ,{children}from 'react'
import { Link,Outlet} from 'react-router-dom'
import './Hooks.css'
const Hooks = () => {
  return (
    <div>
        <ul className='nestedList'>
            
               <li> <Link to="useState"className='nestedLink'>useState</Link></li>
               <li>  <Link to="form"className='nestedLink'>Form</Link></li>
                 <li> <Link to="useEffect"className='nestedLink'>Effect</Link><br/></li>
                 <li> <Link to="useEffectApi"className='nestedLink'>Effect with Api</Link><br /></li>
                 <li> <Link to="useRef"className='nestedLink'>Ref</Link></li>
                 <li> <Link to="useReducer"className='nestedLink'>Reducer</Link></li>

        </ul>
        <Outlet/>
    </div>
  )
}

export default Hooks