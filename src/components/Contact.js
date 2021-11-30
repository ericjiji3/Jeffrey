import React, {useState} from "react";
import Slots from "./Slots";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import {SlideData} from "./SlideData";
import AlbumPic from "./AlbumPic";
import Press from "./Press";
import Navbar from "./Navbar";
import mail from './pics/mail.png';
import styles from "./Home.css";



function Contact(){
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <img className="sticky" src={mail} onClick={toggle}/>
            <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Modal title
            </ModalHeader>
            <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
                <Button
                color="primary"
                onClick={toggle}
                >
                Do Something
                </Button>
                {' '}
                <Button onClick={toggle}>
                Cancel
                </Button>
            </ModalFooter>
            </Modal>
        </div>
    );
  }
  
export default Contact;