import axios, { AxiosError } from "axios";
import { User, ServerError } from "../types/quiz.types";

export const useQuizData = () => {
    async function getUser(): Promise<User | ServerError>{
        try {
         const response = await axios.get<User>("https://Farmq-Backend.surajgupta07.repl.co");
         return response.data
        } catch (error){
           if(axios.isAxiosError(error)){
             const serverError = ( error as AxiosError<ServerError> )
             if(serverError && serverError.response){
               return serverError.response.data
             }
           }
           console.error(error)
           return {errorMessage: "Something went wrong"};
       }
       }
       return{
        getUser
       }
}