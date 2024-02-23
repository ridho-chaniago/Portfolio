import { useState } from "react";
import LinkNavbar from "../molecules/LinkNavbar";

export const BtnNav = () => {
    const [on, setOn] = useState()
    const handleOn = () => setOn(!on)
    return (
        <div >
            <button onClick={() => handleOn()} className="flex items-center px-3 py-2 border rounded  border-gray-400  z-50 md:hidden">
                <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h20v20H0z" fill="none" />
                    <path d="M4 6h12v2H4zm0 5h12v2H4zm0 5h12v2H4z" />
                </svg>
            </button>
            <div onClick={()=>handleOn()} style={{ backgroundColor: 'rgba(249, 250, 251, 0.9)' }} className={`w-full gap-10 absolute justify-center items-center h-screen left-0 bg-gray-100 py-2 px-4 rounded-md ${on ? 'flex flex-col' : 'hidden'}`}>
                {/* <ul>
                    <li className="py-1">Menu Item 1</li>
                    <li className="py-1">Menu Item 2</li>
                    <li className="py-1">Menu Item 3</li>
                </ul> */}
                <LinkNavbar/>
            </div>
        </div>

    )
}
