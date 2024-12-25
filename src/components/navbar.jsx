import { NavLink } from "react-router-dom"
import "../styles/navbar.css"

const Navbar =()=>{

return(
    <>
    <nav className='nav'>
      <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
        Home
      </NavLink>
      <NavLink to="/photos" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
        Photos
      </NavLink>
    </nav>
    </>
)    
}
export default Navbar