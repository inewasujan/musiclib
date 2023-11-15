import './songs.css'
import SLine from "./SLine"

const data = [
    {
        id: 1,
        title: "Spend It (feat. Circa Waves)",
        artist: "Peking Duk",
        image: "https://source.unsplash.com/random/?peking-duk,music"
    },
    {
        id: 2,
        title: "Shirt",
        artist: "SZA",
        image: "https://source.unsplash.com/random/?songs,SZA"
    },
    {
        id: 3,
        title: "Crush Me(feat. Kota Banks)",
        artist: "Ninajirachi",
        image: "https://source.unsplash.com/random/?Ninajirachi, kota-banks"
    },
    {
        id: 4,
        title: "Moving Trains",
        artist: "Slowly Slowly",
        image: "https://source.unsplash.com/random/?trains,slowly-slowly"
    },
    {
        id: 5,
        title: "Take Trips",
        artist: "Ay Huncho, NASA NOVA",
        image: "https://source.unsplash.com/random/?ay-huncho,nasa-nova,music"
    },
    // {
    //     id: 6,
    //     title: "2022 Without You",
    //     artist: "Darcy Lane",
    //     image: "https://source.unsplash.com/random/?darcy-lane,music,witout-you"   
    // },
    // {
    //     id: 7,
    //     title: "Lemonade",
    //     artist: "Internet Money, Gunna, Don Toliver, NAV",
    //     image: "https://source.unsplash.com/random/?internet-money,gunna,don-toliver,nav,music"
    // },
    // {
    //     id: 8,
    //     title: "Dance",
    //     artist: "Tones And I",
    //     image: "https://source.unsplash.com/random/?tones-and-i,music"
    // },
    // {
    //     id: 9,
    //     title: "I'm Good",
    //     artist: "Hilltop Hoods",
    //     image: "https://source.unsplash.com/random/?hilltop-hoods,music"    
    // },
    // {
    //     id: 10,
    //     title: "Shape of You",
    //     artist: "Ed Sheeran",
    //     image: "https://source.unsplash.com/random/?ed-sheeran,shape-of-you"
    // },
    // {
    //     id: 11,
    //     title: "Hello",
    //     artist: "Adele",
    //     image: "https://source.unsplash.com/random/?adele,music"
    // },
    // {
    //     id: 12,
    //     title: "American Girl",
    //     artist: "Tom Petty And The Heartbreakers",
    //     image: "https://source.unsplash.com/random/?tom-petty,music"
    // },     
]

export default function SongsSlider() {
    return (
        <>
            <div className="Songs"> 
            <div className="album-info">
                <h3>Best New Songs</h3>
                <h3 className="link"><a href= "#">See All</a></h3>
            </div>
            <SLine />
            {data.map((item) =>(
                <div className="song-main-container" key={item.id}>
                    <img src={item.image} alt={item.title} className="song-image"></img>
                <div className="song-text">
                    <p className="song-title">{item.title}</p>
                    <p className="song-artist">{item.artist}</p>                
                </div>
                <div>
                <a href = "#" className="song-link">...</a>
                </div>
                </div>
            ))}
            </div>
        </>
    )
}

