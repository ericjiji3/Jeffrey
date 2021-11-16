import React from "react"
import Navbar from "../components/Navbar.js";
import styles from "./Gallery.css";
import trailer from "../components/pics/trailer.MOV";

function Gallery(){
  return(
    <div>
        <div className = "row justify-content-center" style={{marginLeft: "0vw", marginRight: "0vw"}}>
          <Navbar/>
        </div>
        <div className = "row justify-content-center">
            <h2>Gallery</h2>
        </div>
    </div>
  )
}

export default Gallery;
