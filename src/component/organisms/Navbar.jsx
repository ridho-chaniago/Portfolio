import { useContext, useEffect, useState } from "react"
import { BtnNav } from "../atom/Button"
import { Link } from "../atom/Link"
import Themes from "../../ReactContext/Themes";
import { BtnThemes } from "../molecules/BtnThemes";
import { Paragraf } from "../atom/Paragraf";

import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const { shadow, text } = useContext(Themes)
    const [nav, setNav] = useState(shadow)
    useEffect(() => {
        setNav(shadow)
        console.log(nav)
    }, [shadow])
    const [active, setActive] = useState("Home")
    const handleActive = (link) => {
        setActive(link)
        console.log("click")
    }
    return (
        <Router>
            <div className="fixed top-0 w-full bg-white z-50 mb-10">
                <div className={`flex justify-between items-center px-10 py-3 shadow-sm ${nav} `} >
                    <Paragraf>Ridho Chaniago</Paragraf>
                    <div className="md:flex gap-12 hidden ">
                        <HashLink to={"#home"} smooth>
                            <Link className={active === "Home" ? text : "text-black"} onClick={() => handleActive("Home")}>Home</Link>
                        </HashLink>
                        <HashLink to={"#about"} smooth>
                            <Link href={"About"} className={`hover:${text} ${active === "About" ? text : "text-black"}`} onClick={() => handleActive("About")}>About</Link>
                        </HashLink>
                        <HashLink to={"#skills"} smooth>
                        <Link className={active === "MySkill" ? text : "text-black"} onClick={() => handleActive("MySkill")}>MySkill</Link>
                        </HashLink>
                        <Link className={active === "Portfolio" ? text : "text-black"} onClick={() => handleActive("Portfolio")}>Portfolio</Link>
                        <Link className={active === "Contact" ? text : "text-black"} onClick={() => handleActive("Contact")}>Contact</Link>

                        <BtnThemes />
                    </div>
                    <BtnNav />
                </div>
            </div>
        </Router>
    )
}
export default Navbar