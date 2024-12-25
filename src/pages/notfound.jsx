import { Link } from "react-router-dom"
import "../styles/notfound.css"
const NotFound=()=>{
    return(
        <div className="error">
            <h2>Error 404</h2>
            <h3>Page not found.</h3>
           <p>Go {<Link to="/photos">back</Link>} to the photos section.</p>
           <p>For every image you see a little carp is saved.</p>
           <img src="/carp.png" alt="Carp-e-diem" />
        </div>
    )
    
}
export default NotFound