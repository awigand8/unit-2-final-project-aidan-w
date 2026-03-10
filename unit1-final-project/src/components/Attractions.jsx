import { useContext } from 'react';
import Copyright from './Copyright';
import DynamicPage from './DynamicPage';

const attractionsData = [
    { id: 1, description: "The Arch is a historic landmark sitting right on the Mississippi riverfront, making it a promanit view of the city skyline. The Arch isn't just a symbol for St. Louis but also a point of national history because here the journey towards the west began. This monument was built in response for the need to reitalize the Riverfront, but stood to commemorate the westward expansion.  ", shortdesc: "The Arch is a historic landmark sitting right on the Mississippi riverfront", image: "images/arch.jpg" },
    { id: 2, description: "The Laumeier Sculpture Park serves as a 105-acre open-air museum. It features over 70 large-scale outdoor sculptures and offers a 1.4-mile walking trail for visitors to enjoy the art and nature. The park was established in 1976, and is recognized as one of the largest and most significant sculpture parks in the United States.", shortdesc: "The Laumeier Sculpture Park serves as a 105-acre open-air museum", image: "images/sculpture park.webp" },
    { id: 3, description: "The St. Louis Botanical Garden is a stunning green space nestled in the heart of Forest Park, offering visitors a vibrant display of plants, flowers, and themed gardens. The garden isn't just a beautiful escape—it's also a center for education and conservation, highlighting plant species from around the globe. Established to provide both a place of natural beauty and a hub for public learning, the Botanical Garden continues to inspire visitors to explore, relax, and connect with the natural world, making it a cherished landmark of St. Louis.", shortdesc: "The St. Louis Botanical Garden is a stunning green space nestled in the heart of Forest Park", image: "images/botanicalgarden.jpg" },
    { id: 4, description: "St. Louis City SC is a great environment for people of all ages to experience a sporting event like no other. From the engaging roars of the crowd, delicious food venders, and your favorite players playing home games at the state-of-the-art CityPark. Its an experience like no other, bringing Major League Soccer action to fans across the region. The team isn't just a source of entertainment, it's also a symbol of St. Louis' rich sports tradition and growing soccer culture.", shortdesc: "St. Louis City SC is a great environment for people of all ages to expeirence a sporting event like no other", image: "images/stlcitygame.jpg" },
];

function Attractions() {
    const { places, addBucketItem } = useContext(DataContext);

    const attractions = places.filter(place => place.category === "attraction");

    return (
        <div>
            <DynamicPage title="Attractions" data={attractions} onAdd={addBucketItem} />
            <Copyright />
        </div>
    );
}

export default Attractions;