import {Logo} from "../../logo.jsx"
import Navitems from "./Nav-items.jsx"
import Login from "./Login.jsx"
import "./navbar.css"
function Navbar(){
    return(
    <>
     
     <div className="navall">
     <Logo/>
     <Navitems/>
     <Login/>
     
     </div>
     
  
        {/* nav items */}
  

    {/* login/sognup */}
    
    </>
    )
}
export {Navbar}