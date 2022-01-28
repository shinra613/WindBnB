import React, { useState } from 'react'
import CardGenerator from './cards';
import Postdata from './stays.json';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './App.css';
import LocationOn from '@material-ui/icons/LocationOn';


const Pageloader = () => {
  let menu = document.getElementsByClassName('ExtendedMenu');
  let body = document.getElementsByTagName('BODY');
  if (menu[0].style.display != 'none') {
    menu[0].style.display = 'none';
    body[0].style.overflow = 'visible';
  } else {
    menu[0].style.display = 'flex';
    body[0].style.overflow = 'hidden';
  }


}

const MenuOptionLoader = () => {
  return (<div></div>)
}



function App() {

  const [location, setLocation] = useState('All');
  const [updatedLocation, setUpdatedLocation] = useState('All');

  const InitiateSearch = () => {

    const currentLocation = document.getElementById('location').innerText;
    const LocationArray = currentLocation.split(',')
    Pageloader();
    setUpdatedLocation(LocationArray[0]);




  }

  const [open, setOpen] = useState(false);
  

  const DivHider = (props) => {

    if (open == false) {

      document.getElementsByClassName(`${props}`)[0].style.display = 'flex';
      setOpen(true);

    } else {

      document.getElementsByClassName(`${props}`)[0].style.display = 'none';
      setOpen(false);

    }

  }

  return (
    <div className="App">
      <div className='ExtendedMenu'>
        <div className='MenuContainer'>
          <div className='menubackground'>
            <div>
              <div className='LocationField' onClick={() => { DivHider("hider");}}>
                <h1>LOCATION</h1>
                <p id='location'>{location}, Finland</p>
              </div>
              <div className='locationOptions hider'>
                <div onClick={() => { DivHider("hider"); setLocation('Helsinki') }}><LocationOnIcon /><p>Helsinki</p></div>
                <div onClick={() => { DivHider("hider"); setLocation('Turku') }}><LocationOnIcon /><p>Turku</p></div>
                <div onClick={() => { DivHider("hider"); setLocation('Vaasa') }}><LocationOnIcon /><p>Vaasa</p></div>
                <div onClick={() => { DivHider("hider"); setLocation('Oulu') }}><LocationOnIcon /><p>Oulu</p></div>
                <div onClick={() => { DivHider("hider"); setLocation('All') }}><LocationOnIcon /><p>All Locations</p></div>


              </div>
            </div>
            <div>
              <div className='GuestField' onClick={() => { DivHider("hidertwo");}}>
                <h1>GUESTS</h1>
                <p>Add guests</p>
              </div>
              <div className='guestOptions hidertwo'>
                <div className='guestContainer'>
                  <h1>Adults</h1>
                  <p>Age 18 or above</p>
                  <div>
                    <span> -   </span>
                    <input type="text" value="1" class=""></input>
                    <span>+</span>
                  </div>
                </div >

                <div className='guestContainer'>
                  <h1>Children</h1>
                  <p>Age 2-12</p>
                  <div>
                    <span>-</span>
                    <input type="text" value="1" class=""></input>
                    <span>+</span>
                  </div>

                </div>



              </div>
            </div>
            <div>

              <div className='searchButton' onClick={InitiateSearch}>
                <SearchIcon />
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
          <span className='headSpanOne'>{updatedLocation}, Finland</span>
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


            if (updatedLocation == "All") {
              return (<CardGenerator
                image={i.photo}
                type={i.type}
                beds={i.beds}
                rating={i.rating}
                title={i.title}
              />);

            }
            else if (i.city == updatedLocation) {

              console.log(location);
              return (<CardGenerator
                image={i.photo}
                type={i.type}
                beds={i.beds}
                rating={i.rating}
                title={i.title}
              />);

            }

          })}


        </div>

      </div>


    </div>
  );
}


export default App;
