import React, {useState} from "react";
import Slots from "./Slots";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import {SlideData} from "./SlideData";
import AlbumPic from "./AlbumPic";
import Navbar from "./Navbar";
import mail from './pics/mail.png';
import styles from "./Contact.css";
import emailjs from 'emailjs-com';
import $ from 'jquery';



function Contact(){
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    function validateFields(data){
        var validate = true;
        $.each(data, function(i, field){
            if(field.name == 'email'){
                var email = field.value;
                email.toLowerCase();
                if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || !email){
                    validate = false;
                }
            }
            if(field.name == 'name'){
                if(!field.value){
                    validate = false;
                }
            }
            if(field.name == 'subject'){
                if(!field.value){
                    validate = false;
                }
            }
            if(field.name == 'message'){
                if(!field.value){
                    validate = false;
                }
            }
        })
        return validate;
    }


    function sendEmail(e){
        e.preventDefault();
        $('.contact-form .result .incorrect-visible').attr('class', 'incorrect-hidden');
        $('.contact-form .result .correct-visible').attr('class', 'correct-hidden');

        var data = $('.contact-form').serializeArray();
        if(validateFields(data)){
            emailjs.sendForm('service_sj0w5nq', 'template_olelx4m', e.target, 'user_j7h7PzAkjy8CmA9zw5HhS')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                $('.contact-form .result .correct-hidden').attr('class', 'correct-visible');
            }, (error) => {
                console.log(error.text);
                e.target.reset();
            });
        } else{
            $('.contact-form .result .incorrect-hidden').attr('class', 'incorrect-visible');
            e.target.reset();
        }
        
    }

    return (
        <div>
            <img className="sticky" src={mail} onClick={toggle}/>
            <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                CONTACT 
            </ModalHeader>
            <ModalBody>
               <form className="contact-form" onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-8 mx-auto py-2">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 mx-auto py-2">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 mx-auto py-2">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 mx-auto py-2">
                            <textarea className="form-control" placeholder="Your Message" name="message"></textarea>
                        </div>
                        <div className="col-8 text-center mx-auto">
                            <input type="submit" className="btn btn-danger mx-auto" value="Send Message"/>
                        </div>
                    </div>
                    <div className='result row text-center pt-3'>
                        <h3 className="correct-hidden">SUCCESS</h3>
                        <h3 className="incorrect-hidden">Something went wrong. Make sure to fill out all fields correctly!</h3>
                    </div>
               </form>
            </ModalBody>
            </Modal>
        </div>
    );
  }
  
export default Contact;