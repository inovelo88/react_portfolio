import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
      <div>
      <section id="contact-section"/>
      <div class="container"/>
          <h1>Contact Information</h1>
          <p id="contactpar">Please email me with any questions</p>
          <div class="contact-form"/>

      <i class="fa fa-phone"></i><span class="form-info">(626)808-3127</span><br/>
      <i class="fa fa-envelope"></i><span class="form-info">iyn88@yahoo.com</span><br/>

          <form action="mailto:iyn88@yahoo.com" method="post" enctype="text/plain"/>
              <input type="text" name="First Name" placeholder="First Name"/>
              <input type="text" name="Last Name"placeholder="Last Name"/>
              <input type="Email" name="Email"placeholder="Email"/>
              <textarea name="message" placeholder="Comments" rows="5"></textarea>
              <button class="submit">Submit</button>
              </div>
  
    
  );
};

export default Contact;