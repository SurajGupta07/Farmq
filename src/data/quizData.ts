import { Quiz } from "../types/quiz.types";

const quizData : Quiz = {
    quizName: "FarmQ",
    questions: [
        {
            question: "Blah Blah",
            points: 5,
            negetivePoint: 10,
            options: [
                {
                    text: "blu blas",
                    isRight: true
                }, {
                    text: "mas mus",
                    isRight: false
                }
            ]
        },
        {
            question: "ABC",
            points: 5,
            negetivePoint: 10,
            options: [
                {
                    text: "que qas",
                    isRight: true
                }, {
                    text: "pas was",
                    isRight: false
                }
            ] 
        }
    ]
}

export {quizData};