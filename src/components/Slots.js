import React, { useEffect, useState } from "react";
import {SlideData} from "./SlideData";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";
import {TiArrowLeftOutline, TiArrowRightOutline} from "react-icons/ti";
import styles from "./Slots.css";
import $ from 'jquery';

function Slots(props){
    const [current1, setCurrent1] = useState(0);
    const [current2, setCurrent2] = useState(0);
    const [current3, setCurrent3] = useState(0);
    function handleClick(e){
        e.preventDefault();
        let randomValue1 = Math.floor(Math.random()* props.slides.length);
        let randomValue2 = Math.floor(Math.random()* props.slides.length);
        let randomValue3 = Math.floor(Math.random()* props.slides.length);
        setCurrent1(randomValue1)
        setCurrent2(randomValue2)
        setCurrent3(randomValue3)
        
    }
  return(
    <div class="container">
    <div className = "slots row justify-content-center">
            <div id="slot1" data-interval="false" data-ride="carousel">
                {SlideData.map((slide, index) => {
                return(
                    <div className = {index === current1 ? "item active" : "item"} key = {index}>
                        <img src = {slide.image} alt = "errror" className = "d-block w-100"></img>
                    </div>   
                )
                })}
        </div>  
        <div id="slot2" data-interval="false" data-ride="carousel">
                {SlideData.map((slide, index) => {
                return(
                    <div className = {index === current2 ? "item active" : "item"} key = {index}>
                        <img src = {slide.image} alt = "errror" className = "d-block w-100"></img>
                    </div>   
                )
                })}
        </div> 
        <div id="slot3" data-interval="false" data-ride="carousel">
                {SlideData.map((slide, index) => {
                return(
                    <div className = {index === current3 ? "item active" : "item"} key = {index}>
                        <img src = {slide.image} alt = "errror" className = "d-block w-100"></img>
                    </div>   
                )
                })}
        </div>
        </div>
      <a href="#" class="btn" onClick={handleClick}>Next</a> 
    </div>
    
  )
}

export default Slots;
