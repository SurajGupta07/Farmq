/*eslint-disable */
import { createContext, useContext, useState, useReducer, useEffect } from "react";
import { quizReducer } from "../reducers/quiz-reducer"
import { QuizContextType, QuizProviderProp,  initialQuizState, QuizData } from "../types/quiz.types";
import axios from "axios";

export const QuizContext = createContext<QuizContextType>({} as QuizContextType);

export const QuizProvider = ({ children }: QuizProviderProp) => {
    const [state, dispatch] = useReducer(quizReducer, initialQuizState);
    const [error, setError] = useState<string>("")
    const [quizList, setQuizList] = useState<QuizData[]>([])
    const [questionNumber, setQuestionNumber] = useState<number>(0)

    useEffect(() => {
      axios.get<QuizData>('https://Farmq-Backend.surajgupta07.repl.co/quiz')
      .then(response => {
        setQuizList(response.data.quizes)
      })
    }, [])

    return (
        <QuizContext.Provider value={{ state, dispatch, error, setError, quizList, setQuizList, questionNumber, setQuestionNumber }}>
          {children}
        </QuizContext.Provider>
      );
}

export function useQuiz(){
    return useContext(QuizContext)
}