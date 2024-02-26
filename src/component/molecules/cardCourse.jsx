import { useContext } from "react"
import Themes from "../../ReactContext/Themes"
import ButtonUmum from "../atom/ButtonUmum";

const Course = ({ from, study, time, src, link }) => {
    const {bg}=useContext(Themes)
    function certificate(link){
        console.log("klik");
        window.open(link, '_blank')
        
    }
    return (
        <div className=" flex gap-5 items-center rounded-lg border shadow p-5 hover:shadow-lg">
            <img className="w-[32px] rounded-full" src={src} alt="" />
            <div className="w-full">
                <p className="font-bold">{from}</p>
                <p className="font-semibold">{study}</p>
                <p>{time}</p>
                <ButtonUmum onClick={()=>certificate(link)}>Certificate</ButtonUmum>
                {/* <button  className={`${bg} rounded-md text-white text-center w-full px-2 flex items-center justify-center`} onClick={()=>certificate(link)}>
                    Certificate
                </button> */}
            </div>
        </div>
    )
}
export default Course