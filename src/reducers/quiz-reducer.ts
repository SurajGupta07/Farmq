export type Action =  { type: "RESET" } | { type: "INCREMENT" }  | { type: "DECREMENT" } | {type: "NEXT_QUESTION"};

export const initialQuizState = { score: 0, currentQuestionNo: 1  }

export function quizReducer(state: typeof initialQuizState, action: Action){
  switch (action.type) {
    case "INCREMENT":
      return { ...state, score: state.score + 1 }
    
    case "DECREMENT": 
      return { ...state, score: state.score - 1 }

    case "RESET":
      return { ...state, score: 0, currentQuestionNo: 1 }

    case "NEXT_QUESTION":
      return { ...state, currentQuestionNo: state.currentQuestionNo + 1 }

    default:
      return state;
  }
}