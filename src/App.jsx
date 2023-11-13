import SLine from './components/SLine'
import Main from './components/Main'
import Albums from './components/Albums'
import './App.css'
import Artist from './components/Artists'
import Songs from './components/Songs'
import Explore from './components/Explore'

function App() {

  return (
    <>
      <div className="App">
        <h2>Browse</h2> 
        <SLine />
        <Main />
        <Albums />
        <Artist />
        <Songs />
        <Explore />
        
      </div>  
    </>
  )
}

export default App;
