import Copyright from "./Copyright";
import Button from './Button';
import { DataContext } from "./context/DataContext";
import { useContext } from "react";
import Header from "./Header";

function BucketList() {
    const { bucketItems, deleteBucketItem, markBucketItemComplete } = useContext(DataContext);
    return (
        <div>
            <Header title="Bucket List"/>

            <div className="bucket-list-container">
                {bucketItems.length === 0 && <p>Nothing yet...</p>}

                <ol>
                    {bucketItems.map((item) =>
                        <li key={item.id}>
                            <span className="bucket-list-item">
                                {item.place.name}
                                <Button
                                    label="Delete"
                                    className="delete-button"
                                    onClick={() => deleteBucketItem(item.id)}
                                />
                                <Button
                                    label="Mark Complete"
                                    className="complete-button"
                                    onClick={() => markBucketItemComplete(item.id)}
                                />
                            </span>
                        </li>
                    )}
                </ol>
            </div>

            <Copyright />
        </div>
    );
}

export default BucketList;