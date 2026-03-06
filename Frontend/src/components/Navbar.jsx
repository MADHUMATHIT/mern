import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="navbar">
                <li className="list">
                    <Link to="/" className="link">Home</Link>
                </li>
                <li className="list">
                    <Link to="/about" className="link">About</Link>
                </li>
                <li className="list">
                    <Link to="/contact" className="link">Contact</Link>
                </li>
                <li className="list">
                    <Link to="/services" className="link">Services</Link>
                </li>
                {/* <li className="list">
                     <Link to="/state" className="link">useState</Link>
                </li> */}
                <li className="list">
                     <Link to="/hooks" className="link">Hooks</Link>
                </li>
                     {/* <li className="list">
                     <Link to="/effect" className="link">Effect</Link>
                </li> */}
                <li className="list">
                     <Link to="/todo" className="link">Todo</Link>
                </li>
                      <li className="list">
                     <Link to="/login" className="link">Log in</Link>
                </li>
                <li className="list">
                     <Link to="/signup" className="link">sign up</Link>
                </li>
                
            </ul>
        </nav>
    </div>
  )
}
export default Navbar