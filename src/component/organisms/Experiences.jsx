
import Container from '../atom/Container';
import { Paragraf } from '../atom/Paragraf';
import Work from '../molecules/Works';



const Experience = () => {
    const { Casco, Kemet, SatNusa } = Work()


    return (
        <Container
        id={"Experience"}
            title={"Work Experiences⌛"}
            description={"Because I switched careers, below is my work history before entering the field of web development."}
        >
            <div className='flex  flex-col md:flex-row justify-center items-center gap-5'>
                <Casco />
                <Kemet />
                <SatNusa />
            </div>

        </Container>

    )
}
export default Experience