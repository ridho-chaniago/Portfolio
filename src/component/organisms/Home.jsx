import { useContext } from "react"
import { Paragraf } from "../atom/Paragraf"
import Themes from "../../ReactContext/Themes"
import { Link } from "../atom/Link"


const Home = () => {
    const { bg } = useContext(Themes)
    return (
        <div className="flex flex-col items-center md:h-screen " id="home">
            <div className="   gap-5 flex-col py-24 px-10 w-[100%] items-center justify-around flex md:flex-row-reverse">
                <div className="relative flex items-end justify-center slideleft ">
                    <div className={`absolute -z-10  w-80 h-80  rounded-full ${bg}`}></div>
                    <img className="rounded-b-full w-60" src="image\profilelinkdin.png" alt="" />
                </div>
                <div className="flex flex-col gap-5 slideright">
                    <div className="flex gap-3">
                        <p className="font-semibold text-slate-500">Hi There </p>
                        <img className="w-6 " src="icon\wave.png" alt="" />
                    </div>
                    <div>
                        <Paragraf className={"text-6xl"} >Ridho Chaniago</Paragraf>
                        <p className="font-bold ">FRONTEND DEVELOPMENT</p>
                    </div>
                    <p className="font-semibold w-60 text-slate-500" >I create stunning website for your business, Intermediate experienced in web design and development.</p>

                    <a download target="blank" href="cv\RidhoChaniago.pdf" className={`${bg} flex gap-4 w-52 p-4 justify-center items-center text-white font-bold rounded-xl`} >
                        <p>Download CV</p>
                        <img className="w-5" src="icon\download.png" />
                    </a>
                </div>
            </div>
            <p className="animate-bounce font-bold">Scroll Down For More</p>
        </div>

    )
}
export default Home