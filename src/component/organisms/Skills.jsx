import { Html } from "../../../public/svg/icon"
import Container from "../atom/Container"
import { Paragraf } from "../atom/Paragraf"
import P from "../atom/p"
import LogoSkills from "../molecules/LogoSkills"


const Skills = () => {
    const { P2col, P1 } = P()
    return (
        <Container id={"skills"} title={"My Skills"}>
            <div className="flex flex-col-reverse items-center lg:w-[90%] justify-center lg:grid lg:grid-cols-2">
                <div className=" border shadow-sm lg:w-full rounded-3xl hover:shadow-2xl " data-aos="fade-right">
                    <LogoSkills />
                </div>
                <div className="flex flex-col items-center justify-center pb-10 w-full"  data-aos="fade-left">
                    <div className="flex gap-10">
                        <P2col>Tech Stack & Tools</P2col>
                        <img width="40" src="https://img.icons8.com/color/48/maintenance.png" alt="maintenance" />

                    </div>
                    <P1>There are some tech stack and tools that i've learned and experienced</P1>
                </div>
            </div>
        </Container>
    )
}
export default Skills