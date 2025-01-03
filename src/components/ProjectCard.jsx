const ProjectCard = ({projectInfo}) => {
    return ( 
        <div className="project-card p-6 flex flex-col gap-5 clickable-item scroll-anim-fade-in-standard">
            <div className="project-card-image-container w-full h-full">
                <div className="project-card-image"  style={{backgroundImage: `url(${projectInfo.image})`}}>
                </div>
            </div>
            <div className="project-card-info-section flex flex-col flex-grow justify-between">
                <div className="project-card-info-divider">
                    <h3 className="project-title text-2xl font-bold">
                        {projectInfo.name}
                    </h3>
                    <div className="project-description mt-3">
                        {projectInfo.description}
                    </div>
                    <div className="project-techstack flex flex-wrap gap-2 mt-5">
                        {projectInfo.techstack.map((tech, i) => (
                            <div className="project-tech text-sm" key={i}>
                                {tech}
                            </div>    
                        ))}                      
                    </div>
                </div>
                <div className="flex gap-3 flex-wrap mt-6">
                    {projectInfo.github.length > 0 &&
                        <a className="project-card-button flex items-center gap-2 w-max" href={projectInfo.github} target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                            Github
                        </a>
                    }
                    
                    {projectInfo.link.length > 0 && 
                        <a className="project-card-button flex items-center gap-2 w-max" href={projectInfo.link} target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            View
                        </a>
                    }
                </div>
                {/* <div className="view-project-text text-base mt-10">
                    View Project
                </div> */}
            </div>
            
        </div>
     );
}
 
export default ProjectCard;