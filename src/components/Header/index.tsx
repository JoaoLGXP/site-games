import "./styles.css";
import insta from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import face from "../../assets/facebook.svg";
import youTube from "../../assets/youtube.svg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>Game News</h1>
            <nav>
                <ul>
                    <Link to="/">
                        <li><a href="#">Início</a></li>
                    </Link>
                    <li><a href="#">Notícias</a></li>
                    <li><a href="#">Reviews</a></li>
                </ul>
                <div className="group-right">
                    <div className="social-medias">
                        <img src={insta} alt="Instagram" />
                        <img className="twitter" src={twitter} alt="Twitter" />
                        <img src={face} alt="Facebook" />
                        <img src={youTube} alt="YouTube" />
                    </div>
                    <div className="search-bar">
                        <form className="dsc-search-bar" >
                            <input
                                type="text"
                            />
                            <button className="dsc-search-btn" type="submit">🔎︎</button>
                        </form>
                    </div>
                </div>

            </nav>
        </header>
    );
}