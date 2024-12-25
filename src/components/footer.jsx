import "../styles/footer.css"
import { Link } from "react-router-dom"
const Footer=()=>{
return(
    <>
    <div className="footer">

   <Link to="https://github.com/Saymar567" target="blank_">
   <img src="/icons8-github-30.png" alt="github" />
   </Link> 
   <Link to="https://www.linkedin.com/in/miguel-angel-jimenez-calcedo-web-dev/" target="blank_">
    <img src="/icons8-linkedin-logo-30.png" alt="linkedin" />
   </Link> 
   <a href="mailto:majc@gmail.com">
    <img src="/icons8-mail-30.png" alt="mail"/>
   </a> 
    </div>
    </>
)
}
export default Footer