export default function Card(props) {

    return (
        <div className="card">
            <img className="card-image" src={props.card.imageUrl} alt="" />
            <div className="card-content">
                <div className="card-location">
                    <h4 className="card-location-name">{props.card.location}</h4>
                    <a className="card-location-link" href={props.card.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="card-title">{props.card.title}</h2>
                <h3 className="card-date">{props.card.startDate} - {props.card.endDate}</h3>
                <p className="card-description">{props.card.description}</p>
            </div>
        </div>

    );
}