import { useContext, useEffect, useState } from "react"
import { BtnNav } from "../atom/HamburgerMenu"
import Themes from "../../ReactContext/Themes";
import { BtnThemes } from "../molecules/BtnThemes";
import { Paragraf } from "../atom/Paragraf";
import { BrowserRouter as Router } from 'react-router-dom';
import LinkNavbar from "../molecules/LinkNavbar";
import { IconThemes } from "../../../public/svg/icon";

const Navbar = () => {
    const { handleDark, isdark } = useContext(Themes)
    // console.log(isdark)
    const [on, setOn] = useState(false)
    const handleOn = () => {
        console.log(on)
        setOn(!on)
    }

    return (
        <Router>
            <div className={`fixed top-0 w-screen bg-white z-30 mb-10  ${isdark ? "dark" : "light"}`}>
                <div className={`flex justify-between items-center px-10 py-3 shadow-lg  slidebottom `} >
                    <Paragraf>Ridho Chaniago</Paragraf>
                    <div className="flex items-center gap-5">

                        <div className={`md:flex gap-12 hidden`}>
                            <LinkNavbar />
                        </div>
                        <button className="w-12 h-12 flex justify-center items-center shadow-md  rounded-full object-cover" onClick={() => handleDark()}><img className="w-5" src={isdark ? "/icon/brightness.png" : "/icon/moon-stars.png"} /></button>
                        <button onClick={() => handleOn()}><IconThemes/> {on && <BtnThemes />}</button>
                        
                        <BtnNav />
                    </div>
                </div>
            </div>
        </Router>
    )
}
export default Navbar