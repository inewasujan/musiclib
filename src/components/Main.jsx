import './main.css';
export default function Main() {
    return (
        <>
            <div className="Main">
                <div className="main_container">
                    <div className="container-info">
                        <div className= "text-styles">
                            <p className="information">Information</p>
                            <p className="title">Title</p>
                            <p className="artist">Artist</p>
                        </div>
                        <img className="image" src="https://source.unsplash.com/random/?music"></img>
                    </div>
                    <div className="container-info">
                        <div className= "text-styles">
                            <p className="information">Information</p>
                            <p className="title">Title</p>
                            <p className="artist">Artist</p>
                        </div>
                        <img className="image" src="https://source.unsplash.com/random/?music"></img>
                    </div>
                </div>                
            </div>  
        </>
    )
}