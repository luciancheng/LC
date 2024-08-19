import Intro from "../components/Intro";
import IntroScrollAnimation from "../components/IntroScrollAnimation";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const Home = () => {
    return ( 
        <div>
            <div>
              <Intro />
              <IntroScrollAnimation />
            </div>
            <About />
            <Experience />
            <Projects />
        </div>

     );
}
 
export default Home;