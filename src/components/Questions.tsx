import {Header} from "../components/Header"
import {useQuiz} from "../context/quiz-context"

export function Questions(){
    let { user, error, dispatch, state} = useQuiz()
    return(
        <div className="App">
          <Header username={'Suraj'} score={state.score}/>
          <div className="bodyContainer">
          <h2>Current Question: {state.currentQuestionNo}</h2>
          {user && <p>{user.name}</p>}
          {error && <p>Something Went Wrong</p>}
          <div>
            <button onClick={() => {
              dispatch({ type: 'INCREMENT'})
            }}>Answered it Right!</button>
          </div>
          <div>
            <button onClick={() => {
              dispatch({ type: 'DECREMENT' })
            }}>Galti se mistake hogaya</button>
          </div>          
          <button onClick={() => {
            dispatch({ type: 'RESET' })
          }}>Reset</button>
          </div>      
      </div>
    )
}