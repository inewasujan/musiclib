import SLine from './components/SLine'
import Main from './components/Main'
import './App.css'
import Songs from './components/Songs'
import Explore from './components/Explore'
import MainComp from './components/MainComp'

const data = [
  {
      "id": "1",        
      "title": "danceXl",
      "genre": "Apple Music Dance",
      "image": "https://source.unsplash.com/random/?dance"
  },
  {
      "id": "2",        
      "title": "Hip-Hop Hits",
      "genre": "Apple Music Hip-Hop",
      "image": "https://source.unsplash.com/random/?hiphop,hip-hop"
  },
  {
      "id": "3",        
      "title": "Heaps Indie",
      "genre": "Apple Music Indie",
      "image": "https://source.unsplash.com/random/?indie,indie-rock"
  },
  {
      "id": "4",        
      "title": "R&B Now",
      "genre": "Apple Music R&B",
      "image": "https://source.unsplash.com/random/?R&B"
  },
  {
      "id": "5",        
      "title": "Today's Acoustic",
      "genre": "Apple Music Acoustic",
      "image": "https://source.unsplash.com/random/?acoustic"
  }
]
  const data2 = [
    {
        "id": "1",        
        "title": "DANCING IN THE DARK",
        "genre": "ZIGGY ALBERTS",
        "image": "https://source.unsplash.com/random/?ZIGGY,ALBERTS"
    },
    {
        "id": "2",        
        "title": "MOTHER",
        "genre": "Apple Music CHILL",
        "image": "https://source.unsplash.com/random/?CHILL"
    },
    {
        "id": "3",        
        "title": "CHANGES",
        "genre": "King Gizzard & The Lizard Wizard",
        "image": "https://source.unsplash.com/random/?king,gizzard,the,lizard,wizard"
    },
    {
        "id": "4",        
        "title": "'90s AussieRock Essentials",
        "genre": "Apple Music R&B",
        "image": "https://source.unsplash.com/random/?90s,Aussie,Alt-Rock,Essentials"
    },
    {
        "id": "5",        
        "title": "Overgrown",
        "genre": "Sly Withers",
        "image": "https://source.unsplash.com/random/?sly,withers"
    }
]
function App() {

  return (
    <>
      <div className="app">
        <h2>Browse</h2> 
        <SLine />
        <Main />
        <SLine />
        <MainComp title="New Music Fridays" data={data} />
        <SLine />
        <MainComp title="Celebrating Aus Music Month" data={data2} />
        <SLine />
        <Songs />
        <Explore />        
      </div>  
    </>
  )
}

export default App;
