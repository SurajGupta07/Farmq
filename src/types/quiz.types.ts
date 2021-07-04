export type Option = {
    /**
     * Text to show the player
     */
    text: string;

    /**
     * For the right answer make this true
     */
    isRight: boolean;
};

export type Question = {
    question: string;
    points: number;
    negetivePoint?: number;
    options: Option[];
    negativePoint?: number;
};

export type Quiz = {
    quizName: string;
    questions: Question[];
};

export type TakenQuiz = {
    score: number;
    currentQuestionNo: number;
};
  
export type Action = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "RESET" }
  
export type Dispatch = (action: Action) => void;
  
export type User = { 
    name: string, 
    age: number 
};
  
export type QuizContextType = {
    user: User,
    setUser: {},
    state: TakenQuiz,
    dispatch: Dispatch,
    error: string,
    setError: {}
};
  
export const initialQuizState: TakenQuiz = {
    score: 0,
    currentQuestionNo: 1,
};

export type QuizProviderProp = { 
    children: React.ReactNode 
};
  
export type ServerError = { 
    errorMessage: string 
};