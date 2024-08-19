import SectionHeading from "./SectionHeading";
import ExperienceCard from "./ExperienceCard";

import { positions } from "./data/positionData";

const Experience = () => {
    return ( 
        <div id="experience" className="experience mt-20 pb-20 pt-32">
            <div className="content">
                <SectionHeading text={"Lucian's professional experience in the field of software and mechatronics engineering."}/>        
                {/* <div className="experience-container flex flex-wrap gap-10"> */}
                <div className="experience-grid hidden-anim">
                    {
                        // positions.map((pos, i) => (
                        //     <ExperienceCard positionInfo={pos} key={i}/>
                        // ))
                        Object.entries(positions).map(([key, value]) => (
                            <ExperienceCard positionInfo={value} url_location={key} key={value.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Experience;