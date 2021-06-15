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
