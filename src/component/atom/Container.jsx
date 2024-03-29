import { Paragraf } from "./Paragraf"

const Container = ({title, description, children,id}) => {


    return (
        <div id={id} className={`flex flex-col pt-32 justify-center items-center mt-10 p-10  gap-10`}>
            <div className={`flex flex-col items-center`}  data-aos="fade-up">

                <Paragraf >{title}</Paragraf>
                <p className='font-semibold'>{description}</p>
            </div>
            {children}
        </div>
    )
}
export default Container