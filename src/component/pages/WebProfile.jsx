import About from "../organisms/About"
import Home from "../organisms/Home"
import Navbar from "../organisms/Navbar"
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Skills from "../organisms/Skills";



const Profile = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills/>

        </>
    )
}
export default Profile