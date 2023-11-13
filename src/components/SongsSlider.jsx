import './songs.css'
import SLine from "./SLine"

export default function SongsSlider() {
    return (
        <>
        <SLine />
        <div className="song-main-container">
            <img 
                src="https://source.unsplash.com/random/?songs,musics" 
                alt="album" 
                className="song-image">
            </img>
            <div className="song-text">
                <p className="song-title">Song Title</p>
                <p className="song-artist">Song Artist</p>                
            </div>
            <div>
            <a href = "#" className="song-link">...</a>
            </div>
        </div> 
        </>
    )
}