import SLine from "./SLine"
import Random from "./ArtistSlider"
import './album.css'
export default function Artist() {    
    return (
        <div className="Artists"> 
         <SLine />
         <div className="album-info">
            <h3>Celebrating Aus Music Month</h3>
            <h3 className="link">See All</h3>
         </div>
         <Random />
        </div>
    )
}
