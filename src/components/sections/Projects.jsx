import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

import pacemaker from "../../assets/images/pacemaker.jpg";
import nadinamachina from "../../assets/images/nadinamachina.jpg";
import spellcast from "../../assets/images/spellcast.jpg";
import jaylolfadez from "../../assets/images/jaylolfadez.jpg";
import kuc from "../../assets/images/kuc.jpg";
import mac2cal from "../../assets/images/mac2cal.jpg";
import leetbuddy from "../../assets/images/leetbuddy.png";
import clearmark from "../../assets/images/clearmark.png";

import leetbuddyVideo from "../../assets/videos/leetbuddy-video.mp4";
import clearmarkVideo from "../../assets/videos/clearmark-video.mov";

const Projects = () => {
    const projects = [
        {name: "ClearMark", category: "iOS AI Grading Platform", year: "2026", description: "A native iOS app that lets teachers and professors manage classes and test/assignment grading with AI. Scan a set of documents with your phone, and provide grading criteria, and the Gemini powered AI will auto grade the work for all students and export into a spreadsheet.", github: "https://github.com/ClearMarkApp", link: "", techstack: ["Swift", "SwiftUI", "Express", "Docker", "Render"], image: clearmark, video: clearmarkVideo },
        { name: "LeetBuddy", category: "LeetCode AI Browser Extension", year: "2025", description: "A Google Chrome extension AI assistant that supercharges the LeetCode interview-prep experience. Whole-page comprehension, text and image analysis from a whiteboard powered by Google Gemini. 3,000+ active users.", github: "https://devpost.com/software/leetbuddy?ref_content=user-portfolio&ref_feature=in_progress", link: "https://chromewebstore.google.com/detail/leetbuddy/nlemdecocfoaimdbfgpilfgdmcllhphn", techstack: ["React", "TailwindCSS", "Express", "Redis", "Docker", "Render"], image: leetbuddy, video: leetbuddyVideo },
        { name: "Jaylolfadez", category: "Social Booking Platform", year: "2024", description: "A full-stack social platform for hair cutting. Users interact with posts through comments and likes and book appointments directly. Generated $400 in early revenue.", github: "", link: "https://jaylolfadez.com/", techstack: ["React", "TailwindCSS", "MongoDB", "Express", "AWS EC2", "AWS S3", "NGINX", "Docker"], image: jaylolfadez },
        { name: "Mac2Cal", category: "University Web Utility", year: "2024", description: "Built with a small team to let McMaster students export their timetable directly to Google Calendar. Adopted by 150+ users.", github: "https://github.com/BaoGeist/McMaster-Calendar-Exporter", link: "https://www.mac2cal.com/", techstack: ["Next.js", "TypeScript", "GCP", "Supabase"], image: mac2cal },
        { name: "Full-Stack Pacemaker", category: "Medical Device", year: "2023", description: "An end-to-end pacemaker prototype with a physical device and a Python Tkinter GUI for visualizing telemetry and tuning control parameters in real-time.", github: "https://github.com/luciancheng/PacemakerProject", link: "", techstack: ["Python", "Tkinter", "MATLAB", "Simulink", "Matplotlib"], image: pacemaker },
        { name: "SpellCast Solver", category: "Algorithm + Web App", year: "2023", description: "Front-end and back-end solver for Discord SpellCast. Computes the highest-scoring word using available boosts and swaps via a prefix-tree dictionary and recursive backtracking.", github: "https://github.com/luciancheng/spellcast_solver", link: "https://luciancheng.github.io/spellcast_solver/", techstack: ["React", "TailwindCSS", "Python", "C++"], image: spellcast },
        { name: "Keep-Up Champions", category: "Roblox Game", year: "2022", description: "A Roblox simulator game built around solid software-engineering principles. 15,000+ lifetime visits and $100+ in revenue.", github: "", link: "https://www.roblox.com/games/7167348960/WORLD-CUP-Keep-Up-Champions", techstack: ["Lua", "Blender", "Roblox Studio"], image: kuc },
    ];

    return (
        <div id="projects" className="projects pt-32 pb-52">
            <div className="content">
                <SectionHeading text={"Explore Lucian's personal work and projects throughout the years."} />
                <div className="project-container">
                    {projects.map((proj, i) => (
                        <ProjectCard projectInfo={proj} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
