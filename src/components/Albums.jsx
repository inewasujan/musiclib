import SLine from "./SLine"
import Random from "./ImageSlider"
import './album.css'
export default function Albums() {    
    return (
        <div className="Albums"> 
         <SLine />
         <div className="album-info">
            <h3>New Music Fridays</h3>
            <h3 className="link">See All</h3>
         </div>
         <Random />
        </div>
    )
}
