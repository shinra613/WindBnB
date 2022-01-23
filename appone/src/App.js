import React, {Component} from 'react'
import CardGenerator from './cards';
import Postdata from './stays.json';

import './App.css';



function App() {

  

  return (
    <div className="App">
      <div className='header'>
        <div className='headerOne'><img src='../img/logo.png'></img></div>
        <div className='headerTwo'>
          <span className='headSpanOne'>Helsinki, Finland</span>
          <span className='headSpanTwo'>add guest</span>
          <img src='../img/search.svg'></img>
          
        </div>
      </div>
      <div className='data-container'>
        <diV className="card-header">
          <span className='CardSpanOne'>Stays in Finland</span>
          <span className='CardSpanTwo'> 12+ stays</span>
        </diV>
        <div className="card-content">

          {Postdata.map((i) => { 
            return (<CardGenerator
              image={i.photo}
              type={i.type}
              beds={i.beds}
              rating={i.rating}
              title={i.title}
            />);
          })}
       
          
        </div>

      </div>
    
      
    </div>
  );
}

export default App;
