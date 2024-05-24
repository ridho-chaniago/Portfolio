import { Css, Express, Html, Js, Node, React, Tailwind, Vite } from "../../../public/svg/icon"
import Skills from "../atom/Skills"

const LogoSkills = () => {
    return (
        <div className="grid grid-cols-2 p-10 gap-16 md:grid-cols-3 lg:grid-cols-4">
            {/* <div className="flex flex-wrap gap-16"> */}
            <Skills >
                <Html />
                <p className="font-semibold">HTML</p>
            </Skills>
            <Skills >
            <Css />
            <p className="font-semibold">CSS</p>
            </Skills>
            <Skills>
                <Js />
                <p className="font-semibold">JAVASCRIPT</p>
            </Skills>
            <Skills >
                <Tailwind />
                <p className="font-semibold">TAILWIND</p>
            </Skills>
            <Skills >
                <React />
                <p className="font-semibold">REACT JS</p>
            </Skills>
            <Skills >
                <Vite />
                <p className="font-semibold">VITE</p>
            </Skills>
            <Skills >
                <Node />
                <p className="font-semibold">NODE JS</p>
            </Skills>
            <Skills >
                <Express />
                <p className="font-semibold">EXPRESS JS</p>
            </Skills>

        </div>
    )
}
export default LogoSkills