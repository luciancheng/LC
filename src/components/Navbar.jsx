import resume from "../assets/files/LC_resume.pdf"
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    function handleClick () {
        if (open) {
            document.getElementById("nav-links-hamburger").classList.remove('show');
        } else {
            document.getElementById("nav-links-hamburger").classList.add('show');
        }
        setOpen(!open);
    }

    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        window.history.pushState(null, '', '#home');
    };

    return ( 
        <div className="Navbar">
            <div className="navbar-content-holder h-12">
                <div className="links flex justify-between items-center h-full content">
                    <div className="links2 flex links-icons">
                        <a className="navbar-link-icons tooltip clickable-item" href={resume} target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-file"></i>
                            <span className="tooltiptext">Resume</span>
                        </a>
                        <a className="navbar-link-icons tooltip clickable-item" href="https://github.com/luciancheng" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github social-link"></i>
                            <span className="tooltiptext">Github</span>
                        </a>
                        <a className="navbar-link-icons tooltip clickable-item" href="https://www.linkedin.com/in/luciancheng/" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin social-link"></i>
                            <span className="tooltiptext">Linkedin</span>
                        </a>
                    </div>
                    
                    <div className="links2 flex links-text">
                        <a href="#home" className="clickable-item" onClick={scrollToTop}>Home</a>
                        <a href="#about" className="clickable-item">About</a>
                        <a href="#experience" className="clickable-item">Experience</a>
                        <a href="#projects" className="clickable-item">Projects</a>
                        <a href="#contact" className="clickable-item">Contact</a>
                    </div>

                    <div className="hamburger-menu clickable-item">
                        <button onClick={handleClick}>
                            <i className="fa-solid fa-bars gray-text text-3xl hamburger-menu-icon"></i>
                        </button>
                    </div>                    
                </div>
            </div>

            {/* Part that shows up under navbar when hamburger menu is pressed */}
            <ul className="nav-links-hamburger gap-6" id="nav-links-hamburger">
                <a href="#home" className="clickable-item" onClick={scrollToTop}>Home</a>
                <a href="#about" className="clickable-item">About</a>
                <a href="#experience" className="clickable-item">Experience</a>
                <a href="#projects" className="clickable-item">Projects</a>
                <a href="#contact" className="clickable-item">Contact</a>
                <a href={resume} target="_blank" rel="noreferrer" className="clickable-item">
                    <span className="navbar-links-gradient">
                        Resume 
                        <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                    </span>
                </a>
                <a href="https://github.com/luciancheng" target="_blank" rel="noreferrer" className="clickable-item">
                    <span className="navbar-links-gradient">
                        Github 
                        <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/luciancheng/" target="_blank" rel="noreferrer" className="clickable-item">
                    <span className="navbar-links-gradient">
                        LinkedIn 
                        <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                    </span>
                </a>
            </ul>
        </div>
     );
}
 
export default Navbar;