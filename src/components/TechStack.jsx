const TechStack = ({iconList}) => {
    return ( 
        <div className="techstack">
            <div className="flex flex-wrap justify-evenly gap-7">
                {iconList.map((img, i) => (
                    <div className="techstack-icon-card" key={i}>
                        <i key={i} className={`ci ci-${img} ci-4x`}></i>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default TechStack;