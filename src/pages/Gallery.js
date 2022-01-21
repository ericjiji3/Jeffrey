import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js";
import ProgressBar from 'react-bootstrap/ProgressBar';
import $ from 'jquery';
import Carousel from 'react-bootstrap/Carousel';
import HorizontalScroll from "react-scroll-horizontal";
import pic1 from "../components/pics/down_worse/1.JPG";
import pic2 from "../components/pics/down_worse/2.JPG";
import pic3 from "../components/pics/down_worse/3.JPG";
import pic4 from "../components/pics/down_worse/4.JPG";
import pic5 from "../components/pics/down_worse/5.JPG";
import pic6 from "../components/pics/down_worse/6.JPG";
import pic7 from "../components/pics/down_worse/7.JPG";
import pic8 from "../components/pics/down_worse/8.JPG";
import pic9 from "../components/pics/down_worse/9.JPG";
import pic10 from "../components/pics/down_worse/10.JPG";
import pic11 from "../components/pics/down_worse/11.JPG";
import pic12 from "../components/pics/down_worse/12.JPG";
import pic13 from "../components/pics/down_worse/13.JPG";
import pic14 from "../components/pics/down_worse/14.JPG";
import pic15 from "../components/pics/down_worse/15.JPG";
import pic16 from "../components/pics/down_worse/16.JPG";
import pic17 from "../components/pics/down_worse/17.JPG";
import pic18 from "../components/pics/down_worse/18.JPG";
import pic19 from "../components/pics/down_worse/19.JPG";
import pic20 from "../components/pics/down_worse/20.JPG";
import pic21 from "../components/pics/down_worse/21.JPG";
import pic22 from "../components/pics/down_worse/22.JPG";
import pic23 from "../components/pics/down_worse/23.JPG";
import pic24 from "../components/pics/down_worse/24.JPG";
import pic25 from "../components/pics/down_worse/25.JPG";
import pic26 from "../components/pics/down_worse/26.JPG";
import pic27 from "../components/pics/down_worse/27.JPG";
import pic28 from "../components/pics/down_worse/28.JPG";
import pic29 from "../components/pics/down_worse/29.JPG";
import pic30 from "../components/pics/down_worse/30.JPG";
import pic31 from "../components/pics/down_worse/31.JPG";
import pic32 from "../components/pics/down_worse/32.JPG";
import pic33 from "../components/pics/down_worse/33.JPG";
import pic34 from "../components/pics/down_worse/34.JPG";
import pic35 from "../components/pics/down_worse/35.JPG";
import pic36 from "../components/pics/down_worse/36.JPG";
import pic37 from "../components/pics/down_worse/37.JPG";
import pic38 from "../components/pics/down_worse/38.JPG";

import badp1 from "../components/pics/down_bad/1.JPG";
import badp2 from "../components/pics/down_bad/2.JPG";
import badp3 from "../components/pics/down_bad/3.JPG";
import badp4 from "../components/pics/down_bad/4.JPG";
import badp5 from "../components/pics/down_bad/5.JPG";
import badp6 from "../components/pics/down_bad/6.JPG";
import badp7 from "../components/pics/down_bad/7.JPG";
import badp8 from "../components/pics/down_bad/8.JPG";
import badp9 from "../components/pics/down_bad/9.JPG";
import badp10 from "../components/pics/down_bad/10.JPG";
import badp11 from "../components/pics/down_bad/11.JPG";
import badp12 from "../components/pics/down_bad/12.JPG";
import badp13 from "../components/pics/down_bad/13.JPG";
import badp14 from "../components/pics/down_bad/14.JPG";
import badp15 from "../components/pics/down_bad/15.JPG";
import badp16 from "../components/pics/down_bad/16.JPG";
import badp17 from "../components/pics/down_bad/17.JPG";
import badp18 from "../components/pics/down_bad/18.JPG";
import badp19 from "../components/pics/down_bad/19.JPG";
import styles from "./Gallery.css";

