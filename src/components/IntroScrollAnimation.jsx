import React, { useEffect, useRef } from 'react';
import gsap from 'https://cdn.skypack.dev/gsap@3.12.0';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger';

const IntroScrollAnimation = () => {
  const editableRef = useRef(null);

  useEffect(() => {
    if (editableRef.current) {
      if (!CSS.supports('animation-timeline: scroll()') && matchMedia('(prefers-reduced-motion: no-preference)')) {
        gsap.registerPlugin(ScrollTrigger);
  
        const scrub = 0.5;
        const trigger = '.introScrollAnimation';
  
        gsap.set('.animation-text-container > p > span', {
          '--progress': 0,
          backgroundPositionX: 'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
          color: 'transparent',
        });
  
        gsap.to('.animation-text-container > p > span', {
          '--progress': 1,
          scrollTrigger: {
            trigger,
            scrub,
            start: 'top top',
            end: 'bottom top',
          },
        });
  
        gsap.to('.animation-text-container > p > span', {
          color: 'white',
          scrollTrigger: {
            trigger,
            scrub,
            start: 'top top',
            end: 'bottom top',
          },
        });
      }
    }
  }, []);

  return (
    <div className="introScrollAnimation">
      <div className="animation-container">
        <section className="content animation-text-container">
          <p className="text-8xl font-bold">
            <span
             ref={editableRef}
             suppressContentEditableWarning={true}
             >Welcome to my portfolio, <br/>
            let's learn more about what I do.</span>
          </p>
        </section>
      </div>
    </div>
  );
}

export default IntroScrollAnimation;
