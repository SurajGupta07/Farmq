import { Link } from 'react-router-dom';
import { HeaderProps } from "../types/HeaderProps.types"
import {useQuizData} from "../hooks/useQuizData"

export function Header({username, score}: HeaderProps){
    let { resetQuiz } = useQuizData()
    return(
        <div className="navbar">
            <Link to='/' className="nav_logo"><h1>Farmq</h1></Link>
            <h2 className="headerUser">Welcome {username}</h2>
            <div className="reset_button">
                <button className="button-small"
                onClick={() => resetQuiz()}>Reset</button>
            </div> 
            <h3 className="headerScore">Score: {score}</h3>
        </div>
    )
}
