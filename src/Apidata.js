import React,{useState} from 'react';
import axios from "axios";

let Apidata=()=>{
    let [city,setCity]=useState('London')
    let [data,setData]=useState('')
    let [country,setCountry]=useState('UK')
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {q: city, days: '3'},
        headers: {
          'x-rapidapi-key': '98bf81c6a5msh1a5f65056b54193p1c5d66jsnb78ada0e1c26',
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      function getData(){
      axios.request(options).then(function (response) {
          console.log(response.data);
          setData(response.data.current.temp_c);
          setCountry(response.data.location.country);
          console.log(country)
          })   
      .catch(function (error) {
          console.error(error);
      });
    }


return(
    <>
    <input type="text" placeholder="Enter city" onChange={(e)=>setCity(e.target.value)} />
    <br></br><br></br>
    <button className="btn-dark" onClick={getData}>Sumbit</button><br></br><br></br>
    <div className="card-group">
    <div className="card w-50 bg-light">
        <div className="card-body">
            <h5 className="card-title">City</h5>
            <p className="card-text">{city}</p>
        </div>
    </div>
    <div className="card w-50 bg-light">
        <div className="card-body">
            <h5 className="card-title">Country</h5>
            <p className="card-text">{country}</p>
        </div>
    </div>

    <div className="card w-50 bg-light">
        <div className="card-body">
            <h5 className="card-title">Temperature</h5>
            <p className="card-text">{data} C</p>
        </div>
    </div>
    </div>
    </>
)
}

export default Apidata;