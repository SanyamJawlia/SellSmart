import React from 'react';
import "../../Styles/contact.scss"
import {FaRegAddressCard} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {FiPhoneCall} from "react-icons/fi";
import {AiOutlineClockCircle} from "react-icons/ai";

const Contact = () => {
  return (
    <> 
        <section id="map">
            <div className="location">
                <h2>Visit one of our agency location or contact us today.</h2>
                <h4>Head Office</h4>
                <div className="contacticons">
                    <p><FaRegAddressCard/>&nbsp;&nbsp;&nbsp; Delhi Technological University, New Delhi</p>
                    <p><HiOutlineMail/>&nbsp;&nbsp;&nbsp; contact@gmail.com</p>
                    <p><FiPhoneCall/>&nbsp;&nbsp;&nbsp; +91 000-0000-000</p>
                    <p><AiOutlineClockCircle/>&nbsp;&nbsp;&nbsp; Monday to Saturday 9:00am to 4:00pm</p>
                </div>
            </div>
            <div className="maparea">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65982.72346395635!2d77.14344715642449!3d28.762370429935803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1686988628663!5m2!1sen!2sin" style={{border:"0", width:"100%",height:"300px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>

    </>
  )
}


export default Contact
