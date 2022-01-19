import React from 'react'
import { useState} from 'react';
import "./NasaImg.css";
export default function NasaImg(props) {
  const photoData = props.photoData;
  const [isLiked, setIsLiked ] = useState(false); 
  
  const onLike = () => {
      if(isLiked === true)  {
         setIsLiked(false)
      }
      else setIsLiked(true);
}

   if(photoData.media_type === "image")
   return (
      <div className = "cardContainer">
         {photoData.media_type === "image" ? <img class = "picFrame" src = {photoData.hdurl} alt = "Space" /> 
            : (<iframe  src = {photoData.hdurl} title = "Nasa Picture" />) }
         <h2 className = "titleText" > {photoData.title} | {photoData.date} </h2>
         <div> 
         <button className = "glow-on-hover" onClick = {onLike}  >{isLiked? "Unlike": "Like"} </button>
         
         </div> 
      </div>
     
   )

   else return null;
}
