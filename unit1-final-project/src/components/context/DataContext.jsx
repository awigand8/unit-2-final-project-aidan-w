import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

//PLACES
const [places, setPlaces] = useState([]);

const fetchPlaces = async () => {
    try {
    const response = await fetch('http://localhost:8080/places');

    const data = await response.json();

    setPlaces(data);
    } catch (error) {
        console.error("Error fetching places:", error);
    }
}

//BUCKET LIST
const [bucketItems, setBucketItems] = useState([]);

const fetchBucketItems = async () => {
    try {
    const response = await fetch('http://localhost:8080/bucket-items');

    const data = await response.json();

    setBucketItems(data);
    } catch (error) {
        console.error("Error fetching bucket list items:", error);
    }
}

const addBucketItem = async (place) => {
    try {
    const response = await fetch(`http://localhost:8080/bucket-items?placeId=${place.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const newItem = await response.json();

    setBucketItems((prev) => [...prev, newItem]);
    } catch (error) {
        console.error("Error adding bucket list item:", error);
    }
};

useEffect(() => { 
    fetchPlaces();
    fetchBucketItems(); 
}, []);

return (
    <DataContext.Provider value={{ places, bucketItems, addBucketItem }}>
        {children}
    </DataContext.Provider>
)
}