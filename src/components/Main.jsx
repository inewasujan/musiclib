import './main.css';

const data = [
    {
        "id": "1",
        "info": "Hot Right Now",
        "title": "Sarangi",
        "artist": "Sushant KC",
        "image": "https://source.unsplash.com/random/?sarangi,violin,violinist,violin-player"
    },
    {
        "id": "2",
        "info": "Today's Choice",
        "title": "She is a women",
        "artist": "Billy Jeans",
        "image": "https://source.unsplash.com/random/?music"
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