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
const [bucketList, setBucketList] = useState([]);

const fetchBucketList = async () => {
    try {
    const response = await fetch('http://localhost:8080/bucket-items');

    const data = await response.json();

    setBucketList(data);
    } catch (error) {
        console.error("Error fetching bucket list items:", error);
    }
}

const addBucketItem = async (item) => {
    try {
    const response = await fetch('http://localhost:8080/bucket-items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });

    const newItem = await response.json();

    setBucketList((prev) => [...prev, newItem]);
    } catch (error) {
        console.error("Error adding bucket list item:", error);
    }
};

useEffect(() => { 
    fetchPlaces();
    fetchBucketList() 
}, []);

return (
    <DataContext.Provider value={{ places, bucketList, addBucketItem }}>
        {children}
    </DataContext.Provider>
)
}