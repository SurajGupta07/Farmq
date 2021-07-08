import {useQuiz} from "../context/quiz-context"

export const useQuizData = () => {
    let { dispatch, questionNumber, setQuestionNumber, quizList } = useQuiz();
    let scoreChecker = (e) => {
      if(quizList[questionNumber].isRight === e.target.outerText) {
        dispatch({type: 'INCREMENT'})
      } 
      else {
        dispatch({type: "DECREMENT"})
      }
    }

    let resetQuiz = () => {
      dispatch({type: "RESET"})
      setQuestionNumber(0)
    }

    let incrementQuestion = () => {
      dispatch({type: "NEXT_QUESTION"})
      setQuestionNumber(questionNumber + 1)
    }

    return{
    scoreChecker,
    resetQuiz,
    incrementQuestion
    }
}