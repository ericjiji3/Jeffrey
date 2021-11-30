import React, {useState} from "react";
import Slots from "./Slots";
import {SlideData} from "./SlideData";
import AlbumPic from "./AlbumPic";
import Press from "./Press";
import Navbar from "./Navbar";
import styles from "./Home.css";
import trailer from "./pics/trailer.MOV";
import pic6 from "./pics/pic6.png";
import { Button } from 'reactstrap';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import Contact from "./Contact";

class Home extends React.Component{
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
        
        {/* <div className = "row" style={{marginLeft: "0vw", marginRight: "0vw"}}>
          <div className = "slide">
            <Slide slides = {SlideData}/>
          </div>
        </div> */}
        <div className="row">
        <Slots slides={SlideData}/>
        </div>
        <div>
           <a className = "linkPic" href = "http://hyperurl.co/jordon.CHROMA"><div className= "linkPic-text"> LATEST SOUNDS </div><img src = {pic6} className = "link-picture"></img></a>
        </div>
        <Press/>
    </div>
    )
  }
}

export default Home;
