import {Header} from "../components/Header"
import {useQuiz} from "../context/quiz-context"

export function Questions() {
    let {user, error, dispatch, state} = useQuiz();
    return (
        <div className="questions">
            <Header username={'Anonymous'} score={state.score}/>
            <div className="bodyContainer card">
                <div className="card-body">
                    <h2 style={{marginBottom: '1rem'}}>Current Question: {state.currentQuestionNo}</h2>
                    {user && <h5 className="card-title">{user.name}</h5>}
                    {error && <p>Something Went Wrong</p>}
                    <div>
                        <button style={{marginBottom: '1rem'}} className="button-small"
                            onClick={() => {
                            dispatch({type: 'INCREMENT'})
                        }}>Answered it Right!</button>
                    </div>
                    <div>
                        <button style={{marginBottom: '1rem'}} className="button-small"
                            onClick={() => {
                            dispatch({type: 'DECREMENT'})
                        }}>Galti se mistake hogaya</button>
                    </div>
                    <button style={{marginBottom: '1rem'}} className="button-small"
                        onClick={() => {
                        dispatch({type: 'RESET'})
                    }}>Reset</button>
                </div>

            </div>
        </div>
    )
}