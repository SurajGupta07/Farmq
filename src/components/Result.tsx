import { Link } from 'react-router-dom';
import { useQuiz } from "../context/quiz-context"
import { useQuizData } from "../hooks/useQuizData"
import { Header } from '../components/Header';

export function Result() {
    let { state } = useQuiz();
    let { resetQuiz } = useQuizData();
    return(
        <div>
        <Header username={'Anonymous'} score={state.score}/>
        <div className="result__card">
            <div className="result__card__container card">
                <h2 style={{marginBottom: '1rem', paddingTop: '1.5rem'}}>Your Score: {state.score} </h2> 
                <Link to = "/" className="result__link">
                    <button className="button-small"
                    onClick={() => resetQuiz()}>Try Again?</button>
                </Link>
            </div>           
        </div>
    </div>
    )
}