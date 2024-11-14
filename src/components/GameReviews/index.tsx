import LoadMoreButton from "../LoadMoreButton";
import ReviewCards from "../ReviewCards";
import "./styles.css";

export default function GameReviews() {
    return (
        <section className="main-content">
            <h2>Game Reviews</h2>
            <ReviewCards />
            <LoadMoreButton />

        </section>
    );
}