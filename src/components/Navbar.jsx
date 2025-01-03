import resume from "../assets/files/LC_resume.pdf"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
    
        window.location.replace('/#home');

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
                        <a href="/#home" className="clickable-item" onClick={scrollToTop}>Home</a>
                        <a href="/#about" className="clickable-item">About</a>
                        <a href="/#experience" className="clickable-item">Experience</a>
                        <a href="/#projects" className="clickable-item">Projects</a>
                        <a href="/#contact" className="clickable-item">Contact</a>
                    </div>
{/* 
                    <div className="hamburger-menu clickable-item">
                        <button onClick={setIsOpen(!isOpen)}>
                            <i className="fa-solid fa-bars gray-text text-3xl hamburger-menu-icon"></i>
                        </button>
                    </div> */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative w-10 h-10 text-gray-600 hover:text-gray-900 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6">
                                <span
                                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                                        isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                                    }`}
                                />
                                <span
                                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                                        isOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                                />
                                <span
                                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                                        isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                                    }`}
                                />
                            </div>
                        </button>
                    </div>                    
                </div>
            </div>

            {/* Part that shows up under navbar when hamburger menu is pressed */}
            {/* <ul className="nav-links-hamburger gap-6" id="nav-links-hamburger">
                <a href="/#home" className="clickable-item" onClick={scrollToTop}>Home</a>
                <a href="/#about" className="clickable-item">About</a>
                <a href="/#experience" className="clickable-item">Experience</a>
                <a href="/#projects" className="clickable-item">Projects</a>
                <a href="/#contact" className="clickable-item">Contact</a>
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
            </ul> */}

<div
                className={`md:hidden transition-all duration-300 ease-in-out nav-links-hamburger${
                    isOpen
                        ? 'opacity-100 translate-y-0 max-h-96'
                        : 'opacity-0 -translate-y-4 max-h-0'
                } overflow-hidden bg-white`}
            >
                <div className="px-4 pt-2 pb-4 space-y-2">
                    <a
                        href="/#home"
                        onClick={(e) => {
                            scrollToTop(e);
                            setIsOpen(false);
                        }}
                        className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        Home
                    </a>
                    <a
                        href="/#about"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="/#experience"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        Experience
                    </a>
                    <a
                        href="/#projects"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        Projects
                    </a>
                    <a
                        href="/#contact"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;