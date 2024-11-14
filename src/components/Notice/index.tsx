import "./styles.css";
import logoOverwatch from "../../assets/overwatch.png";
import overwatchImage from "../../assets/overwatch_gameplay.jpeg";
import overwatchImage2 from "../../assets/overwatch_heroes.jpg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import whatsapp from "../../assets/whatsapp.svg";

export default function Notice() {
    return (
        <div className="notice-container">
            <article>
                <div className="notice-title">
                    <h2>Novo trailer de "Overwatch 2" revela heróis inéditos e modos de jogo emocionantes</h2>
                </div>

                <div className="notice-responsible">
                    <p>Por Joao Lucas - 06/03/2024</p>
                </div>

                <div className="notice-main-image">
                    <img src={logoOverwatch} alt="" />
                </div>

                <div className="notice-share">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={whatsapp} alt="" />
                </div>

                <div className="notice-introduction">
                    <p>Os fãs de Overwatch têm motivos para comemorar, pois um novo trailer de "Overwatch 2" foi lançado hoje, oferecendo uma prévia eletrizante das novidades que aguardam os jogadores neste aguardado jogo de tiro em equipe.</p>
                </div>

                <div className="notice-content">
                    <p>O mais recente trailer de "Overwatch 2" mergulha os espectadores em um mundo repleto de ação e emoção. Além de mostrar os heróis familiares em ação, o trailer revela uma série de novos personagens que estão prontos para entrar na briga.

                        Junto com os novos heróis, o trailer também destaca alguns dos novos modos de jogo que os jogadores podem esperar experimentar. Desde emocionantes batalhas de equipe até desafios PvE intensos, "Overwatch 2" promete oferecer uma experiência diversificada que manterá os jogadores voltando para mais.

                        "Estamos entusiasmados em compartilhar mais detalhes sobre 'Overwatch 2' com nossa comunidade de jogadores", disse Jeff Kaplan, diretor de jogo da Blizzard Entertainment. "Esta sequência representa um grande passo em frente para a franquia Overwatch, e mal podemos esperar para que os jogadores mergulhem nesta nova aventura".

                        Com o lançamento de "Overwatch 2" se aproximando, os fãs estão ansiosos para ver o que o futuro reserva para sua equipe favorita de heróis. Com uma lista expandida de personagens e novos modos de jogo emocionantes, esta sequência promete elevar a franquia Overwatch a novos patamares de sucesso.

                        Continue acompanhando para mais informações e atualizações sobre o lançamento de "Overwatch 2" nos próximos meses.

                    </p>
                </div>
                <div className="notice-images">
                    <img src={overwatchImage2} alt="" />
                    <img src={overwatchImage} alt="" />
                </div>

            </article>
        </div>
    );
}