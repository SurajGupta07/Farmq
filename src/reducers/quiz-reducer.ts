export type Action =  { type: "RESET" } | { type: "INCREMENT" }  | { type: "DECREMENT" };

export const initialQuizState = { score: 0, currentQuestionNo: 1 }

export function quizReducer(state: typeof initialQuizState, action: Action){
  switch (action.type) {
    case "INCREMENT":
      return { ...state, score: state.score + 1, currentQuestionNo: state.currentQuestionNo + 1 }
    
    case "DECREMENT": 
      return { ...state, score: state.score - 1, currentQuestionNo: state.currentQuestionNo + 1 }

    case "RESET":
      return { ...state, score: 0, currentQuestionNo: 1 }

    default:
      return state;
  }
}