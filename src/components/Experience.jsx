import SectionHeading from "./SectionHeading";
import ExperienceCard from "./ExperienceCard";
import ExperiencePopup from "./ExperiencePopup";

import { positions } from "./data/positionData";
import { useState } from "react";

const Experience = () => {
    const [selectedId, setSelectedId] = useState(null); // To track the selected item
    const [showPopup, setShowPopup] = useState(false); // To control popup visibility

    const handleItemClick = (id) => {
        setSelectedId(id); // Set the id
        setShowPopup(true); // Show the popup
      };

    const handleClosePopup = () => {
        setShowPopup(false); // Close the popup
    };

    return ( 
        <div id="experience" className="experience mt-20 pb-20 pt-32 relative">
            <div className="content">
                <SectionHeading text={"Lucian's professional experience in the field of software and mechatronics engineering."}/>        
                {/* <div className="experience-container flex flex-wrap gap-10"> */}
                <div className="experience-grid hidden-anim">
                    {
                        // positions.map((pos, i) => (
                        //     <ExperienceCard positionInfo={pos} key={i}/>
                        // ))
                        Object.entries(positions).map(([key, value]) => (
                            <ExperienceCard positionInfo={value} id={key} key={value.id} func={handleItemClick}/>
                        ))
                    }
                </div>
            </div>
            {showPopup && (
                <ExperiencePopup id={selectedId} onClose={handleClosePopup} />
            )}
        </div>
     );
}
 
export default Experience;