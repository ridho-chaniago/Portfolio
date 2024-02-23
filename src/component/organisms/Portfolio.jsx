import CardPortfolio from "../atom/CardPortfolio"
import Container from "../atom/Container"

const Portfolio=()=>{
    return(
        <Container 
        id={"Portfolio"}
        title={"My Portfolio 💼"} 
        description={"I've created a few project while i was learing about frontend website development. and all of project i'll explain below"}>
            <div className="md:grid md:grid-cols-4 grid-cols-2 grid">
                <CardPortfolio/>
                <CardPortfolio/>
                <CardPortfolio/>
                <CardPortfolio/>
            </div>
        </Container>
    )
}
export default Portfolio