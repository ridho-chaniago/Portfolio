import { Paragraf } from "./Paragraf"
import styled from 'styled-components';
import P from "./p";


const Container = ({title, description, children,id}) => {

const {P2col} =P()
    return (
        <div id={id} className={`flex flex-col md:h-screen pt-32 justify-center items-center mt-10 p-5  gap-10`}>
            <div className={`flex flex-col items-center`}  data-aos="fade-up">

                <P2col >{title}</P2col>
                <p className='font-semibold'>{description}</p>
            </div>
            {children}
        </div>
    )
}
export default Container