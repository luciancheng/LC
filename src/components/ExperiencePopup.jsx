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
                    
                    <div className="p-12 experience-popup-container">
                        <button className="close-btn mb-4 text-3xl flex justify-end w-full" onClick={onClose}><MdClose /></button>
                        
                        <div>
                            <div className="info-section-header font-semibold">POSITION</div>
                            
                            <div className="flex justify-center flex-col mt-4">
                                <h3 className="text-3xl font-semibold mb-3 experience-position-title">{data.title}</h3>
                                <p className="company-name-text text-lg">{data.company}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <p className="text-gray-500 text-sm">{data.date}</p>
                                    <p className="text-gray-500 text-sm">•</p>
                                    <p className="text-gray-500 text-sm">{data.location}</p>
                                </div>
                                
                            </div>
                        </div>

                        <div className="experience-information-container mt-8 p-6">
                            <div className="info-section-header font-semibold">EXPERIENCE</div>
                            <div className="exp-pos-exp-desc mt-4">
                                {data.description}
                            </div>
                        </div>

                        <div className='mt-8'>
                            <div className="info-section-header font-semibold">SKILLS AND TECHSTACK</div>
                            <div className="flex flex-wrap gap-3 mt-4">
                                {data.techstack.map((tech, i) => (
                                    <div className="project-tech text-sm" key={i}>
                                        {tech}
                                    </div>    
                                ))}    
                            </div>
                        </div>

                        <div className="mt-8 experience-company-image" style={{backgroundImage : `url(${data.image})`}}></div>


                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ExperiencePopup;