import "./songs.css";
import data from './songsData';

function SongsSlider() {
  // Function to chunk the data into groups of 5
const chunkArray = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
      array.slice(index * size, (index + 1) * size)
    );
};

const chunkedData = chunkArray(data, 3);

return (
    <>
        <div className="album-info">
            <h3>Australia's Favourite </h3>
            <h3 className="link">
                <a href="#">See All</a>
            </h3>
        </div>
        {chunkedData.map((chunk, rowIndex) => (
        <div className="songs-lists" key={rowIndex}>
            {chunk.map((item) => (
            <div className="song-main-container" key={item.id}>
                <img src={item.image} alt={`${item.title} by ${item.artist}`} className="song-image" />
                <div className="song-text">
                    <p className="song-title">{item.title}</p>
                    <p className="song-artist">{item.artist}</p>
                </div>
            </div>
            ))}
        </div>
    ))}
    </>
    );
}

export default SongsSlider;
