import { useContext, useEffect, useState } from "react";
import Themes from "../../ReactContext/Themes";
import { IconThemes } from "../../../public/svg/icon";
import { Link } from "../atom/Link";

export const BtnThemes = () => {
    const { text, changeColor, shadow } = useContext(Themes);
    const [on, setOn] = useState(true)
    const handleOn = () => {
        setOn(!on)
    }
    useEffect(() => {
        setOn(!on)
    }, [text])

    return (
        <div className={`flex flex-col fixed right-5 bg-white shadow  p-4 rounded-full bottom-5 gap-5 ${shadow}`}>

            <Link onClick={() => changeColor("text-green-500", "shadow-green-500", "bg-green-500")}>
                <IconThemes color={"#2dc2ae"} />
            </Link>
            <Link onClick={() => changeColor("text-red-500", "shadow-red-500", "bg-red-500")}>
                <IconThemes color={"#f34640"} />
            </Link>
            <Link onClick={() => changeColor("text-yellow-500", "shadow-yellow-500", "bg-yellow-500")}>
                <IconThemes color={"#f3e840"} />
            </Link>
            <Link onClick={() => changeColor("text-blue-500", "shadow-blue-500", "bg-blue-500")}>
                <IconThemes color={"#4078f3"} />
            </Link>
        </div>
    )
}