
import "./App.css"
function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-img">
                        <img
                src={require('./footer-logo.png')} />
                </div>
            <div className="footer-list">
                <div className="navigation">
                    <ul>
                        <li><b>Doormat</b></li>
                        <li><b>Navigation</b></li>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservation</a></li>
                        <li><a>Order Online</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <ul>
                        <li><a><b>Contact</b></a></li>
                        <li><a>Address</a></li>
                        <li><a>phone number</a></li>
                        <li><a>email</a></li>
                    </ul>
                </div>
                <div className="socials">
                    <ul>
                        <li><a><b>Social media links</b></a></li>
                        <li><a>Address</a></li>
                        <li><a>phone number</a></li>
                        <li><a>email</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Footer;