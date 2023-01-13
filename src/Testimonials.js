import "./App.css"
function Testimonials() {
    return (
        <div className="testimonial-container">
            <div className="testimonial-header">
                <h1>Testimonials</h1>
            </div>
            <div className="testimonial-card">
                <div className="martha">
                    <h2>Rating</h2>
                    <div>
                        <img src={require("./martha.jpeg")} />
                        <p>Matthew Kingsley</p>
                    </div>
                    <img className="stars"src={require("./5-star.png")}/>
                    <p>5 out of 5 stars</p>
                </div>
                <div className="matthew">
                    <h2>Rating</h2>
                    <div>
                        <img src={require("./matthew.jpeg")} />
                        <p>Martha Karen</p>
                    </div>
                    <img className="stars" src={require("./5-star.png")}/>
                    <p>5 out of 5 stars</p>
                </div>
                <div className="idris">
                    <h2>Rating</h2>
                    <div>
                        <img src={require("./idris.jpeg")} />
                        <p>Idris Elba</p>
                    </div>
                    <img className="stars" src={require("./5-star.png")}/>
                    <p>5 out of 5 stars</p>
                </div>
                <div className="will">
                    <h2>Rating</h2>
                    <div>
                        <img src={require("./will.jpeg")} />
                        <p>Will Smith</p>
                    </div>
                    <img className="stars" src={require("./5-star.png")}/>
                    <p>5 out of 5 stars</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;