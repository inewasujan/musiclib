import SLine from './SLine'
import './main.css'
export default function Explore() {
    return (
        <div>
            <SLine />
            <h3>More to Explore</h3>
            <div className="explore-lists">
                <ul>
                    <li>
                        <a href="#">Browse by Category</a>
                    </li>
                    <li>
                        <a href="#">First Nations</a>
                    </li>
                    <li>
                        <a href="#">Kids</a>
                    </li>
                    <li>
                        <a href="#">Charts</a>
                    </li>
                    <li>
                        <a href="#">Essentials</a>
                    </li>
                    <li>
                        <a href="#">Music Videos</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}