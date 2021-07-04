import { createContext, useContext, useState, useReducer, useEffect } from "react";
import { quizReducer } from "../reducers/quiz-reducer"
import { User, QuizContextType, QuizProviderProp, ServerError, initialQuizState } from "../types/quiz.types";
import {useQuizData} from "../hooks/useQuizData"

export const QuizContext = createContext<QuizContextType>({} as QuizContextType);

export const QuizProvider = ({ children }: QuizProviderProp) => {
    const [ user, setUser ] = useState<User | null>(null)
    const [state, dispatch] = useReducer(quizReducer, initialQuizState);
    const [error, setError] = useState<string>("")
    let { getUser } = useQuizData()

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