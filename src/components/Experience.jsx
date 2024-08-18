import SectionHeading from "./SectionHeading";
import ExperienceCard from "./ExperienceCard";
import ecocarImg from "../assets/images/ecocar.jpg"
import bluewristImg1 from "../assets/images/bluewrist1.jpg"
import bluewristImg2 from "../assets/images/bluewrist2.jpg"
import medtImg from "../assets/images/medt.jpg"
import macjhe from "../assets/images/macjhe.jpg"

const Experience = () => {
    const positions = [
        {
            title: "Software Engineer Intern", 
            company: "Bluewrist Inc.", 
            image: bluewristImg1, 
            date: "May 2024 - Present",
            description: "Led a team of 5 to develop a new software application as a part of the software family. I worked with 2D computer vision anomaly detection models and developed a full-stack application, focusing on deployment and customer use. Developed high level systems and software architecture.",
            techstack: ["Python", "Pytorch", "Visual Basic", ".NET", "Flask", "REST API", "Anomalib", "TCP/IP", "AI/ML", "OpenCV"]
        },
        {
            title : "CAVs Software Team", 
            company : "McMaster EcoCAR", 
            image : ecocarImg, 
            date : "Oct 2022 - Present",
            description: "Developed SAE Level 2 algorithms for autonomous driving features in a Cadillac Lyriq, implementing CACC features of ADAS. Implemented lead vehicle detection algorithms and SIL testing in CARLA. Developed vehicle planning algorithms for trajectory transformations and sensor data processing.",
            techstack: ["Python", "Pytest", "CARLA", "RTMaps",, "Clustering Algorithms", "SIL"]
        },
        {
            title: "Mechanics Teaching Assistant",
            company : "McMaster Engineering",
            image: macjhe,
            date: "Sep 2023 - Dec 2023",
            description: "Mentored students on concepts of static mechanics using advanced simulation software through labs and assessments. Led office hours weekly to help 1-2 students during the session.",
            techstack: ["Maple", "FlexPDE"]
        },
        {
            title: "Software Engineer Intern", 
            company: "Bluewrist Inc.", 
            image: bluewristImg2, 
            date : "May 2023 - Aug 2023",
            description: "Designed and created internal company development tool aimed to conduct 3D point cloud segmentation of weld feature extraction. Designed a full-stack ML applications to allow other engineers to gather data and train in-house data. Implemented optimization in C++ to improve runtime efficiency by 86.4%",
            techstack: ["Python", "Pytorch", "C++", "Visual Basic", ".NET", "AI/ML"]
        },
        {
            title: "Software Technical Writer", 
            company: "McMaster Med-T Guided Hands", 
            image : medtImg, 
            date: "Oct 2022 - Dec 2022",
            description: "Transcribed code in C# to readable/understandable code for investors and stakeholders. Provided documentation of the source code aimed to stabilize hand jerk movements using a gyroscope.",
            techstack: ["C#"]
        }
    ];

    return ( 
        <div id="experience" className="experience mt-20 pb-20 pt-32">
            <div className="content">
                <SectionHeading text={"Lucian's professional experience in the field of software and mechatronics engineering."}/>        
                {/* <div className="experience-container flex flex-wrap gap-10"> */}
                <div className="experience-grid hidden-anim">
                    {
                        positions.map((pos, i) => (
                            <ExperienceCard positionInfo={pos} key={i}/>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Experience;