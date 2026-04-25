import Intro from "../components/sections/Intro";
import IntroScrollAnimation from "../components/sections/IntroScrollAnimation";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";

import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Home = () => {
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-element');
          observer.unobserve(entry.target);
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
};

export default Home;
