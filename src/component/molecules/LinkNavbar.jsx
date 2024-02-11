import { HashLink } from "react-router-hash-link"
import { Link } from "../atom/Link"
import { useContext, useState } from "react"
import Themes from "../../ReactContext/Themes"

const LinkNavbar = () => {
    const { text } = useContext(Themes)
    const [active, setActive] = useState("Home")
    const handleActive = (id) => {
        setActive(id)
        console.log("click")
    }
    return (
        <>
            <HashLink to={"#home"} smooth>
                <Link className={active === "Home" ? text : "text-black"} onClick={() => handleActive("Home")}>Home</Link>
            </HashLink>
            <HashLink to={"#about"} smooth>
                <Link href={"About"} className={`hover:${text} ${active === "About" ? text : "text-black"}`} onClick={() => handleActive("About")}>About</Link>
            </HashLink>
            <HashLink to={"#skills"} smooth>
                <Link className={active === "MySkill" ? text : "text-black"} onClick={() => handleActive("MySkill")}>MySkill</Link>
            </HashLink>
            <HashLink to={"#Education"} smooth>
                <Link className={active === "Education" ? text : "text-black"} onClick={() => handleActive("Education")}>Education</Link>
            </HashLink>
            <HashLink to={"#Portfolio"} smooth>
                <Link className={active === "Portfolio" ? text : "text-black"} onClick={() => handleActive("Portfolio")}>Portfolio</Link>
            </HashLink>
            <HashLink to={"#Contact"} smooth>
                <Link className={active === "Contact" ? text : "text-black"} onClick={() => handleActive("Contact")}>Contact</Link>
            </HashLink>
        </>
    )
}
export default LinkNavbar