import "./styles.css";
import theWitcher from "../../assets/270px-TW3_Wild_Hunt.png";
import dragonQuest from "../../assets/Dragon_Quest_11_capa.png";
import ff16 from "../../assets/Final_Fantasy_16_capa.png";
import godOfWar from "../../assets/God_of_War_Ragnarök_capa.jpg";
import ff14 from "../../assets/FFXIV-A_Realm_Reborn.jpg";

export default function ReviewCards() {
    return (
            <article>
                <div className="review-cards-group">
                    <div className="review-card">
                        <img src={theWitcher} alt="" />
                        <h4>The Witcher 3: Wild Hunt</h4>
                    </div>
                    <div className="review-card">
                        <img src={dragonQuest} alt="" />
                        <h4>Dragon Quest 11</h4>
                    </div>
                    <div className="review-card">
                        <img src={ff16} alt="" />
                        <h4>Final Fantasy XVI</h4>
                    </div>
                    <div className="review-card">
                        <img src={godOfWar} alt="" />
                        <h4>God of War Ragnarok</h4>
                    </div>
                    <div className="review-card">
                        <img src={ff14} alt="" />
                        <h4>Final Fantasy XIV: A Realm Reborn</h4>
                    </div>
                </div>
            </article>
    );
}