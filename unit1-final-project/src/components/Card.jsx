import "../Card.css";

function Card({ title, shortdesc, description, image, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-container">
                <img src={image} alt={title} className="card-image" />
                <h4>{title}</h4>
                <p>{description || shortdesc}</p>
            </div>
        </div>
    );
}

export default Card;