import data from "./data";
import Card from "./Card";

export default function Cards() {
    // cards contains the array of JSX elements for each of the cards
    const cards = data.map(card => {
        return <Card id={card.id} card={card} />
    });

    return (
        cards
    );
}