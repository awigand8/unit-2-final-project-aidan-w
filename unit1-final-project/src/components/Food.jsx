import Copyright from './Copyright';
import DynamicPage from './DynamicPage';

const foodData = [
    { id: 5, description: "Peacemaker Seafood is a popular St. Louis spot known for its fresh coastal flavors and relaxed, welcoming atmosphere. Inspired by East Coast seafood shacks, it serves favorites like lobster rolls, crab boils, and seasonal catches that keep people coming back. More than just a restaurant, Peacemaker offers a taste of the coast in the heart of the Midwest, making it a must-try stop for seafood lovers.", shortdesc: "Peacemaker Seafood is a popular St. Louis spot known for its fresh coastal flavors and relaxed, welcoming atmosphere", image: "images/peacemakers.webp" },
    { id: 6, description: "Crown Candy Kitchen is a beloved St. Louis landmark known for its classic charm, handmade chocolates, and old-fashioned soda fountain treats. Family-owned since 1913, it offers everything from thick malt shakes to hearty sandwiches, making it a nostalgic taste of the city's past. More than just a sweet shop, Crown Candy is a tradition—one that keeps locals and visitors coming back for comfort food and timeless flavors.", shortdesc: "Crown Candy Kitchen is a beloved St. Louis landmark known for its classic charm, handmade chocolates, and old-fashioned soda fountain treats.", image: "images/crowncandy.webp" },
    { id: 7, description: "Zia's on the Hill is a longtime favorite in St. Louis' historic Italian neighborhood, known for its warm atmosphere and comforting, homemade dishes. From pasta classics to hearty entrées, the restaurant brings authentic Italian flavors to the heart of The Hill. More than just a place to eat, Zia's offers the kind of hospitality and tradition that keeps generations of families coming back, making it a true staple of the neighborhood.", shortdesc: "Zia's on the Hill is a longtime favorite in St. Louis' historic Italian neighborhood, known for its warm atmosphere and comforting, homemade dishes.", image: "images/zias.webp" },
    { id: 8, description: "Hodak's is a classic St. Louis spot celebrated for its crispy, no-frills fried chicken and welcoming neighborhood feel. Known for generous portions and affordable comfort food, it has been a go-to restaurant for locals for decades. More than just a casual eatery, Hodak's is a St. Louis tradition—one that brings people together over simple, satisfying meals that keep them coming back.", shortdesc: "Hodak's is a classic St. Louis spot celebrated for its crispy, no-frills fried chicken and welcoming neighborhood feel", image: "images/hodaks.webp" },
];

function Food() {
    const { places, addBucketItem } = useContext(DataContext);
    
    const food = places.filter(place => place.category === "food");
    return (
        <div>
            <DynamicPage title="Food" data={food} onAdd={addBucketItem} />
            <Copyright />
        </div>
    );
}

export default Food;