import "../Card.css";

function Card({ onClick }) {
    const { places } = useContext(DataContext);
    return (
        <div className="card" onClick={onClick}>
            <div className="card-container">
                <img src={places.image_url} alt={places.name} className="card-image" />
                <h4>{places.name}</h4>
                <p>{places.description || places.shortdesc}</p>
            </div>
        </div>
    );
}

export default Card;