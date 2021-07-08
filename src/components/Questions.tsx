import {Header} from "../components/Header"
import {useQuiz} from "../context/quiz-context"
import {useQuizData} from "../hooks/useQuizData"

export function Questions() {
    let { error, state, quizList, questionNumber } = useQuiz();
    let {scoreChecker, incrementQuestion} = useQuizData();

    return (
        <div className="questions">
            <Header username={'Anonymous'} score={state.score}/>
            <div className="bodyContainer card">
                <h2 style={{marginBottom: '1rem', paddingTop: '1rem'}}>Current Question: {state.currentQuestionNo} / 10</h2> 
                    <div>
                        <h5 className="card-title">{quizList[questionNumber]?.question}</h5>
                        {error && <p>Something Went Wrong!</p>}
                        <div>
                            <button style={{marginBottom: '1rem'}} className="button-small"
                            onClick={(e) => scoreChecker(e)}>{quizList[questionNumber]?.optionOne}</button>
                        </div>
                        <div>
                            <button style={{marginBottom: '1rem'}} className="button-small"
                            onClick={(e) => scoreChecker(e)}>{quizList[questionNumber]?.optionTwo}</button>
                        </div>
                        <div>  
                            <button style={{marginBottom: '1rem'}} className="button-small"
                            onClick={(e) => scoreChecker(e)}>{quizList[questionNumber]?.optionThree}</button>
                        </div>
                        <div>  
                            <button style={{marginBottom: '1rem'}} className="button-small"
                            onClick={(e) => incrementQuestion()}>Next Question</button>
                        </div>
                    </div>
            </div>           
        </div>
    )
}