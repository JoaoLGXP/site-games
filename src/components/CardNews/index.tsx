import "./styles.css";
import notice from "../../assets/overwatch.png";
import mei from "../../assets/Mei.png";
import pharah from "../../assets/Pharah.png";
import { Link } from "react-router-dom";

export default function CardNews() {


    return (
        <>
            <Link to="notice">
                <article>
                    <div className="card-news">
                        <img src={notice} alt="" />
                        <div className="news-text">
                            <div className="title-and-resume">
                                <p className="news-date">04/03/2024</p>
                                <h3>Novo trailer de "Overwatch 2" revela heróis inéditos e modos de jogo emocionantes</h3>
                                <p>
                                    Os fãs de Overwatch têm motivos para comemorar, pois um novo trailer de "Overwatch 2" foi lançado hoje, oferecendo uma prévia eletrizante das novidades que aguardam os jogadores neste aguardado jogo de tiro em equipe.
                                </p>
                            </div>
                            <div className="news-tags">
                                <div className="news-tag-gm">Games</div>
                                <div className="news-tag-ps">Playstation</div>
                                <div className="news-tag-pc">Pc</div>
                                <div className="news-tag-xb">Xbox</div>
                            </div>
                        </div>
                    </div>
                </article>

            </Link>

            <article>
                <div className="card-news">
                    <img src={pharah} alt="" />
                    <div className="news-text">
                        <div className="title-and-resume">
                            <p className="news-date">04/03/2024</p>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                interdum, libero sit amet efficitur commodo, libero quam
                                tincidunt ipsum, eu ultrices nulla justo vitae dolor.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit. Fusce interdum,
                                libero sit amet efficitur commodo, libero quam tincidunt ipsum,
                                eu ultrices nulla justo vitae dolor.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Fusce interdum, libero sit amet
                                efficitur commodo, libero quam tincidunt ipsum, eu ultrices
                                nulla justo vitae dolor.
                            </p>
                        </div>
                        <div className="news-tags">
                            <div className="news-tag-ps">Playstation</div>
                            <div className="news-tag-gm">Games</div>
                            <div className="news-tag-pc">Pc</div>
                            <div className="news-tag-xb">Xbox</div>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div className="card-news">
                    <img src={mei} alt="" />
                    <div className="news-text">
                        <div className="title-and-resume">
                            <p className="news-date">04/03/2024</p>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                interdum, libero sit amet efficitur commodo, libero quam
                                tincidunt ipsum, eu ultrices nulla justo vitae dolor.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit. Fusce interdum,
                                libero sit amet efficitur commodo, libero quam tincidunt ipsum,
                                eu ultrices nulla justo vitae dolor.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Fusce interdum, libero sit amet
                                efficitur commodo, libero quam tincidunt ipsum, eu ultrices
                                nulla justo vitae dolor.
                            </p>
                        </div>
                        <div className="news-tags">
                            <div className="news-tag-ps">Playstation</div>
                            <div className="news-tag-gm">Games</div>
                            <div className="news-tag-pc">Pc</div>
                            <div className="news-tag-xb">Xbox</div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}