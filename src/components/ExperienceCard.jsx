const ExperienceCard = ({positionInfo, id, func}) => {

    return (   
        <div>
            <div className="experience-card">
                <div className="exp-rounded-corners clickable-item" onClick={() => func(id)}>
                    <div className="experience-card-image" style={{backgroundImage: `url(${positionInfo.image})`}}>
                    </div>
                    <div className="experience-card-frosted-glass">
                    <p className="learn-more-text">Learn More</p>
                    </div>
                </div>
                <div className="experience-card-text mt-3">
                    <h3 className="text-xl font-semibold">{positionInfo.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <p className="company-name-text">{positionInfo.company}</p>
                        <p className="text-gray-500 text-sm">•</p>
                        <p className="text-gray-500 text-sm">{positionInfo.date}</p>
                    </div>
                    
                    
                </div>
            </div>

            
        </div>
        
     );
}
 
export default ExperienceCard;