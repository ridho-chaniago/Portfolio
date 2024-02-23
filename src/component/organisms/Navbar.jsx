import { useContext, useEffect, useState } from "react"
import { BtnNav } from "../atom/HamburgerMenu"
import Themes from "../../ReactContext/Themes";
import { BtnThemes } from "../molecules/BtnThemes";
import { Paragraf } from "../atom/Paragraf";

import { BrowserRouter as Router } from 'react-router-dom';
import LinkNavbar from "../molecules/LinkNavbar";

const Navbar = () => {
    const { shadow, text,} = useContext(Themes)
    const [nav, setNav] = useState(shadow)
    useEffect(() => {
        setNav(shadow)
    }, [shadow])
    return (
        <Router>
            <div className="fixed top-0 w-full bg-white z-30 mb-10 ">
                <div className={`flex justify-between items-center px-10 py-3 shadow-lg slidebottom `} >
                    <Paragraf>Ridho Chaniago</Paragraf>
                    <div className="md:flex gap-12 hidden ">
                        <LinkNavbar/>
                    </div>
                    <BtnNav />
                </div>
                    <BtnThemes />
            </div>
        </Router>
    )
}
export default Navbar