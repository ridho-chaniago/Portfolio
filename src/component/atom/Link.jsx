import { useContext } from "react";
import Themes from "../../ReactContext/Themes";

export const Link = ({ children, href, onClick, className }) => {
    const { text, changeColor } = useContext(Themes);
    return (
        <button onClick={onClick} className={`${className}  hover:scale-105 font-bold`}>
            <a href={href} className="flex " >
                {children}
            </a>
        </button>
    )
}