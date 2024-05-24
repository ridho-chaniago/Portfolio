import { useContext } from "react"
import Themes from "../../ReactContext/Themes"

export const Paragraf=({className, children,id})=>{
    const {text}=useContext(Themes)
    return <p id={id} className={`font-custom md:text-4xl text-lg  ${className} font-bold ${text}`}>{children}</p>
}