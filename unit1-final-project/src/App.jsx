import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Attractions from './components/Attractions';
import Food from './components/Food';
import Subscribe from './components/Subscribe';
import BucketList from './components/BucketList';
import './App.css';

function App() {
  // const [bucketList, setBucketList] = useState([]);

  // function handleAdd(item) {
  //   setBucketList((prev) => {
  //     if (prev.includes(item.name)) {
  //       return prev;
  //     }
  //     return [...prev, item.name]; // stores the attraction name
  //   });
  // }

  // function handleDeleteItem(name) {
  //   setBucketList((prev) => prev.filter(item => item !== name));
  // };

  return (
    <div className="App">
      <title>Meet Me in STL</title>
      <nav className="navbar">
        <div className="navbar-title">
          <Link to="/home">Meet Me in STL</Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/attractions">Attractions</Link></li>
          <li><Link to="/food">Food</Link></li>
          <li><Link to="/bucketlist">Bucket List</Link></li>
          <li><Link to="/subscribe">Subscribe</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/food" element={<Food />} />
        <Route path="/bucketlist" element={<BucketList />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </div>
  );
}
export default App;