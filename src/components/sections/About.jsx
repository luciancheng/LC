import SectionHeading from "../ui/SectionHeading";
import portraitImg from "../../assets/images/lucian_2025_2.jpg";
import computerImg from "../../assets/images/lucian_computer.png";
import mcmasterImg from "../../assets/images/mcmaster1.jpg";

const techGroups = [
    {
        title: "Languages",
        items: [
            { img: "python-plain", name: "Python" },
            { img: "cplusplus-plain", name: "C++" },
            { img: "c-plain", name: "C" },
            { img: "swift-plain", name: "Swift" },
            { img: "java-plain", name: "Java" },
            { img: "javascript-plain", name: "JavaScript" },
            { img: "typescript-plain", name: "TypeScript" },
            { img: "visualbasic-plain", name: "Visual Basic" },
        ],
    },
    {
        title: "Frameworks & Libraries",
        items: [
            { img: "pytorch-plain", name: "PyTorch" },
            { img: "opencv-plain", name: "OpenCV" },
            { img: "react-plain", name: "React" },
            { img: "flask-plain", name: "Flask" },
            { img: "nodejs-plain", name: "NodeJS" },
            { img: "express-original", name: "Express" },
            { img: "spring-plain", name: "Spring" },
            { img: "dotnetcore-plain", name: ".NET" },
            { img: "numpy-plain", name: "NumPy" },
            { img: "pandas-plain", name: "Pandas" },
        ],
    },
    {
        title: "Technologies",
        items: [
            { img: "mongodb-plain", name: "MongoDB" },
            { img: "postgresql-plain", name: "PostgreSQL" },
            { img: "mysql-plain", name: "MySQL" },
            { img: "amazonwebservices-plain-wordmark", name: "AWS" },
            { img: "googlecloud-plain", name: "GCP" },
            { img: "docker-plain", name: "Docker" },
            { img: "nginx-plain", name: "NGINX" },
            { img: "linux-plain", name: "Linux" },
            { img: "redis-plain", name: "Redis" },
        ],
    },
    {
        title: "Developer Tools",
        items: [
            { img: "git-plain", name: "Git" },
            { img: "github-plain", name: "Github" },
            { img: "gitlab-plain", name: "Gitlab" },
            { img: "jira-plain", name: "Jira" },
            { img: "vscode-plain", name: "VS Code" },
            { img: "visualstudio-plain", name: "Visual Studio" },
            { img: "jetbrains-plain", name: "JetBrains" },
            { img: "figma-plain", name: "Figma" },
        ],
    },
];

const About = () => {
    return (
        <div id="about" className="about pt-32">
            <div className="content">
                <SectionHeading text={"Looking into Lucian's background and passion for engineering and technology."} />

                {/* Bento grid */}
                <div className="about-bento">
                    {/* Portraits */}
                    <div className="about-bento-portraits fade-in-object">
                        <div className="about-bento-portrait-wrap">
                            <div className="about-bento-portrait-img" style={{ backgroundImage: `url(${portraitImg})` }} />
                        </div>
                        <div className="about-bento-portrait-wrap">
                            <div className="about-bento-portrait-img" style={{ backgroundImage: `url(${computerImg})` }} />
                        </div>
                    </div>

                    {/* Story */}
                    <div className="about-bento-story fade-in-object">
                        <span className="about-label">INFO</span>
                        <p>I'm currently a fifth-year Mechatronics and Biomedical Engineering student at McMaster University. For a long time, software and hardware have been a passion of mine, having tinkered in these fields at a young age. I am always looking for new opportunities to showcase my skills and expertise in technology.</p>
                        <p>I enjoy using my multidisciplinary skills in software, electrical, mechanical, and biomedical engineering to create projects from end-to-end development. During my experiences at internships and clubs, I developed software pertaining to 2D and 3D ML computer vision algorithms, full-stack applications, and autonomous driving systems.</p>
                    </div>

                    {/* Stats row */}
                    <div className="about-bento-stat fade-in-object">
                        <span className="about-stat-number">5</span>
                        <span className="about-stat-label">Years studying engineering</span>
                    </div>
                    <div className="about-bento-stat fade-in-object">
                        <span className="about-stat-number">6+</span>
                        <span className="about-stat-label">Professional experiences</span>
                    </div>
                    <div className="about-bento-stat fade-in-object">
                        <span className="about-stat-number">10+</span>
                        <span className="about-stat-label">Shipped projects</span>
                    </div>

                    {/* Education */}
                    <div className="about-bento-edu fade-in-object">
                        <span className="about-label">EDUCATION</span>
                        <h3 className="text-3xl font-semibold tracking-tight mt-3">McMaster University</h3>
                        <p className="text-lg mt-1" style={{ color: 'var(--color-black-3)' }}>Department of Engineering</p>
                        <p className="text-sm mt-2" style={{ color: 'var(--color-black-4)' }}>September 2021 — Expected: April 2026</p>
                        <p className="mt-3">B.Eng.BME — Bachelor of Mechatronics & Biomedical Engineering. Relevant coursework in Data Structures & Algorithms, Embedded Systems Design, Software Architectures, Operating Systems, and Systems Design.</p>
                    </div>

                    {/* Education image */}
                    <div className="about-bento-edu-img fade-in-object">
                        <div className="about-bento-edu-img-inner" style={{ backgroundImage: `url(${mcmasterImg})` }} />
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="seperator"></div>

                <div className="about-label mt-6 mb-2">TECH STACK</div>
                <h3 className="text-3xl font-semibold tracking-tight mb-10">The tools I reach for.</h3>

                <div className="about-tech-grid">
                    {techGroups.map((group, i) => (
                        <div className="about-tech-panel hidden-anim" key={group.title} style={{ transitionDelay: `${i * 100}ms` }}>
                            <h4 className="about-tech-panel-title">{group.title}</h4>
                            <div className="about-tech-icons">
                                {group.items.map((item) => (
                                    <div className="about-tech-icon-item" key={item.name}>
                                        <div className="about-tech-icon-box">
                                            <i className={`devicon-${item.img} text-xl`}></i>
                                        </div>
                                        <span className="about-tech-icon-name">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
