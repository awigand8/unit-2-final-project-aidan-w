import React, { useState } from "react";
import Button from './Button';
import Card from './Card';

function DynamicPage({ title, data, onAdd }) {
    const [selectedItem, setSelectedItem] = useState(null)


    return (
        <div className="dynamic-container">
            {selectedItem ? (
                <>

                    <div className="selected-card">
                        <Card
                            title={selectedItem.name}
                            description={selectedItem.description}
                            image={selectedItem.image}
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
            ) : (
                <>
                    <h1>{title}</h1>

                    <div className="card-grid">
                        {data.map((item) => (
                            <Card
                                key={item.id}
                                title={item.name}
                                shortdesc={item.shortdesc}
                                image={item.image}
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