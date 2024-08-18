import SectionHeading from "./SectionHeading";
import TechStack from "./TechStack";

const About = () => {

    const ts_languages = ["python", "cpp", "csharp", "java", "html", "css", "js", "swift"];
    const ts_frameworks = ["pytorch", "react", "django", "mongodb", "nodejs", "expressjs", "mysql", "spring"];
    const ts_devtools = ["git", "github", "gitlab", "vscode", "aws", "gcd", "docker", "figma"];
    
    return ( 
        <div id="about" className="about pt-32">
            <div className="content h-full">
                <SectionHeading text={"Looking into Lucian's background and passion for engineering and technology."}/>
                <div className="info-section flex justify-between gap-20 info-section-1">
                    <div className="info-section-extra-grid-1">
                        <div className="info-section-extra-grid-1-item info-section-extra-grid-1-item__1 hidden-anim hidden-come-from-left">
                        </div>
                        <div className="info-section-extra-grid-1-item info-section-extra-grid-1-item__2 hidden-anim hidden-come-from-right">
                        </div>
                    </div>
                    <div className="info-section-text fade-in-object">
                        <div className="info-section-header">INFO</div>
                        <p>
                            I'm currently a fourth-year Mechatronics and Biomedical Engineering student at McMaster University in Hamilton, Ontario.
                            I joined the Integrated Biomedical Engineering and Health Sciences Program (iBioMed) in 2021, with an expected graduation in 2026.
                            For a long time, software and hardware and hardware have always been a interest and passion of mine growing up, having tinkered in these fields at a young age on my own and through clubs.
                            I am always looking for new opportunities to showcase my skills and expertise in technology, and am currently looking for software engineering internship opportunities for the summer of 2025.
                        </p>
                        <p>
                            As a passionate engineer, I strive to innovate and develop solutions to common problems that impact a large population. I enjoy using my multidisciplinary skills in software, electrical, mechanical, and biomedical engineering to create projects from end-to-end development.
                            I love working with and developing complex and robust software, such as full-stack computer and web applications. This allows me to use my knowledge in embedded systems, healthcare, and machine learning to come up with innovative solutions.
                        </p>
                        <p>
                            During my experiences at internships, clubs, and projects, I was forunate enough to develop awesome software pertaining to 2D and 3D machine learning computer vision algorithms and its deployment as well as developing autonomous driving algorithms.
                            I worked with many great people in small and large teams, allowing me to learn from my mentors.
                        </p>
                    </div>
                </div>

                <div className="seperator"></div>
                <div className="info-section-header">EDUCATION</div>

                <div className="info-section flex justify-between gap-20 info-section-2 ">
                    <div className="info-section-text fade-in-object">
                        <h2 className="text-4xl font-bold mt-6">
                            McMaster University
                        </h2>
                        <h3 className="text-2xl">
                            Department of Engineering
                        </h3>
                        <div className="unimportant-text mt-3">September 2021 - Expected: April 2026</div>
                        <div className="mt-3">B.Eng.BME - Bachelors of Mechatronics and Biomedical Engineering</div>
                        <p>
                            Releavant Coursework: Data Structures and Algorithms, Embedded Systems Design, Software Development, 
                            Software Architectures, Systems Design, Operating Systems
                        </p>
                    </div>
                    <div className="info-section-extra-grid-2 mt-6 w-full">
                        <div className="info-section-extra-grid-2-item info-section-extra-grid-2-item__1 hidden-anim hidden-come-from-right">
                        </div>
                    </div>
                </div>

                <div className="seperator"></div>

                <div className="info-section flex justify-between gap-20">
                    <div className="info-section-text w-full">
                        <div className="info-section-header ">TECH STACK</div>
                        {/* <TechStack iconList={ts_languages}/> */}
                        <div className="info-section-extra-grid-3 mt-6">
                            <div className="info-section-extra-grid-3-item hidden-anim">
                                <h4>Languages</h4>
                                <TechStack iconList={ts_languages}/>
                            </div>
                            <div className="info-section-extra-grid-3-item hidden-anim">
                                <h4>Technologies / Frameworks</h4>
                                <TechStack iconList={ts_frameworks}/>
                            </div>
                            <div className="info-section-extra-grid-3-item hidden-anim">
                                <h4>Developer Tools</h4>
                                <TechStack iconList={ts_devtools}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;