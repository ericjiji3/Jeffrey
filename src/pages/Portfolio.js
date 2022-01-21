import React from "react";
import Navbar from "../components/Navbar.js";
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

function Portfolio(){
  return(
    <div className="container">
        <div className = "row justify-content-center" style={{marginLeft: "0vw", marginRight: "0vw"}}>
            <Navbar/>
        </div>
        <div className = "row justify-content-center">
          <div className="col-md-3 mb-5">
          <Card className="card">
            <CardImg className="card-img" top width="100%" src={masterclassLogo} alt="Card image cap" />
            <CardBody className="text-center">
              <CardTitle className="title">MasterClass</CardTitle>
              <Button className="button" href = {masterclass} target="_blank">READ</Button>
            </CardBody>
          </Card> 
          </div>
          <div className="col-md-3 mb-5">
          <Card className="card">
            <CardImg className="card-img" top width="100%" src={businessLogo} alt="Card image cap" />
            <CardBody className="text-center">
              <CardTitle className="title">Straight to Business</CardTitle>
              <Button className="button" href = {business} target="_blank">READ</Button>
            </CardBody>
          </Card> 
          </div>
          <div className="col-md-3 mb-5">
          <Card className="card">
            <CardImg className="card-img" top width="100%" src={treatmentLogo} alt="Card image cap" />
            <CardBody className="text-center">
              <CardTitle className="title">The Transfer Treatment</CardTitle>
              <Button className="button" href = {treatment} target="_blank">READ</Button>
            </CardBody>
          </Card> 
          </div>
          <div className="col-md-3 mb-5">
          <Card>
            <CardImg className="card-img" top width="100%" src={killLogo} alt="Card image cap" />
            <CardBody className="text-center">
              <CardTitle className="title">Thou Shalt Not Kill</CardTitle>
              <Button className="button" href = {kill} target="_blank">READ</Button>
            </CardBody>
          </Card> 
          </div>
            
        </div>
    </div>
  )
}

export default Portfolio;
