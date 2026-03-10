import { useContext } from 'react';
import Copyright from './Copyright';
import DynamicPage from './DynamicPage';
import { DataContext } from './context/DataContext';

function Attractions() {
    const { places, addBucketItem } = useContext(DataContext);

    const attractions = places.filter(place => place.category === "Attraction");

    return (
        <div>
            <DynamicPage title="Attractions" data={attractions} onAdd={addBucketItem} />
            <Copyright />
        </div>
    );
}

export default Attractions;