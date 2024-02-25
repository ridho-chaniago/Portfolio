import { useContext } from "react"
import Container from "../atom/Container"
import Themes from "../../ReactContext/Themes"
import { Send } from "../../../public/svg/icon"

const Contact = () => {
    const { shadow, borderCol, text } = useContext(Themes)
    return (
        <Container title={"Contact"} id={"Contact"} description={"Feel Free To Contact Me📨 "}>
            <div className="w-full flex flex-col items-center gap-5">
                <input className={`w-[80%] h-10 rounded-lg shadow-sm ${shadow} ${borderCol} p-5`} placeholder="Name (Opsional)" />
                <input className={`w-[80%] h-10 rounded-lg shadow-sm ${shadow} ${borderCol} p-5`} placeholder="Your Email (Opsional)" />
                <textarea className={`w-[80%] h-40 rounded-lg shadow-sm ${shadow} ${borderCol} p-5`} placeholder="Message" />
                <button className={`px-5 py-2 b ${text} ${borderCol} font-bold flex items-center gap-2 border rounded-md`} >Submit <Send /></button>
            </div>
        </Container>
    )
}
export default Contact