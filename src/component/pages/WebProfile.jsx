import About from "../organisms/About"
import Home from "../organisms/Home"
import Navbar from "../organisms/Navbar"
import Skills from "../organisms/Skills";
import Education from "../organisms/Education";
import Footer from "../organisms/Footer";
import Experience from "../organisms/Experiences";
import Portfolio from "../organisms/Portfolio";
import { useState } from "react";



const Profile = () => {
    
  const [isdark, setIsdark]=useState(false)
  const toggleDarkMode = () => {
    setIsdark(!isdark);
  };
    return (
        <div className={`${isdark?"dark":"light"}`}>
            <button className="bg-black z-50 fixed top-0" onClick={()=>toggleDarkMode()}>dark</button>
            <Navbar />
            <Home />
            <About />
            <Skills/>
            <Education/>
            <Experience/>
            <Portfolio/>
            <Footer/>

        </div>
    )
}
export default Profile