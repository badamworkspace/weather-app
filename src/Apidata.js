import React,{useState} from 'react';
import axios from "axios";
import Display from "./Display";

let Apidata=()=>{
    let [city,setCity]=useState('London')
    let [inCity,setInCity]=useState('')
    let [temp,setTemp]=useState('')
    let [country,setCountry]=useState('')
    let [condition,setCondition]=useState('')
    let [flag,setFlag]=useState('false')
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
          setInCity(response.data.location.name)
          setTemp(response.data.current.temp_c);
          setCountry(response.data.location.country);
          setCondition(response.data.current.condition.text);
          setFlag("true")
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
  {flag==='true'? (
    <div className="card-group">
        <Display name="City" value={inCity} />
        <Display name="Country" value={country} />
        <Display name="Condition" value={condition} />
        <Display name="Temperature" value={temp} />
    </div>
    ):null  }
    </>
)
}
export default Apidata;