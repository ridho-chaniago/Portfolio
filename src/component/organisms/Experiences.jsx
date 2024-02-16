
import { Paragraf } from '../atom/Paragraf';
import Work from '../molecules/Works';



const Experience = () => {
    const { Casco, Kemet, SatNusa } = Work()


    return (
        <div id='Experience' className={`flex flex-col h-screen justify-center items-center p-10`}>
            <div className={`flex flex-col items-center`}>

                <Paragraf>Work Experiences⌛</Paragraf>
                <p className='font-semibold'>Because I switched careers, below is my work history before entering the field of web development.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                <Casco />
                <Kemet />
                <SatNusa />
            </div>


        </div>
    )
}
export default Experience