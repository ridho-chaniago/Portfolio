import { useContext } from "react"
import Themes from "../../ReactContext/Themes"

const ButtonUmum = ({children, onClick}) => {
    const {bg}=useContext(Themes)
    return (
        <button className={`${bg} rounded-md text-white text-center w-full px-2 flex items-center justify-center`} onClick={onClick}>
            {children}
        </button>
    )
}
export default ButtonUmum