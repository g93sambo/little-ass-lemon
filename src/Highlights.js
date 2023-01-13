function Highlights() {
    return (
        <div className="highlights-container">
            <div className="highlight-text">
                <h1>Todays special!</h1>
                <div className="highlight-button">
                    <button>Online Menu</button>
                </div>
            </div>
            <div className="highlight-card">
                <div>
                    <img className="greek-salad"
                        src={require("./Greek-salad.png")}
                    />
                    <div className="greek-salad-text">
                        <h2><b>Greek Salad</b></h2>
                        <p className="main-p">$16.99</p>
                    </div>
                    <article>The famous greek salad of
                        crispy lettuce,<br /> peppers, olives
                        and our Chicago style feta<br />
                        cheese, garnished with
                        crunchy garlic and<br /> rosemary
                        croutons.</article>
                    <div className="delivery">
                        <p><b>Order a Delivery</b></p>
                        <img
                            src={require("./delivery.png")}
                        />
                    </div>
                </div>
                <div>
                    <img className="lemon-cake"
                        src={require("./Lemon-cake.png")} />
                     <div className="greek-salad-text">
                        <h2><b>Lemon Cake</b></h2>
                        <p className="main-p">$16.99</p>
                    </div>
                    <article>The famous greek salad of
                        crispy lettuce,<br /> peppers, olives
                        and our Chicago style feta<br />
                        cheese, garnished with
                        crunchy garlic and<br /> rosemary
                        croutons.</article>
                    <div className="delivery">
                        <p className><b>Order a Delivery</b></p>
                        <img
                            src={require("./delivery.png")}
                        />
                    </div>
                </div>
                <div>
                    <img className="brusscheta"
                        src={require("./Brusscheta.png")} />
                     <div className="greek-salad-text">
                        <h2><b>Brusscheta</b></h2>
                        <p className="main-p">$16.99</p>
                    </div>
                    <article>The famous greek salad of
                        crispy lettuce,<br /> peppers, olives
                        and our Chicago style feta<br />
                        cheese, garnished with
                        crunchy garlic and<br /> rosemary
                        croutons.</article>
                    <div className="delivery">
                        <p><b>Order a Delivery</b></p>
                        <img
                            src={require("./delivery.png")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Highlights;