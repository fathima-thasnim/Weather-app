import hotbg from './assets/hot.jpg'
import coldbg from './assets/cold.jpg'
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
            <img src="https://images.app.goo.gl/PJYM5xfgcVMq5AnL9" alt="weathericon"/>
            <h3>Cloudy</h3>
          </div>
          <div className="temparature">
            <h1>34°C</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
