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
        </div>
      </div>
    </div>
  );
}

export default App;
