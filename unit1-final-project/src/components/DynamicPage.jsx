import React, { useContext, useState } from "react";
import Button from './Button';
import Card from './Card';

function DynamicPage({ title, data, onAdd }) {
    const [selectedItem, setSelectedItem] = useState(null)


    return (
        <div className="dynamic-container">
            {selectedItem ? ( //show item view if not null
                <>

                    <div className="selected-card">
                        <Card
                            title={selectedItem.name}
                            description={selectedItem.description}
                            image={selectedItem.image_url}
                        />
                    </div>

                    <Button
                        label="Back"
                        onClick={() => setSelectedItem(null)}
                        className="back-button"
                    />

                    <Button
                        label="Add to Bucket List"
                        onClick={() => {
                            onAdd(selectedItem);       // add it
                            setSelectedItem(null);     // go back
                        }}
                        className="add-button"
                    />

                </>
            ) : ( //show list view if null
                <>
                    <h1>{title}</h1>

                    <div className="card-grid">
                        {data.map((item) => (
                            <Card
                                key={item.id}
                                title={item.name}
                                shortdesc={item.shortdesc}
                                image={item.image_url}
                                onClick={() => setSelectedItem(item)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default DynamicPage;