import { useContext } from "react"
import Themes from "../../ReactContext/Themes"

const CardPortfolio = ({children,src}) => {
    const {shadow,borderCol}=useContext(Themes)
    return (
        <div className={`flex flex-col items-center justify-around h-64 w-[90%] border rounded-lg bg-slate-300 shadow-lg p-5 my-5 ${shadow} ${borderCol} `} >
            <div className='flex justify-center'>
                <img className='rounded-lg w-64 h-20 object-fill' src={src} alt="" />
            </div>
            {children}
        </div>
    )
}
export default CardPortfolio