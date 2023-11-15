import './album.css'

export default function MainComp(props) {
    return(
        <>
        <div className="albums"> 
         <div className="album-info">
            <h3>{props.title}</h3>
            <h3 className="link"><a href= "#">See All</a></h3>
         </div>
         <div className="random">
            {props.data.map((item) =>(
                <div className="random-container" key={item.id}>
                    <img className="random-image" src={item.image} alt={item.title} />                  
                    <div className="random-text">
                        <p className="random-title">{item.title}</p>
                        <p className="random-genre">{item.genre}</p>
                    </div>
                </div> 
            ))
            }                     
        </div>
        </div>
        </>
    )
}