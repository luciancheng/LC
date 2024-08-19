import { useParams } from 'react-router-dom';
import { positions } from '../components/data/positionData';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ExperiencePage = () => {
    const { id } = useParams();
    const data = positions[id];

    useEffect(() => {
        // Override smooth scrolling for this scroll action
        window.scrollTo({
            top: 0,
            behavior: 'auto' // Instantly scrolls to the top
        });
    }, []);

    return ( 
        <div className="mt-32 mb-32">
            <div className="content">
            
                <div className="experience-pos-grid">
                    <div className="experience-pos-grid-item experience-pos-grid-details">
                        <div className="info-section-header">POSITION</div>

                        <div className="exp-pos-grid-info flex justify-center flex-col">
                            <h3 className="text-4xl font-bold mb-2">{data.title}</h3>
                            <p className="text-2xl">{data.company}</p>
                            <p className="mt-6 unimportant-text">{data.date}</p>
                            <p className="unimportant-text">{data.location}</p>
                        </div>
                    </div>
                    <div className="experience-pos-grid-item experience-pos-grid-image" style={{backgroundImage : `url(${data.image})`}}></div>
                    <div className="experience-pos-grid-item experience-pos-grid-description">
                        <div className="info-section-header mb-5">EXPERIENCE</div>
                        <div className="exp-pos-exp-desc">
                            {data.description}
                        </div>
                    </div>
                    <div className="experience-pos-grid-item experience-pos-grid-skills">
                        <div className="info-section-header mb-5">SKILLS AND TECHSTACK</div>
                        <div className="flex flex-wrap gap-2">
                            {data.techstack.map((tech, i) => (
                                <div className="project-tech text-sm" key={i}>
                                    {tech}
                                </div>    
                            ))}    
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <a href="/" className="clickable-item text back-home-text">&lt; Back Home</a>
                </div>
            </div>
        </div>
     );
}
 
export default ExperiencePage;