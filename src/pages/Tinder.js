import React from "react";
import Navbar from "../components/Navbar.js";
import tinderVid from "../components/pics/writings/tinderVideo.mp4";
import tinderP from "../components/pics/writings/tinder1.jpg";
import tinderPi from "../components/pics/writings/tinder2.jpg";
import styles from "./Tinder.css";

function Tinder(){
  return(
    <div className="container tinder">
        <div className = "row justify-content-center" style={{marginLeft: "0vw", marginRight: "0vw"}}>
          <Navbar/>
        </div>
        <div className = "row justify-content-center mb-5">
            <div className="col-md-5">
                <video src={tinderVid} className="w-100" controls></video>
            </div>
            <div className="col-md-5">
                <span>The challenge of this case was to increase excitement for non-English content amongst UK audiences (ages 18-34). </span>
            </div>
        </div>
        <div className = "row justify-content-center mb-5">
            <div className="col-md-5">
                <span>By using emotion, we aim to drive excitement. The best experiences are often unknown, until they are shared with someone.</span>
            </div>
            <div className="col-md-5">
                <img src={tinderP} className="w-100"></img>
            </div>
        </div>
        <div className = "row justify-content-center mb-5">
            <div className="col-md-5">
                <img src={tinderPi} className="w-100"></img>
            </div>
            <div className="col-md-5">
                <span>By teaming up with Tinder, Netflix can drive organic interest in international content. Befriending a foreigner cultivates a true appreciation for their culture - and other cultures in general. Language and distance can be obstacles in what we experience, but love and friendship knows no boundaries.</span>
            </div>
        </div>
    </div>
  )
}

export default Tinder;
