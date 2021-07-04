import { Link } from 'react-router-dom';
import { HeaderProps } from "../types/HeaderProps.types"

export function Header({username, score}: HeaderProps){
    return(
        <div className="navbar">
            <Link to='/' className="nav_logo"><h1>Farmq</h1></Link>
            <h2 className="headerUser">Welcome {username}</h2>
            <h3 className="headerScore">Score: {score}</h3>
        </div>
    )
}
