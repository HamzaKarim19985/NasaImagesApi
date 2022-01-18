import React, { Component } from 'react'
import axios from "axios";


export default class Weather extends Component {
   constructor() {
      super();
      this.state = {
         stateVariable1: 0
      }

   }
  /* componentDidMount = () => {
      axios.get("/endpoint/path/path2").then( function(response) {
            console.log(response.data);
            console.log("Inside compoenentdidMount in Frontend");
      })
   }
   */
   render() {
      return (
         <div>
            <h1>Headinf of weather Class</h1>
         </div>
      )
   }
}
