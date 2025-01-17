import ProjectCard from "./ProjectCard";

// images
import pacemaker from "../assets/images/pacemaker.jpg"
import dimpleCircuit from "../assets/images/dimplecircuit.png"
import embeddedSystems from "../assets/images/embeddedsystem.jpg"
import geneticProgramming from "../assets/images/geneticprogramming.jpg"
import nadinamachina from "../assets/images/nadinamachina.jpg"
import spellcast from "../assets/images/spellcast.jpg"
import jaylolfadez from "../assets/images/jaylolfadez.jpg"
import kuc from "../assets/images/kuc.jpg"
import villara from "../assets/images/villara.jpg"
import mac2cal from "../assets/images/mac2cal.jpg"
import leetbuddy from "../assets/images/leetbuddy.png"

const Projects = () => {
    const projects = [
        {
            name: "LeetBuddy",
            description: "Created a Google Chrome extension AI assistant to supercharge the LeetCode learning experience for interviews. This allows for whole page comprehension, text, and image analysis from a whiteboard using Google Gemini LLM.",
            github: "https://devpost.com/software/leetbuddy?ref_content=user-portfolio&ref_feature=in_progress",
            link: "https://chromewebstore.google.com/detail/leetbuddy/nlemdecocfoaimdbfgpilfgdmcllhphn",
            techstack: ["React", "TailwindCSS", "Express", "Redis", "Docker", "Render"],
            image: leetbuddy
        },
        {
            name: "Villara - Startup",
            description: "Founder of Villara. Currently working on designing and developing a full-stack web application to connect a those with talents in freelancing and trade skills to potential customers and clients within a community. Services include haircuts, nails, automotive repairs, and more in the coming future. Currently still in development.",
            github: "",
            link: "",
            techstack: ["React","TypeScript", "Java", "Spring Boot", "PostgreSQL", "Redux", "Google OAuth", "HTML", "CSS", "TailwindCSS", "AWS EC2", "AWS S3", "NGINX", "Linux", "Docker"],
            image: villara
        },
        {
            name: "Jaylolfadez",
            description: "Developed a full-stack web application social media platform for hair cutting. Website allows for users to interact with posts through comments and likes, and also lets users book hair cuts, leading to a profit of $400.",
            github: "",
            link: "https://jaylolfadez.com/",
            techstack: ["React", "HTML", "CSS", "TailwindCSS", "JavaScript", "MongoDB", "AWS EC2", "AWS S3", "NGINX", "Linux", "Docker", "Express"],
            image: jaylolfadez
        },
        {
            name: "Mac2Cal",
            description: "Worked in a group to develop a web application to allow for McMaster students to upload their time tables to Google Calendar, leading to 150+ users.",
            github: "https://github.com/BaoGeist/McMaster-Calendar-Exporter",
            link: "https://www.mac2cal.com/",
            techstack: ["NextJS", "TypeScript", "GCP", "Supabase"],
            image: mac2cal
        },
        {
            name: "Full-Stack Pacemaker",
            description: "Created a pacemaker medical device with a Python Tkinter GUI and physical device. The GUI displayed graph data  and allowed for modificaiton of control variables and parameters.",
            github: "https://github.com/luciancheng/PacemakerProject",
            link: "",
            techstack: ["Python", "Tkinter", "Data Encryption", "Matlab", "Simulink", "Matplotlib"],
            image: pacemaker
        },
        {
            name: "Discord SpellCast Solver",
            description: "Developed a front-end and back-end algorithm to compute the best possible words on a given board of letters using available letter boosts and available letter swaps to maximize points. This algorithm is done using a prefix tree implementation of a dictionary and advanced recursive backtracking for swap implementation.",
            github: "https://github.com/luciancheng/spellcast_solver",
            link: "https://luciancheng.github.io/spellcast_solver/",
            techstack: ["React", "HTML", "CSS", "Javascript", "Python", "C++", "TailwindCSS"],
            image: spellcast
        },
        {
            name: "Genetic Programming Cart",
            description: "Implementation of cross generational program self mutations to achieve the best equation for solving the cart centering problem using binary trees.",
            github: "https://github.com/luciancheng/Cpp-Projects/tree/main/genetic_programming",
            link: "",
            techstack: ["C++", "AI", "Reinforcement Learning", "Deep Learning", "Data structures"],
            image: geneticProgramming
        },
        {
            name: "Keep-Up Champions",
            description: "Developed a Roblox simulator game, incorporating core software engineering principles leading to a lifetime 15000+ visits and $100+ profit.",
            github: "",
            link: "https://www.roblox.com/games/7167348960/WORLD-CUP-Keep-Up-Champions",
            techstack: ["Lua", "Blender", "Roblox Studio"],
            image: kuc
        },
        {
            name: "Embedded Systems Design",
            description: "Developed many embedded systems circuits using a microcontroller and actuators built with circuit components and logic",
            github: "https://github.com/luciancheng/Cpp-Projects/tree/main/Embedded-Systems",
            link: "",
            techstack: ["C++", "Embedded Systems", "FSM", "Circuit Design", "ARM", "Microcontroller", "RTOS"],
            image: embeddedSystems
        },
        // {
        //     name: "Smart Baby Monitor",
        //     description: "Developed a prototype and verification plan for a smart baby monitor device to process frequencies of cries to detect the issue. Built with a filter circuit, Python and a MongoDB AWS database.",
        //     github: "https://github.com/luciancheng/Python-Projects/tree/main/Dimple",
        //     link: "",
        //     techstack: ["Python", "AWS", "MongoDB", "Microcontroller", "LTSpice", "Raspberry Pi"],
        //     image: dimpleCircuit
        // },
        {
            name: "Arm Exerciser Device",
            description: "Developed a device for my patient with multiple sclerosis to help her regain functionality in her arm by implementing an app that communicates with sensors and actuators.",
            github: "https://github.com/luciancheng/Python-Projects/tree/main/Design%20Projects/Design%20Project%204%3A%20Nadina%20Machina",
            link: "",
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