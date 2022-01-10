import React from "react"
import Navbar from "../components/Navbar.js";
import styles from "./Videos.css";

function Videos(){
  return(
    <div className="container">
      <div className = "row justify-content-center" style={{marginLeft: "0vw", marginRight: "0vw"}}>
          <Navbar/>
      </div>
      <div className = "row justify-content-center">
        <div className="stand-up text-center">
          <h1>Stand Up</h1>
          <iframe className="vid" src="https://www.youtube.com/embed/RSrzuUizRSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="skits text-center">
          <h1>Skits</h1>
          <iframe className="vid" src="https://www.youtube.com/embed/RSrzuUizRSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="sketches text-center">
          <h1>Stand Up</h1>
          <iframe className="vid" src="https://www.youtube.com/embed/RSrzuUizRSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      
      </div>
    </div>
  )
}

export default Videos;
