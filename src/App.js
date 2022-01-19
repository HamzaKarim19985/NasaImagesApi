
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NasaImg from './components/NasaImg';
const apiKey = process.env.REACT_APP_NASA_KEY;

function App() {
const currentDate = new Date("1970-01-01");
const [photoData, setPhotoData] = useState(null);
const [allPhoto, setAllPhoto] = useState(null);
const [startDate, setstartDate] = useState(currentDate);

const filterDate = () =>{
  const filteredDates =  allPhoto.filter(  (photoObj) =>{
      var photoDate = new Date(photoObj.date);
      
      if(photoDate > startDate){
        return photoObj;
      } } 
      )   
      setPhotoData(filteredDates);
}

const dateChange = (event) =>{
  const newDate = new Date(event.target.value);
  setstartDate(newDate);
}
 
useEffect(() => {

    const fetchData = async () => {
       const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=15`);

         const data = await res.json();
         setPhotoData(data);
         setAllPhoto(data);
    }  
    fetchData();
}, [])

if(!photoData)
  return (
    <div className="App"> 
     <h1>Photos Loading .....</h1>
     <div className = "loadingCircle"> </div>
    </div>
  );

  else return (

    <div className="App"> 
      <h1 className = "headerText" >Nasa Pictures</h1>
      <div>
        <input type = "date"  onChange = {dateChange} id="startDate" />   
        <button className = "filterBtn" onClick = {filterDate}>Filter Pictures!</button>
      </div>
      <h2> Pictures After Select Date</h2>
    {photoData.map( (obj, i) => (
        <NasaImg photoData = {obj} key = {i} />
    ))}
    </div>

  )
}


export default App;
