import { useContext, useEffect, useState } from "react"
import { BtnNav } from "../atom/HamburgerMenu"
import Themes from "../../ReactContext/Themes";
import { BtnThemes } from "../molecules/BtnThemes";
import { Paragraf } from "../atom/Paragraf";
import { BrowserRouter as Router } from 'react-router-dom';
import LinkNavbar from "../molecules/LinkNavbar";

const Navbar = () => {
    const { handleDark, isdark } = useContext(Themes)
    console.log(isdark)
    return (
        <Router>
            <div className={`fixed top-0 w-full bg-white z-30 mb-10  ${isdark ? "dark" : "light"}`}>
                <div className={`flex justify-around items-center px-10 py-3 shadow-lg  slidebottom `} >
                    <Paragraf>Ridho Chaniago</Paragraf>
                    <div className={`md:flex gap-12 hidden`}>
                        <LinkNavbar />
                    </div>
                    <button className="w-12 h-12 flex justify-center items-center shadow-md  rounded-full object-cover" onClick={() => handleDark()}><img className="w-5" src={isdark ? "/icon/brightness.png" : "/icon/moon-stars.png"} /></button>
                    <BtnNav />
                </div>
                <BtnThemes />
            </div>
        </Router>
    )
}
export default Navbar