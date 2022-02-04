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

 
  const [quantityOne, setQuantityOne] = useState(0);
  const [quantityTwo, setQuantityTwo] = useState(0);
  const [totalquantity, setTotalquantity] = useState(0);
  const [cards, setCards] = useState(0);
  

  const InitiateSearch = () => {

    const currentLocation = document.getElementById('location').innerText;
    const LocationArray = currentLocation.split(',')
    Pageloader();
    setUpdatedLocation(LocationArray[0]);

    setCards(count-2);


  }

  const [open, setOpen] = useState(false);


  const Totalquantity = () => { 
    let total = quantityOne + quantityTwo; 

    if (total <= 0) {
      
      return (<span>Add guests</span>);
    } else {
      setTotalquantity(total);
      return (<span>{total} Guests</span>);
     }
    
  }
 

  const quantityGenOne = (checker) => {
  
    let numberOne = quantityOne;
         
      if (!checker && numberOne > 0) {
        setQuantityOne(numberOne - 1); 
      } else {    
        setQuantityOne(numberOne+1); 
      }
  }

  const quantityGenTwo = (checker) => {
    let numberTwo = quantityTwo;

    if (!checker && numberTwo > 0) {
      setQuantityTwo(numberTwo-1);           
    } else {       
      setQuantityTwo(numberTwo+1); 
    }
  }
  

  const DivHider = (props) => {

    if (open == false) {

      document.getElementsByClassName(`${props}`)[0].style.display = 'flex';
      setOpen(true);

    } else {

      document.getElementsByClassName(`${props}`)[0].style.display = 'none';
      setOpen(false);

    }

  }

  let count = 0;

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
                <p><Totalquantity /></p>
              </div>
              <div className='guestOptions hidertwo'>
                <div className='guestContainer'>
                  <h1>Adults</h1>
                  <p>Age 18 or above</p>
                  <div>
                  <span onClick={() => { quantityGenOne(false) }}>-</span>
                    <input type="text" value={quantityOne} class="quantityNumone"></input>
                    <span onClick={() => { quantityGenOne(true) }}>+</span>
                  </div>
                </div >

                <div className='guestContainer'>
                  <h1>Children</h1>
                  <p>Age 2-12</p>
                  <div>
                  <span onClick={() => { quantityGenTwo(false,2) }}>-</span>
                    <input type="text" value={quantityTwo} class="quantityNumtwo"></input>
                    <span onClick={() => { quantityGenTwo(true,2) }}>+</span>
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
          <span className='headSpanTwo'><Totalquantity /></span>
          <img src='../img/search.svg'></img>

        </div>
      </div>
      <div className='data-container'>
        <diV className="card-header">
          <span className='CardSpanOne'>Stays in Finland</span>
          <span className='CardSpanTwo'> {cards}+ stays</span>
        </diV>
        <div className="card-content">

          {Postdata.map((i) => {

            
            if (updatedLocation == "All" && i.beds >= totalquantity) {
             

              count+=1;
              return (<CardGenerator
                image={i.photo}
                type={i.type}
                beds={i.beds}
                rating={i.rating}
                title={i.title}
              />);

            }
            else if (i.city == updatedLocation && i.beds >=totalquantity) {

              count+=1;
              return (<CardGenerator
                image={i.photo}
                type={i.type}
                beds={i.beds}
                rating={i.rating}
                title={i.title}
              />
               
              );

            }

          })}


        </div>

      </div>


    </div>
  );
}


export default App;
