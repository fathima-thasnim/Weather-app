import hotbg from './assets/hot.jpg'
import coldbg from './assets/cold.jpg'
// import weathericon from './assets/weathericon'
function App() {
  return (
    <div className="app" style= {{ backgroundImage: `url(${coldbg})`}}>
      <div className="overlay">
        <div className='container'>
          <div className='section section__inputs'>
            <input type="text" name="city" placeholder='Enter City...'/>
            <button>°F</button>
          </div>
          <div className="section section__temparature"></div>
          <div className="icon">
            <h3>London, GB</h3>
            <img src="https://www.pngall.com/wp-content/uploads/11/Weather-No-Background.png" width="55" height="50" alt="weathericon"/>
            <h3>Cloudy</h3>
          </div>
          <div className="temparature">
            <h1>34°C</h1>
            <h3>what</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
