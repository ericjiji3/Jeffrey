import React, {useState} from "react";
import Navbar from "../components/Navbar.js";
import styles from "./About.css";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faItunesNote,
  faAmazon,
  faGooglePlay,
  faYoutube,
  faDeezer
} from "@fortawesome/free-brands-svg-icons";
import headshot from "../components/pics/headshot.jfif";

class About extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render(){
    return(
    <div>
      <div className = "row justify-content-center" style={{marginLeft: "0vw", marginRight: "0vw"}}>
          <Navbar/>
        </div>
      <div className = "row mb-5 justify-content-center">
        <div className = "col-md-3">
          <img className = "about" src = {headshot}></img>
        </div>
        <div className = "col-md-5">
          <div className = "text">
            <span>Hello, my name is Jeffrey.</span>
            <br/><br/>
            <span>I am a recent graduate from the University of Texas at Austin.</span>
            <br/><br/>
            <span>While developing my business acumen under the McCombs School of Business, I was also a student of comedy. In my free time, I was practicing improv, live sketches, and recorded skits. Comedy was the primary vehicle in which I have developed my skills as a writer.</span>
            <br/><br/>
            <span>Since graduating, I have headlined two sold-out (200+) stand-up comedy shows in Austin and Houston. These shows have sharpened my creative & managerial skills for a creative advertising career.</span>
            <br/><br/>
            <span>Please view my resume for more information.</span>
          </div><br/><br/>
          <button className = "but" type = "button" onClick = {() => this.setState({isOpen: !this.state.isOpen})}>RESUME</button>
        </div>
        <Modal className = "aboutPop" overlayClassName = "aboutOverlay" isOpen = {this.state.isOpen} onRequestClose = {() => this.setState({isOpen: !this.state.isOpen})}>
          <div className = "bold row pt-4 pb-3">
            <h2>LISTEN ON:</h2>
          </div>
          <a className = "l1 row d-block" href = "https://open.spotify.com/album/2fjpmy9hTMQdm7z5AIjfH1?si=kulDq64HSBGRGEx5lq281w&nd=1">
              <FontAwesomeIcon icon={faSpotify} size = "4x"/>
              <h3 className = "t1 d-inline">SPOTIFY</h3>
          </a>
          <a className = "l2 row d-block" href = "https://music.apple.com/us/album/chroma-ep/1566164837?ls=1&app=music&at=11lEW&ct=xz1s2y">
            <FontAwesomeIcon icon={faApple} size = "4x"/>
            <h3 className = "t2 d-inline">APPLE</h3>
          </a>
          <a className = "l3 row d-block" href = "https://tidal.com/browse/album/183073999">
            <FontAwesomeIcon icon={faDeezer} size = "4x"/>
            <h3 className = "t3 d-inline">TIDAL</h3>
          </a>
          <a className = "l4 row d-block" href = "https://music.apple.com/us/album/chroma-ep/1566164837?ls=1&app=music&at=11lEW&ct=xz1s2y">
            <FontAwesomeIcon icon={faItunesNote} size = "4x"/>
            <h3 className = "t4 d-inline">ITUNES</h3>
          </a>
          <a className = "l5 row d-block" href = "https://music.amazon.com/albums/B0947DVT1M?marketplaceId=ATVPDKIKX0DER&tag=smarturl-pivot-20&musicTerritory=US&">
            <FontAwesomeIcon icon={faAmazon} size = "4x"/>
            <h3 className = "t5 d-inline">AMAZON</h3>
          </a>
          <a className = "l6 row d-block mb-3" href = "https://open.spotify.com/artist/6dZMYil8Wj3zvMFS5hoA8U">
            <FontAwesomeIcon icon={faYoutube} size = "4x"/>
            <h3 className = "t6 d-inline">YOUTUBE MUSIC</h3>
          </a>
        </Modal>
      </div>
    </div>
    )
  }
}

export default About;
