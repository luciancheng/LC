import Intro from "../components/Intro";
import IntroScrollAnimation from "../components/IntroScrollAnimation";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Home = () => {
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1); // Change key to force re-render

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show-element');
              //observer.unobserve(entry.target);
          } else {
            entry.target.classList.remove('show-element');
          }
      });
  });

  const hiddenElements = document.querySelectorAll('.hidden-anim');
  hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [location]);

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