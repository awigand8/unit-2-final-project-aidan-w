import "../Card.css";

function Card({ shortdesc, description, image, onClick }) {
    const { places } = useContext(DataContext);
    return (
        <div className="card" onClick={onClick}>
            <div className="card-container">
                <img src={image} alt={places.name} className="card-image" />
                <h4>{places.name}</h4>
                <p>{description || shortdesc}</p>
            </div>
        </div>
    );
}

export default Card;