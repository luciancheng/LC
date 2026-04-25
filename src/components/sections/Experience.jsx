import SectionHeading from "../ui/SectionHeading";
import { positions } from "../../data/positionData";

const Experience = () => {
    const entries = Object.entries(positions);

    return (
        <div id="experience" className="experience pt-32 pb-20">
            <div className="content">
                <SectionHeading text={"Lucian's professional experience in the field of software and mechatronics engineering."} />
                <div className="exp-grid">
                    {entries.map(([key, pos], i) => (
                        <article className="exp-tile" key={key}>
                            <div className="exp-tile-media">
                                <div
                                    className="exp-tile-image"
                                    style={{ backgroundImage: `url(${pos.image})` }}
                                />
                                <div className="exp-tile-overlay">
                                    <p className="exp-tile-desc">{pos.description}</p>
                                    <div className="exp-tile-chips">
                                        {pos.techstack.slice(0, 6).map((tech, j) => (
                                            <span className="exp-tile-chip" key={j}>{tech}</span>
                                        ))}
                                        {pos.techstack.length > 6 && (
                                            <span className="exp-tile-chip">+{pos.techstack.length - 6}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="exp-tile-caption">
                                <div className="exp-tile-caption-top">
                                    <h3 className="exp-tile-role">{pos.title}</h3>
                                    <span className="exp-tile-date">{pos.date}</span>
                                </div>
                                <div className="exp-tile-caption-bottom">
                                    <span className="exp-tile-company">{pos.company}</span>
                                    <span className="exp-tile-location">{pos.location}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
