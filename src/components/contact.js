import React, { Component } from "react";
import '../stylesheets/contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <form>
          <div><p></p></div>

          <div class="headText">Name:</div>
          <div class='ui input'>
            <input type='text' placeholder='Name' />
          </div>

          <div>
            <p> </p>
          </div>



          <div class="headText">Email:</div>
          <div class='ui input'>
            <input type='text' placeholder='Email'/>
          </div>


          <div>
            <p> </p>
          </div>


          <div class="headText">Message:</div>
          <div class='ui input'>
            <div class='Large' class='break'>

            <textarea placeholder='Max words: 500' rows='3' size='50' maxlength='500' rows='10' cols='50'/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
