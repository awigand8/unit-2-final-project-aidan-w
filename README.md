📍 Meet Me in STL

🚀 Project Description

This project is a full-stack web application designed to help users create and manage a personalized bucket list of places to visit. Users can browse locations, add them to their bucket list, and mark them as completed. The application emphasizes clean UI design, efficient data handling, and strong data integrity by preventing duplicate entries through both frontend validation and backend database constraints. It was built as part of a LaunchCode coursework project to practice CRUD operations, RESTful API development, and full-stack integration using a React frontend and a Java Spring Boot backend.

🛠️ Technologies Used

Frontend:

React,
React Router,
JavaScript,
CSS / Tailwind

Backend:

Java,
Spring Boot,
Spring Data JPA,
REST APIs

Database:

MySQL

Other Tools:

Git & GitHub,
Postman

⚙️ Installation & Setup

1. Clone the Repository
```bash
git clone https://github.com/awigand8/unit-2-final-project-aidan-w.git

cd unit-2-final-project-aidan-w
```
2. Create the Database

Before running the backend, create a MySQL database named:
```sql
CREATE DATABASE bucketlist;
```
3. Backend Setup (Spring Boot)
   
Open the backend in IntelliJ (or your preferred IDE)

Update your application.properties file:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/bucketlist

spring.datasource.username=your_username

spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
```
4. Run the Backend (IMPORTANT)

Start the Spring Boot application before inserting any data.

This allows Hibernate to automatically create the required tables.

Backend runs on:
```
http://localhost:8080
```
5. Seed the Database

After running the backend once, execute the following SQL:
```sql
INSERT INTO place (id, name, category, shortdesc, description, image_url)
VALUES (1, 'Gateway Arch', 'Attraction', 'The Arch is a historic landmark sitting right on the Mississippi riverfront', 'The Arch is a historic landmark sitting right on the Mississippi riverfront, making it a promanit view of the city skyline. The Arch isn''t just a symbol for St. Louis but also a point of national history because here the journey towards the west began. This monument was built in response for the need to reitalize the Riverfront, but stood to commemorate the westward expansion.', 'images/arch.jpg'),
(2, 'Sculpture Park', 'Attraction', 'The Laumeier Sculpture Park serves as a 105-acre open-air museum', 'The Laumeier Sculpture Park serves as a 105-acre open-air museum. It features over 70 large-scale outdoor sculptures and offers a 1.4-mile walking trail for visitors to enjoy the art and nature. The park was established in 1976, and is recognized as one of the largest and most significant sculpture parks in the United States.', 'images/sculpture park.webp'),
(3, 'Botanical Garden', 'Attraction', 'The St. Louis Botanical Garden is a stunning green space nestled in the heart of Forest Park', 'The St. Louis Botanical Garden is a stunning green space nestled in the heart of Forest Park, offering visitors a vibrant display of plants, flowers, and themed gardens. The garden isn''t just a beautiful escape—it''s also a center for education and conservation, highlighting plant species from around the globe. Established to provide both a place of natural beauty and a hub for public learning, the Botanical Garden continues to inspire visitors to explore, relax, and connect with the natural world, making it a cherished landmark of St. Louis.', 'images/botanicalgarden.jpg'),
(4, 'STL City Game', 'Attraction', 'St. Louis City SC is a great environment for people of all ages to expeirence a sporting event like no other', 'St. Louis City SC is a great environment for people of all ages to experience a sporting event like no other. From the engaging roars of the crowd, delicious food venders, and your favorite players playing home games at the state-of-the-art CityPark. Its an experience like no other, bringing Major League Soccer action to fans across the region. The team isn''t just a source of entertainment, it''s also a symbol of St. Louis'' rich sports tradition and growing soccer culture.', 'images/stlcitygame.jpg'),    
(5, 'Peacemaker Seafood', 'Food', 'Peacemaker Seafood is a popular St. Louis spot known for its fresh coastal flavors and relaxed, welcoming atmosphere', 'Peacemaker Seafood is a popular St. Louis spot known for its fresh coastal flavors and relaxed, welcoming atmosphere. Inspired by East Coast seafood shacks, it serves favorites like lobster rolls, crab boils, and seasonal catches that keep people coming back. More than just a restaurant, Peacemaker offers a taste of the coast in the heart of the Midwest, making it a must-try stop for seafood lovers.', 'images/peacemakers.webp'),
(6, 'Crown Candy Kitchen', 'Food', 'Crown Candy Kitchen is a beloved St. Louis landmark known for its classic charm, handmade chocolates, and old-fashioned soda fountain treats.', 'Crown Candy Kitchen is a beloved St. Louis landmark known for its classic charm, handmade chocolates, and old-fashioned soda fountain treats. Family-owned since 1913, it offers everything from thick malt shakes to hearty sandwiches, making it a nostalgic taste of the city''s past. More than just a sweet shop, Crown Candy is a tradition—one that keeps locals and visitors coming back for comfort food and timeless flavors.', 'images/crowncandy.webp'),
(7, 'Zia''s on The Hill', 'Food', 'Zia''s on the Hill is a longtime favorite in St. Louis'' historic Italian neighborhood, known for its warm atmosphere and comforting, homemade dishes.', 'Zia''s on the Hill is a longtime favorite in St. Louis'' historic Italian neighborhood, known for its warm atmosphere and comforting, homemade dishes. From pasta classics to hearty entrées, the restaurant brings authentic Italian flavors to the heart of The Hill. More than just a place to eat, Zia''s offers the kind of hospitality and tradition that keeps generations of families coming back, making it a true staple of the neighborhood.', 'images/zias.webp'),
(8, 'Hodak''s Restaurant', 'Food', 'Hodak''s is a classic St. Louis spot celebrated for its crispy, no-frills fried chicken and welcoming neighborhood feel', 'Hodak''s is a classic St. Louis spot celebrated for its crispy, no-frills fried chicken and welcoming neighborhood feel. Known for generous portions and affordable comfort food, it has been a go-to restaurant for locals for decades. More than just a casual eatery, Hodak''s is a St. Louis tradition—one that brings people together over simple, satisfying meals that keep them coming back.', 'images/hodaks.webp');     
```
6. Frontend Setup (React)
```bash
npm install
npm run dev
```
Frontend runs on:
```
http://localhost:3000
```
🎨 Wireframes

https://www.figma.com/design/ot3jGr7w4pHrvIUEhJnift/Project-Wireframe?node-id=86-8338&t=caWUSVWMKcHkrx0h-1

🗂️ ER Diagram

https://lucid.app/lucidchart/2692906e-7da1-4fcd-96fc-e7ec6a4ca72e/edit

🚧 Future Features

-Public API integration for dynamic place data

-User authentication and profiles

-User comments and reviews

-Additional UI/UX improvements

✅ Final Notes

-The backend must be run once before seeding data to allow Hibernate to create tables

-The database must be named bucketlist

-Ensure images are located in the /public/images directory

🎉 Once setup is complete, you’re ready to explore the app!
