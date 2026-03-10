import Copyright from "./Copyright";
import Button from './Button';

function BucketList({ bucketList, onDelete }) {
    return (
        <div>
            <h1>Bucket List</h1>

            <div className="bucket-list-container">
                {bucketList.length === 0 && <p>Nothing yet...</p>}

        <ol>
            {bucketList.map((item, index) => 
                <li key={index}>
                    <span className="bucket-list-item">
                        {item}
                    <Button 
                    label="Delete"
                    className="delete-button"
                    onClick={ () => onDelete(item)}
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