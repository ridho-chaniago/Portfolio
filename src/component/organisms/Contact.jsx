import { useContext, useRef } from "react"
import Container from "../atom/Container"
import Themes from "../../ReactContext/Themes"
import { Send } from "../../../public/svg/icon"

const Contact = () => {
    const { shadow, borderCol, text } = useContext(Themes)
    const nameRef = useRef(null)
    const messageRef = useRef(null)
    const handleSubmit = () => {
        const name = nameRef.current.value;
        const message = messageRef.current.value;
        const number = "+6281276784668";
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${number}&text=Hi%20${name},%20${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        nameRef.current.value = '';
        messageRef.current.value = '';

    }
    return (
        <Container title={"Contact"} id={"Contact"} description={"Feel Free To Contact Me📨 "}>
            {/* <div className="w-full flex flex-col items-center gap-5"> */}
            <form onSubmit={() => handleSubmit()} target="blank" className="w-full flex flex-col items-center gap-5">
                <input required ref={nameRef} className={`w-[80%] h-10 rounded-lg shadow-sm ${shadow} ${borderCol} p-5`} placeholder="Name " />
                {/* <input required className={`w-[80%] h-10 rounded-lg shadow-sm ${shadow} ${borderCol} p-5`} placeholder="Your Email (Opsional)" /> */}
                <textarea required ref={messageRef} className={`w-[80%] h-40 rounded-lg shadow-sm ${shadow} ${borderCol} p-5`} placeholder="Message" />
                <button type="submit" className={`px-5 py-2 b ${text} ${borderCol} font-bold flex items-center gap-2 border rounded-md`} >Submit <Send /></button>
            </form>
            {/* </div> */}
        </Container>
    )
}
export default Contact