import {Header} from "../components/Header"
import {useQuiz} from "../context/quiz-context"
import {useQuizData} from "../hooks/useQuizData"

export function Questions() {
    let { error, state, quizList, questionNumber } = useQuiz();
    let {scoreChecker} = useQuizData();
    return (
        <div className="questions">
            <Header username={'Anonymous'} score={state.score}/>
            <div className="bodyContainer card">
                <h2 style={{marginBottom: '1rem', paddingTop: '1rem'}}>Current Question: {state.currentQuestionNo} / {quizList.length}</h2> 
                    <div>
                        <h5 className="card-title">{quizList[questionNumber]?.question}</h5>
                        {error && <p>Something Went Wrong!</p>}
                        <div>
                            <button value="reset" className="button-small option__button"
                            onClick={(e) => scoreChecker(e)}>{quizList[questionNumber]?.optionOne}</button>
                        </div>
                        <div>
                            <button className="button-small option__button"
                            onClick={(e) => scoreChecker(e)}>{quizList[questionNumber]?.optionTwo}</button>
                        </div>
                        <div>  
                            <button className="button-small option__button"
                            onClick={(e) => scoreChecker(e)}>{quizList[questionNumber]?.optionThree}</button>
                        </div>
                    </div>
            </div>           
        </div>
    )
}