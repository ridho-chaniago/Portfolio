import { useContext, useEffect, useState } from "react"
import { BtnNav } from "../atom/Button"
import { Link } from "../atom/Link"
import Themes from "../../ReactContext/Themes";
import { BtnThemes } from "../molecules/BtnThemes";
import { Paragraf } from "../atom/Paragraf";

import { BrowserRouter as Router } from 'react-router-dom';
import LinkNavbar from "../molecules/LinkNavbar";

const Navbar = () => {
    const { shadow, text } = useContext(Themes)
    const [nav, setNav] = useState(shadow)
    useEffect(() => {
        setNav(shadow)
        console.log(nav)
    }, [shadow])
    return (
        <Router>
            <div className="fixed top-0 w-full bg-white z-50 mb-10">
                <div className={`flex justify-between items-center px-10 py-5 shadow-lg ${nav} `} >
                    <Paragraf>Ridho Chaniago</Paragraf>
                    <div className="md:flex gap-12 hidden ">
                        <LinkNavbar/>
                    </div>
                    <BtnThemes />
                    <BtnNav />
                </div>
            </div>
        </Router>
    )
}
export default Navbar