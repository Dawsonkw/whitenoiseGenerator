import './App.css'
import ApiCaller from './api/ApiCaller'
import SoundHolder from './components/SoundHolder'

function App() {


  return (
    <div >
      <ApiCaller />
      <h1>Dungeons and Dragons Ambient Noise App</h1>
      <SoundHolder />
    </div>
  )
}

export default App


