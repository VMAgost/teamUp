import {Achievement, Companies, Courses, Feedback, Navbar} from "../component/index.js";
import Hero from "../component/Hero.jsx";

export const Home = () => {
    return (
        <div>
            <Hero/>
            <Companies/>
            <Courses/>
            <Achievement/>
            <Feedback/>
        </div>
    )
}
