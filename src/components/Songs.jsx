import SLine from "./SLine"
import SongsSlider from "./SongsSlider"
import './album.css'
export default function Songs() {    
    return (
        <div className="Songs"> 
            <SLine />
            <div className="album-info">
                <h3>Songs</h3>
                <h3 className="link">See All</h3>
            </div>
            <div className="songs-listing">
                <ul>
                    <li>
                        <SongsSlider />
                    </li>
                    <li>
                        <SongsSlider />
                    </li>
                    <li>
                        <SongsSlider />
                    </li>              
                </ul>
            </div>
            <div className="songs-listing">
                <ul>
                    <li>
                        <SongsSlider />
                    </li>
                    <li>
                        <SongsSlider />
                    </li>
                    <li>
                        <SongsSlider />
                    </li>              
                </ul>
            </div>
            <div className="songs-listing">
                <ul>
                    <li>
                        <SongsSlider />
                    </li>
                    <li>
                        <SongsSlider />
                    </li>
                    <li>
                        <SongsSlider />
                    </li>              
                </ul>
            </div>
            <div className="songs-listing">
                <ul>
                    <li>
                        <SongsSlider />
                    </li>
                    <li>
                        <SongsSlider />
                    </li>
                    <li>
                        <SongsSlider />
                    </li>              
                </ul>
            </div>
                                             
        </div>
    )
}
