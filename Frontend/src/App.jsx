
import Signup from "./auth/Signup";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import Effect from "./hooks/Effect";
import EffectwithApi from "./hooks/EffectwithApi";
import Form from "./hooks/form";
import Hooks from "./hooks/Hooks";
import State from "./hooks/State";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Login from "./auth/Login";
import {Routes,Route} from 'react-router-dom';
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/useState" element={<State/>}></Route>
      <Route path="/hooks" element={<Hooks/>}>
        <Route path="useState" element={<State/>}/>
         <Route path="form" element={<Form/>}/>
          <Route path="effect" element={<Effect/>}/>
        <Route path="effectwithApi" element={<EffectwithApi/>}/>
      </Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>

    </Routes>
    </>
  )
}
export default App