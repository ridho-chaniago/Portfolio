import About from "../organisms/About"
import Home from "../organisms/Home"
import Navbar from "../organisms/Navbar"
import Skills from "../organisms/Skills";
import Education from "../organisms/Education";
import Footer from "../organisms/Footer";
import Experience from "../organisms/Experiences";
import Portfolio from "../organisms/Portfolio";



const Profile = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills/>
            <Education/>
            <Experience/>
            <Portfolio/>
            <Footer/>

        </>
    )
}
export default Profile