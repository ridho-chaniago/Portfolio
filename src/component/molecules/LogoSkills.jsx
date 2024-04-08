import { Css, Express, Html, Js, Node, React, Tailwind, Vite } from "../../../public/svg/icon"
import Skills from "../atom/Skills"

const LogoSkills = () => {
    return (
        <div className="grid grid-cols-2 gap-16 md:grid-cols-3 lg:grid-cols-4">
            {/* <div className="flex flex-wrap gap-16"> */}
            <Skills delay="700">
                <Html />
                <p className="font-semibold">HTML</p>
            </Skills>
            <Skills delay="800">
            <Css />
            <p className="font-semibold">CSS</p>
            </Skills>
            <Skills delay="900">
                <Js />
                <p className="font-semibold">JAVASCRIPT</p>
            </Skills>
            <Skills delay="1000">
                <Tailwind />
                <p className="font-semibold">TAILWIND</p>
            </Skills>
            <Skills delay="1100">
                <React />
                <p className="font-semibold">REACT JS</p>
            </Skills>
            <Skills delay="1200">
                <Vite />
                <p className="font-semibold">VITE</p>
            </Skills>
            <Skills delay="1300">
                <Node />
                <p className="font-semibold">NODE JS</p>
            </Skills>
            <Skills delay="1400">
                <Express />
                <p className="font-semibold">EXPRESS JS</p>
            </Skills>

        </div>
    )
}
export default LogoSkills