import './main.css';

const data = [
    {
        "id": "1",
        "info": "NEW ALBUM + READ THE INTERVIEW",
        "title": "THE HARDEST LOVE",
        "artist": "DEAN LEWIS",
        "image": "https://source.unsplash.com/random/?INTERVIEW,HARDEST,LOVE,DEAN,LEWIS"
    },
    {
        "id": "2",
        "info": "FEATURED PLAYLIST",
        "title": "DANCE POP HITS",
        "artist": "APPLE MUSIC DANCE",
        "image": "https://source.unsplash.com/random/?dance,pop,hits,apple,music"
    }
]
export default function Main() {
    return (
        <>
            <div className="Main">
                <div className="main_container">
                    {data.map( (item) => (
                        <div className="container-info" key={item.id}>
                            <div className= "text-styles">
                                <p className="information">{item.info}</p>
                                <p className="title">{item.title}</p>
                                <p className="artist">{item.artist}</p>
                            </div>
                            <img className="image" src={item.image}></img>
                            </div>
                    )) } 
                </div>                
            </div>  
        </>
    );
}