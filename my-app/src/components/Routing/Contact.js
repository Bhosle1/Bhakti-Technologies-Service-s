import React from 'react'
import ContactFrom from '../ContactFrom';

import './Contact.css';

function Contact() {
  return (
    <>
      <div className="overlay">
        <h1 className="main-heading">Contact US</h1>
      </div>


      <div className="two-col-section">
        <div className="left-col">
        <ContactFrom />
        </div>

        <div className="right-col">
          <h2>Office Address</h2>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.468652852428!2d73.85674307496224!3d18.560006868653026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06e86a0e5d1%3A0xa3efcee98045a04f!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1702912345678!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </div>


    </>
  )
}

export default Contact;