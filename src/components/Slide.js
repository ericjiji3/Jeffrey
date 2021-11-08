import React, { useEffect, useState } from "react";
import {SlideData} from "./SlideData";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";
import {TiArrowLeftOutline, TiArrowRightOutline} from "react-icons/ti";
import styles from "./Slide.css";
import $ from 'jquery';

function Slide(props){
  const [current1, setCurrent1] = useState(0);
  const [current2, setCurrent2] = useState(0);
  const [current3, setCurrent3] = useState(0);
  const [active, setActive] = useState(false);
  const nextSlide = () => {
    setActive(!active)
    if(active){
      let randomValue1 = Math.floor(Math.random()* props.slides.length);
      let randomValue2 = Math.floor(Math.random()* props.slides.length);
      let randomValue3 = Math.floor(Math.random()* props.slides.length);
      console.log(randomValue1, randomValue2, randomValue3);
      setCurrent1(randomValue1);
      setCurrent2(randomValue2);
      setCurrent3(randomValue3);
    }
    // setCurrent(current === props.slides.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    // setCurrent1(current1 === 0 ? props.slides.length - 1 : current - 1)
  }


  if(!Array.isArray(props.slides) || props.slides.length <= 0){
    return null;
  }
  return(
    <div className = "slides">
       <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
          <TiArrowLeftOutline className = "carousel-control-next-icon  rounded-circle" onClick = {prevSlide}/>
        </a>
      {/* <TiArrowLeftOutline className = "leftArrow" onClick = {prevSlide}/>
      <TiArrowRightOutline className = "rightArrow" onClick = {nextSlide}/> */}
      <div className={active ? "slot1 active":"slot1"}>
        {SlideData.map((slide, index) => {
          return(
            <div className = {index === current1 ? 'slot active' : 'slot inactive'} key = {index}>
              {index === current1 && (<img src = {slide.image} alt = "errror" className = {slide.cName}></img>)}
            </div>
          )
        })}
      </div>  
      <div className={active ? "slot2 active":"slot2"}>
        {SlideData.map((slide, index) => {
          return(
              <div className = {index === current2 ? 'slot active' : 'slot inactive'} key = {index}>
              {index === current2 && (<img src = {slide.image} alt = "errror" className = {slide.cName}></img>)}
            </div>
            
          )
        })}
      </div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="..." alt="First slide"></img>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Second slide"></img>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Third slide"></img>
            </div>
          </div>
      </div>  
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true">PREVIOUS</span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true">NEXTY</span>
            <span class="sr-only">Next</span>
          </a>
    </div>
    
  )
}

export default Slide;
