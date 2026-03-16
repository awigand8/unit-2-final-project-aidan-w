import Copyright from './Copyright';
import Button from './Button';
import Header from './Header';

function Subscribe() {
    return (
        <div className="subscribe">
            <Header title="Subscribe to Us!"/>
            <p>Get the latest updates about attractions and events in STL!</p>

            <form>
                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                />
                <Button label="Subscribe" className="subscribe-button" />
            </form>
            <Copyright />
        </div>
    );
}

export default Subscribe;