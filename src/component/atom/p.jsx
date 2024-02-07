import { useContext } from "react"
import Themes from "../../ReactContext/Themes"
const P =()=>{
    const { text } = useContext(Themes)
    const P3 =({children})=><span className="text-3xl font-bold">{children}</span>
    const P2 =({children})=><span className="text-2xl font-bold">{children}</span>
    const P2col =({children})=><span className={`${text} text-2xl font-bold`}>{children}</span>
    return{
        P3, P2,P2col
    }
}
export default P