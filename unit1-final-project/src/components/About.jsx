import Copyright from './Copyright';

function About() {
    return (
        <div className="aboutus">
            <h1>About Us</h1>
            <img
                src="images/stlpic.jpg" alt="St. Louis skyline at night" className="skyline" />
            <p>Meet Me in STL makes exploring St. Louis easy and fun. We bring together the city's
                best attractions, restaurants, and experiences all in one place, helping you discover
                new favorites and plan your next adventure. Whether you live here or are visiting for the first time, our goal is to help you experience the heart, history, and flavor of St. Louis.
            </p>
            <footer>
                <h3>Contact Us!</h3>
                <table className="contact-table">
                    <tbody>
                        <tr>
                            <td>Email:</td>
                            <td>info@meetmeinstl.com</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>(314)222-2222</td>
                        </tr>
                        <tr>
                            <td>Facebook:</td>
                            <td>
                                <img src="images/react-icons/square-facebook-brands-solid-full.svg" alt="Facebook" className="social-icon" />
                                MeetMeInSTL
                            </td>
                        </tr>
                        <tr>
                            <td>Instagram:</td>
                            <td>
                                <img src="images/react-icons/square-instagram-brands-solid-full.svg" alt="Instagram" className="social-icon" />
                                @MeetMeInSTL
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Copyright />
            </footer>

        </div>
    );
}

export default About;    
