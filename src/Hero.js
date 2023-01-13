
import "./App.css"
function Hero(){
    return(
        <div className="hero-container grid-container">
            <div className="left-column">
        <h1 className="h1-hero">Little Lemon </h1>
        <h2 className="h2-hero">Chicago</h2>
        <article className="article-hero">We are a family based <br/>Mediterranean restaurant,<br/>focused on traditional<br/> recipes served with a modern <br/>twist</article>
        <button className="button-hero">Reserve a Table</button>
       </div>
        <img src={require("./hero-img.png")} alt="hero"className="hero-img right-column"/>
        </div>
    );
}
export default Hero;