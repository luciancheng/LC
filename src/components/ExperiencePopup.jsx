import { positions } from '../components/data/positionData';
import { useEffect } from 'react';
import { MdClose } from "react-icons/md";

const ExperiencePopup = ({id, onClose}) => {
    const data = positions[id];
    useEffect(() => {
        // Disable background scrolling when popup is active
        document.body.style.overflow = 'hidden';
    
        // Re-enable background scrolling when popup is closed
        return () => {
          document.body.style.overflow = 'auto';
        };
    }, []);
    return ( 
        <div>
            <div className="popup-overlay" onClick={onClose}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                    
                    <div className="p-24 experience-popup-container">
                        <button className="close-btn mb-4 text-3xl flex justify-end w-full" onClick={onClose}><MdClose /></button>
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
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ExperiencePopup;