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
import face1 from "./pics/lottery_pics/face1.png";
import face2 from "./pics/lottery_pics/face2.png";
import face3 from "./pics/lottery_pics/face3.png";
import star from "./pics/stars.png";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";
import {TiArrowLeftOutline, TiArrowRightOutline} from "react-icons/ti";
import styles from "./Slots.css";
import $ from 'jquery';

function Slots(props){
    const [current1, setCurrent1] = useState(0);
    const [up, setUp] = useState(true);
    const [locked, setLocked] = useState(false);
    var result1 = 1;
    var result2 = 1;
    var result3 = 1;

    function slotResult(rv1, rv2, rv3){
        console.log('result');
        result1 += rv1;
        console.log(result1);
        // console.log($('#slot1').position());
        // console.log($('#slot1 .slider .item.one img').position().left);
        // console.log($('#slot1 .slider .item.two img').position().left);
        // console.log($('#slot1 .slider .item.three img').position().left);
        
    }
    function handleClick(e){
        e.preventDefault();
        let finished = false;
        let randomValue1 = Math.floor(1 + Math.random()* 5);
        let rv1 = randomValue1;
        // console.log(randomValue1);
        let randomValue2 = Math.floor(1 + Math.random()* 5);
        // console.log(randomValue2);
        let rv2 = randomValue2;
        let randomValue3 = Math.floor(1 + Math.random()* 5);
        // console.log(randomValue3);
        let rv3 = randomValue3;
        console.log(rv1, rv2, rv3)
        // result1 += rv1;
        // if(result1 > 3){
        //     result1 -= 3;
        // }
        // result2 += rv2;
        // if(result2 > 3){
        //     result2 -= 3;
        // }
        // result3 += rv3;
        // if(result3 > 3){
        //     result3 -= 3;
        // }
        
        // console.log(result1, result2, result3);

        $(".lever").css('pointer-events','none');

        if(up){
            $(".lever-up").attr('class', 'lever-down');
            $(".lever-down").css('pointer-events', 'none');
            setUp(false)
        } else{
            console.log($('#slot1 .slider').find(">:first-child"));
            console.log($('#slot2 .slider').find(">:first-child"));
            console.log($('#slot3 .slider').find(">:first-child"));
            $(".lever-down").attr('class', 'lever-up');
            setUp(true)
        }

        $(".lever").css('pointer-events','auto');

        var interval1 = window.setInterval(function(){
            $('#slot1 .slider').css('transform','translate(-33%)');
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
                    
                    if(rv1 == rv2 == rv3){
                        console.log('match');
                    }
                    setUp(true)
                }
                
                window.clearInterval(interval1);
            }
        },350);
        console.log('interval1 ' + interval1);

        var interval2 = window.setInterval(function(){
            $('#slot2 .slider').css('transform','translate(-33%)');
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
                    
                    if(rv1 == rv2 == rv3){
                        console.log('match');
                    }
                    setUp(true)
                }
                window.clearInterval(interval2);
            }
        },350);
        console.log('interval2 ' + interval2);

        var interval3 = window.setInterval(function(){
            $('#slot3 .slider').css('transform','translate(-33%)');
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
                    
                    if(rv1 == rv2 == rv3){
                        console.log('match');
                    } 
                    setUp(true)
                }
                window.clearInterval(interval3);
            }
        },350);
        console.log('interval3 ' + interval3);
        // if (finished == true){
        //     console.log('finish');
        //     finished = false;
        // }
    }
  return(
    <div className="container slot-container">
        <div className="slots-header-container row mx-auto">
            <div className="slot-header">
                <img className="star" src={star}></img>
                <img className="star" src={star}></img>
                <img className="star" src={star}></img>
                <img className="star" src={star}></img>
                <img className="star" src={star}></img>
            </div>
        </div>
        <div className="slots row mx-auto">
            <div className="col" id="slot1" data-interval="false" data-ride="carousel">
                <div class="slider">
                    <div className =  "item one">
                        <img src = {face1} alt = "errror" className = "f1 d-block w-50"></img>
                    </div>
                    <div className =  "item two">
                        <img src = {face2} alt = "errror" className = "f2 d-block w-50"></img>
                    </div>
                    <div className =  "item three">
                        <img src = {face3} alt = "errror" className = "f3 d-block w-50"></img>
                    </div>
                </div>
            </div>  

            <div className="col" id="slot2" data-interval="false" data-ride="carousel">
                <div class="slider">
                <div className =  "item one">
                        <img src = {face1} alt = "errror" className = "f1 d-block w-50"></img>
                    </div>
                    <div className =  "item two">
                        <img src = {face2} alt = "errror" className = "f2 d-block w-50"></img>
                    </div>
                    <div className =  "item three">
                        <img src = {face3} alt = "errror" className = "f3 d-block w-50"></img>
                    </div>
                </div>
            </div>  

            <div className="col" id="slot3" data-interval="false" data-ride="carousel">
                <div class="slider">
                <div className =  "item one">
                        <img src = {face1} alt = "errror" className = "f1 d-block w-50"></img>
                    </div>
                    <div className =  "item two">
                        <img src = {face2} alt = "errror" className = "f2 d-block w-50"></img>
                    </div>
                    <div className =  "item three">
                        <img src = {face3} alt = "errror" className = "f3 d-block w-50"></img>
                    </div>

                </div>
            </div>  
        </div>
        <div className="slots-result row justify-content-center">
            <div className="custom-button" onClick={handleClick}>
                
            </div>
        </div>
    </div>
    
  )
}

export default Slots;
