const ProjectCard = ({ projectInfo }) => {
    const hasLinks = projectInfo.github?.length > 0 || projectInfo.link?.length > 0;
    const isVideo = !!projectInfo.video;

    return (
        <article className="project-card">
            <div className="project-card-media">
                {isVideo ? (
                    <video
                        className="project-card-media-video"
                        src={projectInfo.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                ) : (
                    <div
                        className="project-card-media-image"
                        style={{ backgroundImage: `url(${projectInfo.image})` }}
                    />
                )}
                <div className="project-card-overlay">
                    <p className="project-card-overlay-description">{projectInfo.description}</p>
                    <div className="project-card-overlay-tech">
                        {projectInfo.techstack.slice(0, 6).map((tech, i) => (
                            <span className="project-card-overlay-chip" key={i}>{tech}</span>
                        ))}
                    </div>
                    {hasLinks && (
                        <div className="project-card-overlay-actions">
                            {projectInfo.link?.length > 0 && (
                                <a className="project-card-overlay-button project-card-overlay-button--primary" href={projectInfo.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>View
                                </a>
                            )}
                            {projectInfo.github?.length > 0 && (
                                <a className="project-card-overlay-button" href={projectInfo.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                    <i className="fa-brands fa-github"></i>Code
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className="project-card-caption">
                <div className="project-card-caption-row">
                    <h3 className="project-card-name">{projectInfo.name}</h3>
                    <span className="project-card-year">{projectInfo.year}</span>
                </div>
                <p className="project-card-category">{projectInfo.category}</p>
            </div>
        </article>
    );
};

export default ProjectCard;
