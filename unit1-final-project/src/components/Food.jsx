import { useContext } from 'react';
import { DataContext } from './context/DataContext';
import Copyright from './Copyright';
import DynamicPage from './DynamicPage';

function Food() {
    const { places, addBucketItem } = useContext(DataContext);

    const food = places.filter(place => place.category === "Food");
    return (
        <div>
            <DynamicPage title="Food" data={food} onAdd={addBucketItem} />
            <Copyright />
        </div>
    );
}

export default Food;