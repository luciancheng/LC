const TechStack = ({iconList}) => {
    return ( 
        <div className="techstack mt-2">
            <div className="flex flex-col gap-3">
                {iconList.map((item, i) => (
                    <div className="techstack-icon-card flex items-center gap-3" key={i}>
                        <i key={i} className={`devicon-${item.img} text-xl`}></i>
                        <span className="text-sm">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default TechStack;