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
                <div className="experience-card-text mt-2">
                    <h3 className="text-lg font-bold">{positionInfo.title}</h3>
                    <h4>{positionInfo.company}</h4>
                    <p className="unimportant-text text-sm">{positionInfo.date}</p>
                </div>
            </div>

            
        </div>
        
     );
}
 
export default ExperienceCard;