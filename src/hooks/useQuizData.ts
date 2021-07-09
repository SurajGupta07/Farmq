import { useNavigate } from 'react-router-dom';
import {useQuiz} from "../context/quiz-context"

export const useQuizData = () => {
    const navigate = useNavigate(); 
    let { dispatch, questionNumber, setQuestionNumber, quizList, state } = useQuiz();
    let scoreChecker = (e) => {
      if(quizList[questionNumber]?.isRight === e.target.outerText) {
        dispatch({type: 'INCREMENT'})
      } 
      else {
        dispatch({type: "DECREMENT"})
      }
      dispatch({type: "NEXT_QUESTION"})
      setQuestionNumber(questionNumber + 1)
      
      if(state.currentQuestionNo === quizList.length){
        navigate('/result')
      }
    }

    let resetQuiz = () => {
      dispatch({type: "RESET"})
      setQuestionNumber(0)
    }

    return{
    scoreChecker,
    resetQuiz
    }
}