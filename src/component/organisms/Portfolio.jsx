import CardPortfolio from "../atom/CardPortfolio"
import Container from "../atom/Container"

const Portfolio = () => {
    return (
        <Container
            id={"Portfolio"}
            title={"My Portfolio 💼"}
            description={"I've created a few project while i was learing about frontend website development. and all of project i'll explain below"}>
            <div data-aos="zoom-in" className="grid-cols-1 grid md:flex justify-center md:flex-wrap gap-5">
                <CardPortfolio src="porto/indodax.jpeg" sourceCode={"https://github.com/ridho-chaniago/cloning-indodax"}>Cloning Indodax</CardPortfolio>
                <CardPortfolio visit={"https://rencars.web.app"} src="porto/rencars.jpg" sourceCode={"https://github.com/ridho-chaniago/RentCars/tree/main/rentcar"}>RentCars</CardPortfolio>
                <CardPortfolio />
            </div>
        </Container>
    )
}
export default Portfolio