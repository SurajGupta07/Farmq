import { createContext, useContext, useState, useReducer, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { quizReducer } from "../reducers/quiz-reducer"
import { User, QuizContextType, QuizProviderProp, ServerError, initialQuizState } from "../types/quiz.types";

export const QuizContext = createContext<QuizContextType>({} as QuizContextType);

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
     return {errorMessage: "Something went wrong"};
 }
 }

export const QuizProvider = ({ children }: QuizProviderProp) => {
    const [ user, setUser ] = useState<User | null>(null)
    const [state, dispatch] = useReducer(quizReducer, initialQuizState);
    const [error, setError] = useState<string>("")

    useEffect(() => {
      (async function(){
        const user = await getUser();
        if('name' in user){
          return setUser(user)
        } setError("error")
      })()
    }, [])

    return (
        <QuizContext.Provider value={{ user, setUser, state, dispatch, error, setError}}>
          {children}
        </QuizContext.Provider>
      );
}

export function useQuiz(){
    return useContext(QuizContext)
}