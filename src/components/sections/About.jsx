import SectionHeading from "../ui/SectionHeading";
import portraitImg from "../../assets/images/luciancheng_new.png";
import computerImg from "../../assets/images/lucian_computer.png";
import mcmasterImg from "../../assets/images/mcmaster1.jpg";
import overwatchImg from "../../assets/images/overwatch.png";

// import overwatchImg from "../../assets/images/overwatch.jpg";
// import foodImg from "../../assets/images/food.jpg";

const focusAreas = ["Core Infrastructure", "ML & Computer Vision", "Full-Stack", "Distributed Systems"];

const interests = [
    {
        title: "Overwatch",
        tagline: "Competitive team FPS",
        blurb:
            "I've been playing Overwatch for years — mostly ranked and organized play. I love the mix of mechanics, team coordination, and adapting to the meta. Use to play a lot of tank in Overwatch 1 but more recently play Support heroes like Wuyang.",
        image: overwatchImg, // overwatchImg — see image note below
        accent: "linear-gradient(135deg, #f99e1a, #ed6517)",
        icon: "fa-gamepad",
    },
    {
        title: "Food",
        tagline: "Restaurants & hidden gems",
        blurb:
            "I keep a food page where I post spots worth trying — from casual takeout to sit-down meals around the GTA and beyond. I love to document my food adventures and share honest reviews on my social media.",
        image: null, // foodImg — see image note below
        link: "",
        accent: "linear-gradient(135deg, var(--color-pink-1), var(--color-pink-2))",
        icon: "fa-utensils",
    },
];

// Image suggestions (cards are square, so centre the subject — edges get cropped):
// Overwatch — rank-up / competitive progress screen cropped around the rank badge, or your setup.
// Food — a single dish, overhead or 45°, with the plate centred. Warm light, sharp focus.

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

const InterestCard = ({ interest }) => {
    const card = (
        <>
            <div className="about-interest-media">
                {interest.image ? (
                    <div
                        className="about-interest-media-img"
                        style={{ backgroundImage: `url(${interest.image})` }}
                    />
                ) : (
                    <div className="about-interest-media-placeholder" style={{ background: interest.accent }}>
                        <i className={`fa-solid ${interest.icon}`} />
                    </div>
                )}
                <div className="about-interest-media-overlay" />
            </div>
            <div className="about-interest-caption">
                <span className="about-interest-name">{interest.title}</span>
                <span className="about-interest-detail">{interest.tagline}</span>
            </div>
            {interest.link && (
                <span className="about-interest-link-hint">
                    View <i className="fa-solid fa-arrow-up-right" />
                </span>
            )}
        </>
    );

    return (
        <div className="about-interest-item">
            {interest.link ? (
                <a className="about-interest-card" href={interest.link} target="_blank" rel="noreferrer">
                    {card}
                </a>
            ) : (
                <div className="about-interest-card">{card}</div>
            )}
            <p className="about-interest-blurb">{interest.blurb}</p>
        </div>
    );
};

const About = () => {
    return (
        <div id="about" className="about pt-32">
            <div className="content">
                <SectionHeading text={"Looking into Lucian's background and passion for engineering and technology."} />

                <div className="about-card fade-in-object">
                    <div className="about-card-grid">
                        <div className="about-card-photos">
                            <div className="about-card-photo about-card-photo--primary">
                                <div
                                    className="about-card-photo-img"
                                    style={{ backgroundImage: `url(${portraitImg})` }}
                                />
                            </div>
                            <div className="about-card-photo about-card-photo--secondary">
                                <div
                                    className="about-card-photo-img"
                                    style={{ backgroundImage: `url(${computerImg})` }}
                                />
                            </div>
                        </div>

                        <div className="about-card-main">
                            <span className="about-label">About</span>
                            <h2 className="about-card-name">Lucian Cheng</h2>
                            <p className="about-card-role">Mechatronics & Biomedical Engineer</p>

                            <p className="about-card-bio">
                                I'm a recent Mechatronics and Biomedical Engineering graduate at McMaster
                                University. Software and hardware have been passions of mine since I was
                                young — I'm always looking for new opportunities to push my skills in
                                technology and build things that matter.
                            </p>
                            <p className="about-card-bio">
                                I enjoy using my multidisciplinary background across software, electrical,
                                mechanical, and biomedical engineering to ship projects end-to-end. Through
                                internships and clubs, I've worked on 2D and 3D ML computer vision, full-stack
                                applications, and autonomous driving systems.
                            </p>
                            <p className="about-card-bio">
                                As a software engineer, I've spent my internships building production systems —
                                most recently at Meta on the Facebook Counting Infrastructure team, where I
                                worked on core infra around SEV uptime and reliability for tier-0 counting
                                services used at massive scale. Before that at Bluewrist, I led teams shipping
                                full-stack ML applications and internal tooling in C++, Python, and .NET.
                            </p>

                            <div className="about-card-tags">
                                {focusAreas.map((area) => (
                                    <span className="about-card-tag" key={area}>
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="about-card-edu">
                            <div
                                className="about-card-edu-img"
                                style={{ backgroundImage: `url(${mcmasterImg})` }}
                            />
                            <div className="about-card-edu-body">
                                <span className="about-label">Education</span>
                                <h3 className="about-card-edu-school">McMaster University</h3>
                                <p className="about-card-edu-degree">
                                    B.Eng. Mechatronics & Biomedical Engineering
                                </p>
                                <p className="about-card-edu-date">September 2021 — June 2026</p>
                            </div>
                        </div>

                        <div className="about-card-interests">
                            <span className="about-label">Also into</span>
                            <p className="about-card-interests-intro">
                                Outside of engineering, I like having hobbies that have nothing to do with code.
                            </p>
                            <div className="about-interest-stack">
                                {interests.map((interest) => (
                                    <InterestCard interest={interest} key={interest.title} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="seperator" />

                <div className="about-label mt-6 mb-2">Tech stack</div>
                <h3 className="text-3xl font-semibold tracking-tight mb-10">The tools I reach for.</h3>

                <div className="about-tech-grid">
                    {techGroups.map((group, i) => (
                        <div
                            className="about-tech-panel hidden-anim"
                            key={group.title}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
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
