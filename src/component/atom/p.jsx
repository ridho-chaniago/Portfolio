import { useContext } from "react"
import Themes from "../../ReactContext/Themes"
const P =()=>{
    const { text } = useContext(Themes)
    const P3 =({children})=><span className="text-4xl font-bold">{children}</span>
    const P2 =({children})=><span className="text-3xl font-bold">{children}</span>
    const P1 =({children})=><span className="md:text-2xl md:font-bold">{children}</span>
    const P2col =({children})=><span className={`${text} text-3xl font-bold `}>{children}</span>
    return{
        P3, P2,P2col,P1
    }
}
export default P
