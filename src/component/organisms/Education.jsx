import { useContext } from "react"
import Themes from "../../ReactContext/Themes"
import { Paragraf } from "../atom/Paragraf"
import P from "../atom/p"
import Course from "../molecules/cardCourse"

const Education = () => {
    const { P2col, P1 } = P()
    const { bg } = useContext(Themes)
    return (
        <div id="Education" className="flex justify-center flex-col items-center h-screen gap-10">
            <Paragraf>Education</Paragraf>
            <div className="flex w-[90%] flex-col md:flex-row items-center mx-auto  justify-between">
                <div className="flex flex-col gap-5 md:w-[30%]">
                    <P2col>Education 🎓 & Course🏆</P2col>
                    <P1>There are some formal education & awards that i've reached below</P1>
                </div>
                <div className=" flex flex-col md:flex-row gap-5 md:gap-0 px-5 md:px-0 md:justify-around md:w-[65%] border shadow-sm py-5 rounded-3xl hover:shadow-2xl ">
                    <div className="flex flex-col items-center gap-5">
                        <div className={`text ${bg}`}>
                            <p className="">EDUCATION</p>
                        </div>
                        <div className=" flex gap-5 items-center rounded-lg border shadow p-5 hover:shadow-lg">
                            <img className="object-cover w-[32px] h-[32px]" src="https://smkmubatam.sch.id/media_library/images/046f8dde8d280fce44adb93a33a5998d.png" alt="" />
                            <div>
                                <p className="font-bold">SMK Muhammadiyah Batam</p>
                                <p>2012-2015</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <div className={`text ${bg}`}>
                            {/* <div className={`rounded ${bg} p-2 inline-block text-white font-bold`}> */}
                            <p >COURSE</p>
                        </div>
                        <div className="flex flex-col gap-5 scrolldiv">
                            <Course from={`Harisenin.com`} study={`FullStack Web Development`} time={"Sept 2023 - Feb 2024"} src={"https://d1fdloi71mui9q.cloudfront.net/JZfkXxgRRCGfv2ZrlTQ5_7FEvj3b2s79r3gAB"} />
                            <Course from={`Salam Ganesha Academy`} study={`Website Design Fundamental`} time={"May 2023 - Jun 2023"} src={"https://media-exp1.licdn.com/dms/image/C510BAQHisnzb70c-_g/company-logo_200_200/0/1581305358521?e=2159024400&v=beta&t=s9AkqsRd5hLcj9OQBh-3qnKzxqnM80lcfIApUKFMeDU"} link={"https://drive.google.com/file/d/16WsxfRrgWrRwoTLN09M93okrA3_MKdb2/view?usp=sharing"} />
                            <Course from={`EdSpert`} study={`Front End with React`} time={"May 2023"} src={"https://cdn2.lnk.bi/profilepics/-1499450_20221222482.jpg"} link={"https://drive.google.com/file/d/1omNqqNfPUK6xopl6yn56sXMNY19hTD4P/view?usp=sharing"} />

                            <Course from={`RevoU`} study={`Intro to Software Enginering`} time={"Apr 2023"} src={"https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/19b731a8e55d1291039e4f3ebba818b8.png"} link={"https://drive.google.com/file/d/1hqlzz2ejAR07GyeH9ACnnrNcqex2Ebk5/view?usp=sharing"} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Education