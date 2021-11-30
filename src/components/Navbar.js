import React,{useState} from "react";
import {NavbarData} from "./NavbarData";
import {Link} from "react-router-dom";
import styles from "./Navbar.css";
import SocialBar from "./SocialBar";
import Modal from "react-modal";
import $ from 'jquery';
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
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideBar from "./SideBar";


class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      isOpen2: false,
      showNav: false
    };
  }
  // componentDidMount() {
  //   $('span').mousemove(function(e){
  //     if($(this).attr('class') == "1"){
  //       var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
  //       var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
  //       $(this).css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
  //     } else if($(this).attr('class') == "2"){
  //       var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
  //       var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
  //       $(this).css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
  //     } else if($(this).attr('class') == "3"){
  //       var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
  //       var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
  //       $(this).css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
  //     } else if($(this).attr('class') == "4"){
  //       var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
  //       var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
  //       $(this).css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
  //     } else if($(this).attr('class') == "5"){
  //       var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
  //       var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
  //       $(this).css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
  //     } else if($(this).attr('class') == "6"){
  //       var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
  //       var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
  //       $(this).css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
  //     } else if($(this).attr('class') == "7"){
  //       var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
  //       var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
  //       $(this).css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
  //     }
  //   })
  // }
  render(){
    return(
      <nav className = "tab">
        <div className = "listClass" id = {this.state.showNav ? "activeDiv" : "hiddenDiv"}>
          <button className = "navButt" id = {this.state.showNav ? "butA" : "butH"} onClick = {() => this.setState({showNav: !this.state.showNav})}><FontAwesomeIcon className = "fas fa-bars" id = {this.state.showNav ? "barA" : "barH"} icon={faBars} size = "2x"/></button>
          <ul className = "tabs list-unstyled text-center" id = {this.state.showNav ? "active" : "hidden"}>
                <li className = "tab">
                  <Link to = {NavbarData[0].path} className = {NavbarData[0].cName} style = {{textDecoration: "none"}}>
                    <span className="1">{NavbarData[0].title}</span>
                  </Link>
                </li>
                <li className = "tab">
                  <Link to = {NavbarData[1].path} className = {NavbarData[1].cName} style = {{textDecoration: "none"}}>
                    <span className="2"><a onClick = {() => this.setState({isOpen2: !this.state.isOpen2})}>{NavbarData[1].title}</a></span>
                  </Link>
                </li>
                <li className = "tab">
                  <Link to = {NavbarData[2].path} className = {NavbarData[2].cName} style = {{textDecoration: "none"}}>
                    <span className="3">{NavbarData[2].title}</span>
                  </Link>
                </li>
                <li className = "tab">
                  <Link to = {NavbarData[3].path} className = {NavbarData[3].cName} style = {{textDecoration: "none"}}>
                    <span className="4">{NavbarData[3].title}</span>
                  </Link>
                </li>
                <li className = "tab">
                  <Link to = {NavbarData[4].path} className = {NavbarData[4].cName} style = {{textDecoration: "none"}}>
                    <span className="5"><a onClick = {() => this.setState({ isOpen: !this.state.isOpen})}>{NavbarData[4].title}</a></span>
                  </Link>
                </li>
                <SocialBar/>
          </ul>
          </div>
      </nav>
  );
}
}

export default Navbar;
