import React from "react"
import Navbar from "../components/Navbar.js";
import lilborshun from "../components/pics/sketches/lil_borshun.mp4";
// import promposal from "../components/pics/sketches/promposal.mp4";
import selfHelp from "../components/pics/short_skits/self_help.mov";
import quarantine from "../components/pics/short_skits/quarantine.mp4";
import interview from "../components/pics/short_skits/interview_with_diana.mp4";
import styles from "./Videos.css";

function Videos(){
  return(
    <div className="container">
      <div className = "row justify-content-center" style={{marginLeft: "0vw", marginRight: "0vw"}}>
          <Navbar/>
      </div>
      <div className = "row justify-content-center">
      <div className="skits text-center">
          <h1 className="video-subject-header text-left ml-5">Short Skits</h1>
          <h2 className="video-header">Love yourself (2018)</h2>
          <video src={selfHelp} className="vid mb-4" controls></video>
          <h2 className="video-header">Quarantine (2020)</h2>
          <video src={quarantine} className="vid mb-4" controls></video>
          <h2 className="video-header">Interview (2021)</h2>
          <video src={interview} className="vid mb-4" controls></video>
        </div>
        <div className="stand-up text-center">
          <h1 className="video-subject-header text-left ml-5">Sketches</h1>
          <h2 className="video-header">FHS Promposal (2017)</h2>
          <iframe className="vid" width = "500" src="https://www.youtube.com/embed/_QDshH1MTd4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h2 className="video-header">Lil Borshun (2018)</h2>
          <video src={lilborshun} className="vid" controls></video>
        </div>
      
      </div>
    </div>
  )
}

export default Videos;
