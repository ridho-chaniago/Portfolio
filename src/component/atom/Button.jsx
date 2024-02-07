import { useContext, useState } from "react";
import Themes from "../../ReactContext/Themes";
import { IconThemes } from "../../../public/svg/icon";

export const BtnNav = () => {
    const { text, changeColor } = useContext(Themes);
    return (
        <button onClick={() => changeColor(`text-blue-500`)} className="flex items-center px-3 py-2 border rounded  border-gray-400 hover:text-white hover:border-white md:hidden">
            <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h20v20H0z" fill="none" />
                <path d="M4 6h12v2H4zm0 5h12v2H4zm0 5h12v2H4z" />
            </svg>
        </button>
    )
}
