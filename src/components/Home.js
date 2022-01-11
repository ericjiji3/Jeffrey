import React, {useState} from "react";
import Slots from "./Slots";
import {SlideData} from "./SlideData";
import AlbumPic from "./AlbumPic";
import Press from "./Press";
import Navbar from "./Navbar";
import styles from "./Home.css";

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
        <Slots slides={SlideData}/>
        
    </div>
    )
  }
}

export default Home;
