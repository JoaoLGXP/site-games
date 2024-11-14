import CardNews from "../CardNews";
import LoadMoreButton from "../LoadMoreButton";
import "./styles.css";

export default function LatestNews() {
    return (
        <section className="main-content">
            <h2>Últimas Notícias</h2>
            <CardNews />
            <LoadMoreButton />

        </section>
    );
}