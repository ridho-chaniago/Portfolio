import { Paragraf } from "../atom/Paragraf"
import P from "../atom/p"

const About = () => {
    const { P3, P2, P2col } = P()
    return (
        <div className="flex flex-col h-screen items-center justify-center pt-10 " id={"about"} >

            <Paragraf >About Me</Paragraf>
            <div className="flex p-10 w-[90%] justify-around items-center mx-auto">
                <div className="w-80">
                    <img src="public\image\Untitled-1.jpg" alt="" />

                </div>
                <div className="w-[50%] ">
                    <div className="flex flex-wrap gap-3">
                        <P3>Hello </P3> <img className="w-[24px] h-[24px] " src="public\icon\wave.png" alt="" /><P3>I`am</P3><Paragraf>Ridho Chaniago</Paragraf>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-10">
                        <P2>A</P2> <P2col>FrontEnd Developer</P2col> <img className="w-[24px] h-[24px]" src="public\icon\hacker.png" alt="" /> <P2>based in</P2> <P2col>indonesia</P2col> <img src="public/icon/earth.png" alt="" className="w-[24px] h-[24px]"/>
                    </div>
                    <p className="font-semibold">Currently attempting to switch careers from the industrial sector to becoming a web developer, with a strong interest in learning and trying new things, currently possess skills in several programming languages. Committed to continually improving the skills and seeking opportunities to contribute to web development projects that come the way. And also has experience in managing personal projects and feel prepared to take on the challenges of a web developer role.</p>
                </div>
            </div>
        </div>

    )
}
export default About