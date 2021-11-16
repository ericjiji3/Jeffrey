import React, { useEffect, useState } from "react";
import {SlideData} from "./SlideData";
import pic1 from "./pics/lottery_pics/pic1.jpg";
import pic2 from "./pics/lottery_pics/pic2.jpg";
import pic3 from "./pics/lottery_pics/pic3.jpg";
import pic4 from "./pics/lottery_pics/pic4.jpg";
import pic5 from "./pics/lottery_pics/pic5.JPEG";
import pic6 from "./pics/lottery_pics/pic6.JPEG";
import pic7 from "./pics/lottery_pics/pic7.jpg";
import pic8 from "./pics/lottery_pics/pic8.jpg";
import pic9 from "./pics/lottery_pics/pic9.jpg";
import pic10 from "./pics/lottery_pics/pic10.jpg";
import lever from "./pics/leveranimation.png";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";
import {TiArrowLeftOutline, TiArrowRightOutline} from "react-icons/ti";
import styles from "./Slots.css";
import $ from 'jquery';

function Slots(props){
    const [current1, setCurrent1] = useState(0);
    const [up, setUp] = useState(true);
    const [locked, setLocked] = useState(false);
    
    
    function handleClick(e){
        e.preventDefault();
        let randomValue1 = Math.floor(1 + Math.random()* 10);
        let rv1 = randomValue1;
        console.log(randomValue1);
        let randomValue2 = Math.floor(1 + Math.random()* 10);
        console.log(randomValue2);
        let rv2 = randomValue2;
        let randomValue3 = Math.floor(1 + Math.random()* 10);
        console.log(randomValue3);
        let rv3 = randomValue3;
        $(".lever").css('pointer-events','none');

        if(up){
            $(".lever-up").attr('class', 'lever-down');
            $(".lever-down").css('pointer-events', 'none');
            setUp(false)
        } else{
            $(".lever-down").attr('class', 'lever-up');
            setUp(true)
        }

        $(".lever").css('pointer-events','auto');

        var interval1 = window.setInterval(function(){
            if(randomValue1 >= randomValue2 && randomValue1 >= randomValue3){
                console.log('slot1 slowest!')
            }
            $('#slot1 .slider').css('transform','translate(-20%)');
            $('#slot1 .slider').one('transitionend webkitTransitionEnd MSTransitionEnd', function(){
                $(this).append($(this).children().first());
            
                $(this).css('transition', 'none');
                $(this).css('transform', 'translate(0)');
                setTimeout(function(){
                    $(this).css('transition', 'all .3s');
                }.bind($(this)));
        })
            if(!--randomValue1){
                if(rv1 >= rv2 && rv1 >= rv3){
                    $(".lever-down").attr('class', 'lever-up');
                    $(".lever-up").css('pointer-events', 'auto');
                    setUp(true)
                }
                window.clearInterval(interval1);
            }
        },350);

        var interval2 = window.setInterval(function(){
            if(randomValue2 >= randomValue1 && randomValue2 >= randomValue3){
                console.log('slot2 slowest!')
            }
            $('#slot2 .slider').css('transform','translate(-20%)');
            $('#slot2 .slider').one('transitionend webkitTransitionEnd MSTransitionEnd', function(){
                $(this).append($(this).children().first());
            
                $(this).css('transition', 'none');
                $(this).css('transform', 'translate(0)');
                setTimeout(function(){
                    $(this).css('transition', 'all .3s');
                }.bind($(this)));
        })
            if(!--randomValue2){
                if(rv2 >= rv1 && rv2 >= rv3){
                    $(".lever-down").attr('class', 'lever-up');
                    $(".lever-up").css('pointer-events', 'auto');
                    setUp(true)
                }
                window.clearInterval(interval2);
            }
        },350);

        var interval3 = window.setInterval(function(){
            if(randomValue3 >= randomValue2 && randomValue3 >= randomValue1){
                console.log('slot3 slowest!')
            }
            $('#slot3 .slider').css('transform','translate(-20%)');
            $('#slot3 .slider').one('transitionend webkitTransitionEnd MSTransitionEnd', function(){
                $(this).append($(this).children().first());
            
                $(this).css('transition', 'none');
                $(this).css('transform', 'translate(0)');
                setTimeout(function(){
                    $(this).css('transition', 'all .3s');
                }.bind($(this)));
        })
            if(!--randomValue3){
                if(rv3 >= rv2 && rv3 >= rv1){
                    $(".lever-down").attr('class', 'lever-up');
                    $(".lever-up").css('pointer-events', 'auto');
                    setUp(true)
                }
                window.clearInterval(interval3);
            }
        },350);
        console.log('after:' + locked);
    }
  return(
    <div className="container row">
        <div className="row">
        <div className="col" id="slot1" data-interval="false" data-ride="carousel">
            <div class="slider">
                <div className =  "item one">
                    <img src = {pic1} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item two">
                    <img src = {pic2} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item three">
                    <img src = {pic3} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item four">
                    <img src = {pic4} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item five">
                    <img src = {pic5} alt = "errror" className = "d-block w-100"></img>
                </div>
                {/* <div className =  "item six">
                    <img src = {pic6} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item seven">
                    <img src = {pic7} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item eight">
                    <img src = {pic8} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item nine">
                    <img src = {pic9} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item ten">
                    <img src = {pic10} alt = "errror" className = "d-block w-100"></img>
                </div> */}
            </div>
        </div>  

        <div className="col" id="slot2" data-interval="false" data-ride="carousel">
            <div class="slider">
                <div className =  "item one">
                    <img src = {pic2} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item two">
                    <img src = {pic3} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item three">
                    <img src = {pic1} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item four">
                    <img src = {pic2} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item five">
                    <img src = {pic5} alt = "errror" className = "d-block w-100"></img>
                </div>
                {/* <div className =  "item six">
                    <img src = {pic6} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item seven">
                    <img src = {pic7} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item eight">
                    <img src = {pic8} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item nine">
                    <img src = {pic9} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item ten">
                    <img src = {pic10} alt = "errror" className = "d-block w-100"></img>
                </div> */}
            </div>
        </div>  

        <div className="col" id="slot3" data-interval="false" data-ride="carousel">
            <div class="slider">
                <div className =  "item one">
                    <img src = {pic4} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item two">
                    <img src = {pic2} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item three">
                    <img src = {pic5} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item four">
                    <img src = {pic1} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item five">
                    <img src = {pic3} alt = "errror" className = "d-block w-100"></img>
                </div>
                {/* <div className =  "item six">
                    <img src = {pic6} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item seven">
                    <img src = {pic7} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item eight">
                    <img src = {pic8} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item nine">
                    <img src = {pic9} alt = "errror" className = "d-block w-100"></img>
                </div>
                <div className =  "item ten">
                    <img src = {pic10} alt = "errror" className = "d-block w-100"></img>
                </div> */}
            </div>
        </div>  
        </div>
        <div className="row justify-content-center">
        <span className="lever-up" onClick={handleClick}></span>
        </div>
    </div>
    
  )
}

export default Slots;
