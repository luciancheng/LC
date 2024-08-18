const ExperienceCard = ({positionInfo}) => {
    
    return (   
        <div className="experience-card">
            <div className="experience-card-image" style={{backgroundImage: `url(${positionInfo.image})`}}>
                <div className="experience-card-image-hover h-full w-full p-5 flex flex-col justify-between">
                    <div className="experience-card-position-info text-base font-normal">
                        {positionInfo.description}
                    </div>
                    <div className="experience-card-position-techstack flex flex-wrap gap-2">
                        {
                            positionInfo.techstack.map((tech, i) => (
                                <div className="experience-card-techstack-tech text-sm" key={i}>
                                    {tech}
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* <div className="experience-card-frosted-glass">
                    <h3 className="text-lg font-bold">{positionInfo.title}</h3>
                    <div className="flex justify-between items-center">
                        <h4>{positionInfo.company}</h4>
                        <p className="unimportant-text text-sm">{positionInfo.date}</p>
                    </div>
                </div> */}
            </div>
            <div className="experience-card-text mt-2">
                <h3 className="text-lg font-bold">{positionInfo.title}</h3>
                <h4>{positionInfo.company}</h4>
                <p className="unimportant-text text-sm">{positionInfo.date}</p>
            </div>
        </div>
     );
}
 
export default ExperienceCard;