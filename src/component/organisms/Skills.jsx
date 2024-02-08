import { Html } from "../../../public/svg/icon"
import { Paragraf } from "../atom/Paragraf"
import P from "../atom/p"
import LogoSkills from "../molecules/LogoSkills"


const Skills = () => {
    const { P2col, P1 } = P()
    return (
        <div id="skills" className="md:h-[100vh] p-10 md:gap-10 flex lg:flex flex-col justify-center items-center">
            <Paragraf>My Skills</Paragraf>
            <div className="flex flex-col-reverse items-center justify-center lg:grid lg:grid-cols-2">
            {/* <div className="items-center justify-center w-full lg:flex md:grid md:grid-cols-2 md:gap-10"> */}
                <div className="p-10 border shadow-sm lg:w-full rounded-3xl hover:shadow-2xl ">
                    <LogoSkills />
                </div>
                <div className="flex flex-col items-center justify-center p-10 lg:w-full">
                    <div className="flex gap-10">
                        <P2col>Tech Stack & Tools</P2col>
                        <img width="40" src="https://img.icons8.com/color/48/maintenance.png" alt="maintenance" />

                    </div>
                    <P1>There are some tech stack and tools that i've learned and experienced</P1>
                </div>
            </div>
        </div>
    )
}
export default Skills