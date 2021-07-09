import { useNavigate } from 'react-router-dom';
import {Header} from "../components/Header"
import {useQuiz} from "../context/quiz-context"
import Farm from "../assets/farm.jpg"

export function Home() {
    let {state} = useQuiz();
    const navigate = useNavigate(); 
    return (
        <div>
            <Header username={'Anonymous'} score={state.score}/>
            <div className="home__block">
                <h1 className="home__header">Can You Pass This Farm Quiz?</h1>
                <img src={Farm} alt="Farming" className="home__image" />
                <p className="home__block__text">Farmers are responsible for the food we all rely on to live, and yet, many of
                    us probably don’t know the first thing about owning a thriving farm. For
                    instance, did you know that the pH of your soil has a great impact on plant
                    health? Or that how to make a fertilizer complete? You may know the term chick,
                    but how about heifer or sow? While there can be many perks to being your own
                    boss in the great outdoors, the job requires a lot of expertise. If you’re up to
                    the challenge, test your farming knowledge with this quiz!</p>
                <div className="home__button--result">
                    <button className="button-small" onClick={() => navigate('/quiz')}>Start</button>
                </div>
            </div>
        </div>
    )
}