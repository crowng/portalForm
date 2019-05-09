import React, { Component, Fragment } from 'react';
import './App.css';


class Form extends Component {
    render() {
        return (
            <Fragment className='form'>
            
                <h3>Contact</h3>


  <form action="">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." required />

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." required />

    <label for="email">E-Mail</label>
   <input type="email" id="email" name="email" placeholder="Your E-Mail here.." required />

    <label for="subject">Message</label>
    <textarea id="message" name="message" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit"/>
  </form>
            </Fragment>
            
        );
    }
}


export default Form;