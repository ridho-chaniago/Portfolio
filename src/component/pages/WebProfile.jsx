import About from "../organisms/About"
import Home from "../organisms/Home"
import Navbar from "../organisms/Navbar"
import Skills from "../organisms/Skills";
import Education from "../organisms/Education";
import Footer from "../organisms/Footer";
import Experience from "../organisms/Experiences";



const Profile = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills/>
            <Education/>
            <Experience/>
            <Footer/>

        </>
    )
}
export default Profile