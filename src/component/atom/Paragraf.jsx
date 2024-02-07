import { useContext } from "react"
import Themes from "../../ReactContext/Themes"

export const Paragraf=({className, children,id})=>{
    const {text}=useContext(Themes)
    return <p id={id} className={`font-custom text-3xl ${className} font-bold ${text}`}>{children}</p>
}