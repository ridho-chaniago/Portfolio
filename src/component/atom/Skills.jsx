

const Skills =({children, delay})=>{
    return(
        <div className="flex flex-col items-center rounded-full cursor-wait hover:scale-110 hover:shadow-xl " data-aos="flip-left" data-aos-delay={delay}>
            {children}
        </div>
    )
}
export default Skills