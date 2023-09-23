import "./Navbar.css"
import { Link } from "react-router-dom"


const Navbar = () => {
    
    return <nav className="navbar">
        <ul>
            <Link className="navButtons" to="/">Inicio</Link>
            <Link className="navButtons" to="/Productos">Productos</Link>
            <Link className="navButtons" to="/Categoria/Aros">Aros</Link>
            <Link className="navButtons" to="/Categoria/Colgantes">Colgantes</Link>
            <Link className="navButtons" to="/Categoria/Pulseras">Pulseras</Link>
        </ul>
    </nav>
}

export default Navbar