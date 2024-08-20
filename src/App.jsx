import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ExperiencePage from "./pages/ExperiencePage";

function App() {
  // const isMobileDevice = () => {
  //   return /Mobi|Android/i.test(navigator.userAgent);
  // };
  // const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    // const cursor = document.querySelector('.cursor');
    // const clickableItems = document.querySelectorAll('.clickable-item');
    // setIsMobile(isMobileDevice());

    // if (!cursor) {
    //   console.error("Cursor element not found");
    //   return;
    // }

    // let curX = 0;
    // let curY = 0;
    // let tgX = 0;
    // let tgY = 0;

    // function move() {
    //   curX += (tgX - curX) / 4;
    //   curY += (tgY - curY) / 4;
    //   cursor.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    //   requestAnimationFrame(move);
    // }

    // function handleMouseMove(event) {
    //   tgX = event.clientX;
    //   tgY = event.clientY;
    // }

    // function handleMouseEnter() {
    //   cursor.classList.add('hovered');
    // }

    // function handleMouseLeave() {
    //   cursor.classList.remove('hovered');
    // }

    // window.addEventListener('mousemove', handleMouseMove);
    // clickableItems.forEach(item => {
    //   item.addEventListener('mouseenter', handleMouseEnter);
    //   item.addEventListener('mouseleave', handleMouseLeave);
    // });

    // move();


    // viewport intersection animation controller

    // return () => {
    //   window.removeEventListener('mousemove', handleMouseMove);
    //   clickableItems.forEach(item => {
    //     item.removeEventListener('mouseenter', handleMouseEnter);
    //     item.removeEventListener('mouseleave', handleMouseLeave);
    //   });
    // };
  }, []);


  return (
    <Router>
      <div className="App">
        {/* <div className="cursor normal" style={{display : isMobile ? 'None' : 'block'}}></div> */}
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/experience/:id" element={<ExperiencePage/>}>
          </Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
