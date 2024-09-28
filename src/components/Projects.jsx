import ProjectCard from "./ProjectCard";

// images
import pacemaker from "../assets/images/pacemaker.jpg"
import dimpleCircuit from "../assets/images/dimplecircuit.png"
import embeddedSystems from "../assets/images/embeddedsystem.jpg"
import geneticProgramming from "../assets/images/geneticprogramming.jpg"
import nadinamachina from "../assets/images/nadinamachina.jpg"
import spellcast from "../assets/images/spellcast.png"
import jaylolfadez from "../assets/images/jaylolfadez.png"

const Projects = () => {
    const projects = [
        {
            name: "Jaylolfadez - Startup",
            description: "Developed a full-stack web application social media platform for hair cutting. Website allows for users to interact with posts through comments and likes, and also lets users book hair cuts, leading to a profit of $400.",
            link: "https://jaylolfadez.com/",
            techstack: ["React", "HTML", "CSS", "TailwindCSS", "Javascript", "MongoDB", "AWS EC2", "AWS S3", "NGINX", "Linux", "Docker"],
            image: jaylolfadez
        },
        {
            name: "Discord SpellCast Solver",
            description: "Developed a front-end and back-end algorithm to compute the best possible words on a given board of letters using available letter boosts and available letter swaps to maximize points. This algorithm is done using a prefix tree implementation of a dictionary and advanced recursive backtracking for swap implementation.",
            link: "https://luciancheng.github.io/spellcast_solver/",
            techstack: ["React", "HTML", "CSS", "Javascript", "Python", "C++", "TailwindCSS"],
            image: spellcast
        },
        {
            name: "Pacemaker Project",
            description: "Created a pacemaker medical device with a Python Tkinter GUI and physical device. The GUI displayed graph data  and allowed for modificaiton of control variables and parameters.",
            link: "https://github.com/luciancheng/PacemakerProject",
            techstack: ["Python", "Tkinter", "Data Encryption", "Matlab", "Simulink"],
            image: pacemaker
        },
        {
            name: "Embedded Systems Design",
            description: "Developed many embedded systems circuits using a microcontroller and actuators built with circuit components and logic",
            link: "https://github.com/luciancheng/Cpp-Projects/tree/main/Embedded-Systems",
            techstack: ["C++", "Embedded Systems", "FSM", "Circuit Design", "ARM", "Microcontroller", "RTOS"],
            image: embeddedSystems
        },
        {
            name: "Smart Baby Monitor",
            description: "Developed a prototype and verification plan for a smart baby monitor device to process frequencies of cries to detect the issue. Built with a filter circuit, Python and a MongoDB AWS database.",
            link: "https://github.com/luciancheng/Python-Projects/tree/main/Dimple",
            techstack: ["Python", "AWS", "MongoDB", "Microcontroller"],
            image: dimpleCircuit
        },
        {
            name: "Genetic Programming Cart",
            description: "Implementation of cross generational program self mutations to achieve the best equation for solving the cart centering problem using binary trees.",
            link: "https://github.com/luciancheng/Cpp-Projects/tree/main/genetic_programming",
            techstack: ["C++", "AI", "Reinforcement Learning", "Deep Learning", "Data structures"],
            image: geneticProgramming
        },
        {
            name: "Arm Exerciser Device",
            description: "Developed a device for my patient with multiple sclerosis to help her regain functionality in her arm by implementing an app that communicates with sensors and actuators.",
            link: "https://github.com/luciancheng/Python-Projects/tree/main/Design%20Projects/Design%20Project%204%3A%20Nadina%20Machina",
            techstack: ["Python", "Raspberry Pi", "Multithreading", "Circuits", "Autodesk Inventor", "CAD"],
            image: nadinamachina
        }
    ]
    return ( 
        <div id="projects" className="projects">
            <div className="content pt-32 pb-52">
                <div className="sectionheading mb-20 text-5xl projects-heading hidden-anim hidden-header">
                    Explore Lucian's personal work and projects.
                </div>
                <div className="project-container gap-8">
                    {
                        projects.map((proj, i) => (
                            <ProjectCard projectInfo={proj} key={i}/>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Projects;