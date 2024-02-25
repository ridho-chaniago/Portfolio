import About from "../organisms/About"
import Home from "../organisms/Home"
import Navbar from "../organisms/Navbar"
import Skills from "../organisms/Skills";
import Education from "../organisms/Education";
import Footer from "../organisms/Footer";
import Experience from "../organisms/Experiences";
import Portfolio from "../organisms/Portfolio";
import { useContext } from "react";
import Themes from "../../ReactContext/Themes";
import Contact from "../organisms/Contact";



const Profile = () => {
    const {isdark}=useContext(Themes)
    return (
        <div className={isdark?"dark":"light"}>
            <Navbar />
            <Home />
            <About />
            <Skills/>
            <Education/>
            <Experience/>
            <Portfolio/>
            <Contact/>
            <Footer/>

        </div>
    )
}
export default Profile