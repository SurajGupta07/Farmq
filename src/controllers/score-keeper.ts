import { Option, Question } from "../types/quiz.types";
import { quizData } from "../data/quizData";

function calculateScore(currentScore: number, question: Question, selectedOption: Option, bonusPoints=5): number {
  const negativePoint = question.negativePoint ? question.negativePoint : 0;
  return selectedOption.isRight 
      ? currentScore + question.points + bonusPoints
      : currentScore - negativePoint
}

calculateScore(10, quizData.questions[0], quizData.questions[0].options[1])

export { calculateScore }