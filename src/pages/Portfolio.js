import React from "react";
import Navbar from "../components/Navbar.js";
import {Link} from "react-router-dom";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import styles from "./Portfolio.css";
import masterclass from "../components/pics/writings/Masterclass2.pdf";
import killLogo from "../components/pics/writings/kill_logo.jpeg";
import kill from "../components/pics/writings/kill.pdf";
import businessLogo from "../components/pics/writings/business_logo.jpg";
import business from "../components/pics/writings/business.pdf";
import treatmentLogo from "../components/pics/writings/treatment_logo.png";
import treatment from "../components/pics/writings/treatment.pdf";
import masterclassLogo from "../components/pics/writings/master_class_logo.jpg";
import championshipLogo from "../components/pics/writings/championship_logo.jpg";
import championship from "../components/pics/writings/championship.pdf";
import homeLogo from "../components/pics/writings/home_logo.jpg";
import home from "../components/pics/writings/home.pdf";
import kidLogo from "../components/pics/writings/new_kid_logo.png";
import kid from "../components/pics/writings/new_kid.pdf";
import tinderLogo from "../components/pics/writings/tinder.jpg";

function Portfolio(){
  return(
    <div className="container">
        <div className = "row justify-content-center" style={{marginLeft: "0vw", marginRight: "0vw"}}>
            <Navbar/>
        </div>
        <div className = "sketch-writing row justify-content-center">
          <h2 className = "video-header my-5">Sketch-Writing</h2>
          <div className="col-md-3 mb-5">
          <Card className="card">
            <CardImg className="card-img" top width="100%" src={championshipLogo} alt="Card image cap" />
            <CardBody className="text-center">
              <CardTitle className="title">Championship Game</CardTitle>
              <Button className="button" href = {championship} target="_blank">READ</Button>
            </CardBody>
          </Card> 
          </div>
          <div className="col-md-3 mb-5">
          <Card className="card">
            <CardImg className="card-img" top width="100%" src={homeLogo} alt="Card image cap" />
            <CardBody className="text-center">
              <CardTitle className="title">Just Hold on We're Going Home</CardTitle>
              <Button className="button" href = {home} target="_blank">READ</Button>
            </CardBody>
          </Card> 
          </div>
          <div className="col-md-3 mb-5">
          <Card className="card">
            <CardImg className="card-img" top width="100%" src={kidLogo} alt="Card image cap" />
            <CardBody className="text-center">
              <CardTitle className="title">The New Kid</CardTitle>
              <Button className="button" href = {kid} target="_blank">READ</Button>
            </CardBody>
          </Card> 
          </div>
        </div>
        <div className = "screenplay row justify-content-center">
            <h2 className = "video-header my-5">Advertising</h2>
            <div className="col-md-3 mb-5">
          <Card className="card">
            <CardImg className="card-img" top width="100%" src={tinderLogo} alt="Card image cap" />
            <CardBody className="text-center">
              <CardTitle className="title">Netflix</CardTitle>
              <Link to = "/tinder" className = 'tinder' style = {{textDecoration: "none"}}>
                <Button className="button">READ</Button>
              </Link>
            </CardBody>
          </Card> 
          </div>
        </div>
    </div>
  )
}

export default Portfolio;
