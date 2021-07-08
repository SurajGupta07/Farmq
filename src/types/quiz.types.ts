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
  
export type Action = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "RESET" } | { type: "NEXT_QUESTION" }
  
export type Dispatch = (action: Action) => void;
  
export type QuizContextType = {
    state: TakenQuiz;
    dispatch: Dispatch;
    error: string;
    setError: {};
    quizList: QuizData[];
    setQuizList: {};
    questionNumber: number;
    setQuestionNumber: any;
};
  
export const initialQuizState: TakenQuiz = {
    score: 0,
    currentQuestionNo: 1
};

export type QuizProviderProp = { 
    children: React.ReactNode;
};
  
export type ServerError = { 
    errorMessage: string;
};

export type QuizData = {
    question: string;
    optionOne: string;
    optionTwo: string;
    optionThree: string;
    isRight: string;
    quizes: [];
}

export type QuizQuestion = {
    question: string;
    optionOne: String;
    optionTwo: String;
    optionThree: String;
    isRight: string;
}