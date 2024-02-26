import { useContext } from "react"
import Themes from "../../ReactContext/Themes"
import ButtonUmum from "./ButtonUmum"

const CardPortfolio = ({ children="Your Project in Here", src,sourceCode }) => {
    const { shadow, borderCol } = useContext(Themes)
    function code(link){
        window.open(link,"_blank")
    }
    const {text}=useContext(Themes)
    return (
        <div className={`flex flex-col items-center justify-around p-2 w-full md:w-[30%] border rounded-lg  shadow-lg my-5 ${shadow} ${borderCol} `} >
            <div className='flex justify-center'>
                <img className='rounded-lg  w-full object-cover' src={src} alt="Your Project not found" />
            </div>
            <p className={`font-bold text-xl ${text}`}>{children}</p>
            <div className="w-full flex p-2 gap-2">
                <ButtonUmum onClick={()=>code(sourceCode)}>Source Code</ButtonUmum>
                <ButtonUmum>Visit</ButtonUmum>
            </div>
        </div>
    )
}
export default CardPortfolio