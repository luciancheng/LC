import resume from "../assets/files/LC_resume.pdf"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick () {
        // if (isOpen) {
        //     document.getElementById("nav-links-hamburger").classList.remove('show');
        // } else {
        //     document.getElementById("nav-links-hamburger").classList.add('show');
        // }
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // 768px is typical md breakpoint
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        
        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

                    <div className="flex items-center hamburger-menu">
                        <button
                            onClick={handleClick}
                            className="relative w-10 h-10 text-gray-600 hover:text-gray-900 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <div className="absolute">
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
            <ul 
                className={`nav-links-hamburger gap-6 bg-white flex flex-col transition-all duration-300 ease-in-out ${
                    isOpen 
                        ? 'opacity-100 translate-y-0 max-h-96' 
                        : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'
                }`}
            >
                <a href="/#home" className="clickable-item transform transition-all duration-300 hover:translate-x-2" onClick={(e) => {
                    scrollToTop(e);
                    setIsOpen(false);
                }}>Home</a>
                <a href="/#about" className="clickable-item transform transition-all duration-300 hover:translate-x-2" onClick={() => setIsOpen(false)}>About</a>
                <a href="/#experience" className="clickable-item transform transition-all duration-300 hover:translate-x-2" onClick={() => setIsOpen(false)}>Experience</a>
                <a href="/#projects" className="clickable-item transform transition-all duration-300 hover:translate-x-2" onClick={() => setIsOpen(false)}>Projects</a>
                <a href="/#contact" className="clickable-item transform transition-all duration-300 hover:translate-x-2" onClick={() => setIsOpen(false)}>Contact</a>
                <a href={resume} target="_blank" rel="noreferrer" className="clickable-item transform transition-all duration-300 hover:translate-x-2" onClick={() => setIsOpen(false)}>
                    <span className="navbar-links-gradient inline-flex items-center">
                        <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>
                        Resume 
                    </span>
                </a>
                <a href="https://github.com/luciancheng" target="_blank" rel="noreferrer" className="clickable-item transform transition-all duration-300 hover:translate-x-2" onClick={() => setIsOpen(false)}>
                    <span className="navbar-links-gradient inline-flex items-center">
                        <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>
                        Github 
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/luciancheng/" target="_blank" rel="noreferrer" className="clickable-item transform transition-all duration-300 hover:translate-x-2" onClick={() => setIsOpen(false)}>
                    <span className="navbar-links-gradient inline-flex items-center">
                        <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>
                        LinkedIn 
                    </span>
                </a>
            </ul>
        </div>
     );
}
 
export default Navbar;