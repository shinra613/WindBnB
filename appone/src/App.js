import React, {Component} from 'react'
import CardGenerator from './cards';
import Postdata from './stays.json';
import SearchIcon from '@material-ui/icons/Search';
import './App.css';


const Pageloader = () => {
  let menu = document.getElementsByClassName('ExtendedMenu');
  let body = document.getElementsByTagName('BODY');
  if (menu[0].style.display != 'none') {
    menu[0].style.display = 'none';
    body[0].style.overflow= 'visible';
  } else { 
    menu[0].style.display = 'flex';
    body[0].style.overflow= 'hidden';
  }
 

  console.log("working");
}


function App() {

  

  return (
    <div className="App">
      <div className='ExtendedMenu'>
        <div className='MenuContainer'>
          <div className='menubackground'>
          <div>
            <div className='LocationField'>
              <h1>LOCATION</h1>
              <p>Helsinki, Finland</p>
            </div>
          </div>
          <div>
          <div className='GuestField'>
              <h1>GUESTS</h1>
              <p>Add guests</p>
            </div>
          </div>
          <div>
            
            <div className='searchButton' onClick={Pageloader}>
            <SearchIcon/>
              <p>Search</p>
            </div>
          </div>
        </div>
          

        </div>

        
        
        
       <div className='shadowGen' onClick={Pageloader}>

        </div>
        
      

      </div>
      <div className='header'>
        <div className='headerOne'><img src='../img/logo.png'></img></div>
        <div className='headerTwo' onClick={Pageloader}>
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
