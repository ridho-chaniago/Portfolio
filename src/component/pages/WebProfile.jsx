import About from "../organisms/About"
import Home from "../organisms/Home"
import Navbar from "../organisms/Navbar"
import Skills from "../organisms/Skills";
import Education from "../organisms/Education";
import Footer from "../organisms/Footer";



const Profile = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills/>
            <Education/>
            <Footer/>

        </>
    )
}
export default Profile