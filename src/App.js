import './App.css';
import Apidata from'./Apidata';


function App() {
  return (
    <div className="App">
      <div className="card text-white bg-success">
        <div className="card-header">
        WeatherApp
        </div>
      </div><br></br>
        <Apidata/><br></br>
      <div className="card">
        <div className="card-footer">
        Developed by BADAM BHANUTEJA
        </div>
      </div>
    </div>
  );
}

export default App;