function Gallery(){


  let width = window.innerWidth;
  if (width > 850) {
    
    return(
      <div>
          <div className = "row justify-content-center" style={{marginLeft: "0vw", marginRight: "0vw"}}>
            <Navbar/>
          </div>
          <h1 className="header-down-bad text-center">Down Bad</h1>
          <div className="down-bad">
            <HorizontalScroll className="db-scroll">
              <div className="main bg">
              <img className="db-pic" src={badp1}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp2}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp3}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp4}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp5}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp6}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp7}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp8}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp9}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp10}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp11}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp12}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp13}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp14}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp15}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp16}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp17}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp18}></img>
              </div>
              <div className="main bg">
              <img className="db-pic" src={badp19}></img>
              </div>
            </HorizontalScroll>
          </div>
          
          <h1 className="header-down-worse text-center">Down Worse</h1>
          <div className="down-worse">
          
          <HorizontalScroll className="dw-scroll">
            <div className="main bg">
              <img className="dw-pic" src={pic1}></img>
            </div>
            <div className="main bg2">
              <img className="dw-pic" src={pic2}></img>
            </div>
            <div className="main bg3">
              <img className="dw-pic" src={pic3}></img>
            </div>
            <div className="main bg4">
              <img className="dw-pic" src={pic4}></img>
            </div>
            <div className="main bg5">
              <img className="dw-pic" src={pic5}></img>
            </div>
            <div className="main bg6">
              <img className="dw-pic" src={pic6}></img>
            </div>
            <div className="main bg7">
              <img className="dw-pic" src={pic7}></img>
            </div>
            <div className="main bg8">
              <img className="dw-pic" src={pic8}></img>
            </div>
            <div className="main bg9">
              <img className="dw-pic" src={pic9}></img>
            </div>
            <div className="main bg10">
              <img className="dw-pic" src={pic10}></img>
            </div>
            <div className="main bg11">
              <img className="dw-pic" src={pic11}></img>
            </div>
            <div className="main bg12">
              <img className="dw-pic" src={pic12}></img>
            </div>
            <div className="main bg13">
              <img className="dw-pic" src={pic13}></img>
            </div>
            <div className="main bg14">
              <img className="dw-pic" src={pic14}></img>
            </div>
            <div className="main bg15">
              <img className="dw-pic" src={pic15}></img>
            </div>
            <div className="main bg16">
              <img className="dw-pic" src={pic16}></img>
            </div>
            <div className="main bg17">
              <img className="dw-pic" src={pic17}></img>
            </div>
            <div className="main bg18">
              <img className="dw-pic" src={pic18}></img>
            </div>
            <div className="main bg19">
              <img className="dw-pic" src={pic19}></img>
            </div>
            <div className="main bg20">
              <img className="dw-pic" src={pic20}></img>
            </div>
            <div className="main bg21">
              <img className="dw-pic" src={pic21}></img>
            </div>
            <div className="main bg22">
              <img className="dw-pic" src={pic22}></img>
            </div>
            <div className="main bg23">
              <img className="dw-pic" src={pic23}></img>
            </div>
            <div className="main bg24">
              <img className="dw-pic" src={pic24}></img>
            </div>
            <div className="main bg25">
              <img className="dw-pic" src={pic25}></img>
            </div>
            <div className="main bg26">
              <img className="dw-pic" src={pic26}></img>
            </div>
            <div className="main bg27">
              <img className="dw-pic" src={pic27}></img>
            </div>
            <div className="main bg28">
              <img className="dw-pic" src={pic28}></img>
            </div>
            <div className="main bg29">
              <img className="dw-pic" src={pic29}></img>
            </div>
            <div className="main bg30">
              <img className="dw-pic" src={pic30}></img>
            </div>
            <div className="main bg31">
              <img className="dw-pic" src={pic31}></img>
            </div>
            <div className="main bg32">
              <img className="dw-pic" src={pic32}></img>
            </div>
            <div className="main bg33">
              <img className="dw-pic" src={pic33}></img>
            </div>
            <div className="main bg34">
              <img className="dw-pic" src={pic34}></img>
            </div>
            <div className="main bg35">
              <img className="dw-pic" src={pic35}></img>
            </div>
            <div className="main bg36">
              <img className="dw-pic" src={pic36}></img>
            </div>
            <div className="main bg37">
              <img className="dw-pic" src={pic37}></img>
            </div>
            <div className="main bg38">
              <img className="dw-pic" src={pic38}></img>
            </div>
          </HorizontalScroll>
          </div>
          
          
      </div>
    );
  }else{
        return (
          <div >
            <div className = "row justify-content-center" style={{marginLeft: "0vw", marginRight: "0vw"}}>
              <Navbar/>
            </div>
            <h1 className="header-down-worse text-center">Down Bad</h1>
              <Carousel className="gallery">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp3}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp4}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp5}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp6}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp7}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp8}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp9}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp10}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp11}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp12}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp13}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp14}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp15}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp16}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp17}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp18}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={badp19}
                      alt="First slide"
                    />
                  </Carousel.Item>
              </Carousel>

              <h1 className="header-down-worse text-center">Down Bad</h1>
              <Carousel className="gallery">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic3}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic4}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic5}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic6}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic7}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic8}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic9}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic10}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic11}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic12}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic13}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic14}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic15}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic16}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic17}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic18}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic19}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic20}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic21}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic22}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic23}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic24}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic25}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic26}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic27}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic28}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic29}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic30}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic31}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic32}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic33}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic34}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic35}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic36}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic37}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={pic38}
                      alt="First slide"
                    />
                  </Carousel.Item>

              </Carousel>
            </div>
          
        );
  }
}

export default Gallery;
