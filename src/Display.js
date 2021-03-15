import React from 'react';

let Display=(props)=>{
    
    if (props.name==='Temperature') {
       return( 
        <div className="card w-50 bg-light">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.value}&deg;C</p>
            </div>
        </div>)}
    else{
        return(
         <div className="card w-50 bg-light">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.value}</p>
            </div>
        </div>
            )
        }
    }
export default Display;