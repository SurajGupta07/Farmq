import { useState, useReducer, useEffect } from "react";
import axios, { AxiosError } from "axios";
import {Header} from "../components/Header"
import { quizReducer, initialQuizState } from "../reducers/quiz-reducer"

type User = { name: string, age: number }

type ServerError = { errorMessage: string }

async function getUser(): Promise<User | ServerError>{
    try {
     const response = await axios.get<User>("https://Farmq-Backend.surajgupta07.repl.co");
     return response.data
    } catch (error){
       if(axios.isAxiosError(error)){
         const serverError = ( error as AxiosError<ServerError> )
         if(serverError && serverError.response){
           return serverError.response.data
         }
       }
       console.error(error)
       return {errorMessage: "something went wrong"};
   }
   }

export function Questions(){
    const [ user, setUser ] = useState<User | null>(null)
    const [state, dispatch] = useReducer(quizReducer, initialQuizState);
    const [error, setError] = useState<ServerError | null>(null)
    
    useEffect(() => {
        (async function(){
          const user = await getUser();
          if('name' in user){
            return setUser(user)
          } setError(user)
        })()
      }, [])
    return(
        <div className="App">
          <Header username={'Suraj'} score={state.score}/>
          <div className="bodyContainer">
          <h2>Current Question: {state.currentQuestionNo}</h2>
          {user && <p>{user.name}</p>}
          {error && <p>{error.errorMessage}</p>}
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