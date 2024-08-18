const ProjectCard = ({projectInfo}) => {
    return ( 
        <a className="project-card p-10 flex gap-10 clickable-item scroll-anim-fade-in-standard" href={projectInfo.link} target="_blank" rel="noreferrer">
            <div className="project-card-info-section flex flex-col justify-between">
                <div className="project-card-info-divider">
                    <h3 className="project-title text-4xl font-bold">
                        {projectInfo.name}
                    </h3>
                    <div className="project-description mt-5">
                        {projectInfo.description}
                    </div>
                    <div className="project-techstack flex flex-wrap gap-2 mt-10">
                        {projectInfo.techstack.map((tech, i) => (
                            <div className="project-tech text-sm" key={i}>
                                {tech}
                            </div>    
                        ))}                      
                    </div>
                </div>
                <div className="view-project-text text-lg mt-10">
                    View Project
                </div>
            </div>
            <div className="project-card-image-container w-full h-full">
                <div className="project-card-image"  style={{backgroundImage: `url(${projectInfo.image})`}}>
                </div>
            </div>
        </a>
     );
}
 
export default ProjectCard;