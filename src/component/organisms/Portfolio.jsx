import CardPortfolio from "../atom/CardPortfolio"
import Container from "../atom/Container"

const Portfolio=()=>{
    return(
        <Container 
        id={"Portfolio"}
        title={"My Portfolio 💼"} 
        description={"I've created a few project while i was learing about frontend website development. and all of project i'll explain below"}>
            {/* <div className="md:grid md:grid-cols-3 grid-cols-1 grid items-center justify-center">
             */}
             <div className="grid-cols-1 grid md:flex justify-center md:flex-wrap gap-5">
                <CardPortfolio src="porto/indodax.jpeg" sourceCode={"https://github.com/ridho-chaniago/cloning-indodax"}>Cloning Indodax</CardPortfolio>
                <CardPortfolio/>
            </div>
        </Container>
    )
}
export default Portfolio