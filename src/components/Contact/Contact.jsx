import React from 'react';

import './Contact.css';

const Contact = () =>
  <div id="contact">
    <div className="contactContainer">
      <div className="contactHeader">
        <h3>Let's Connect!</h3>
      </div>
      <div>
        <div className="contactType">
          <a href="mailto:xkinchanx@gmail.com">Contact</a>
        </div>
        <div className="contactType">
          <a href="https://www.linkedin.com/in/thekinchan/" target="_blank">Linkedin</a>
        </div>
        <div className="contactType">
          <a href="https://github.com/omegak911" target="_blank">Github</a> 
        </div>
      </div>
    </div>
  </div>

export default Contact;