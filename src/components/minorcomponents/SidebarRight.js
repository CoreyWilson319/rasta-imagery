import Messaging from '../minorcomponents/Messaging'
import React from "react";
import emailjs from 'emailjs-com';
require("dotenv").config();

function SidebarRight(props) {
    function sendEmail(e) {
        // console.log(props)
        // REMOVE LINE 10 - 8
        console.log(process.env)
        e.preventDefault();
        emailjs.init(process.env.REACT_APP_USERID)
        emailjs.send(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,{
            nameInfo: props.nameInfo,
            messageInfo: props.messageInfo,
            phoneInfo: props.phoneInfo,
            emailInfo: props.emailInfo,
            })
        .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return(

        
        <div id="rightSidebar">
            <p id="description">Enter the information below to send questions about bookings, pricing and questions</p>
            <form id="inputLoc" className="contact-form" onSubmit={(e) => sendEmail(e)}>
                <label>Name:</label>
                <input className="inputs" type="text" onChange={props.handleName} placeholder="John Doe" name="user_email"/>
                <label>Email:</label>
                <input className="inputs" type="text" onChange={props.handleEmail} placeholder="JohnD@jd.com" name="user_name"/>
                <label>Message:</label>
                <input className="inputs" type="text" onChange={props.handleContent} placeholder="Enter Message" name="message"/>
                <h3>Optional</h3>
                <label>Phone:</label>
                <input className="inputs" type="text" onChange={props.handlePhone} placeholder="xxx-xxx-xxxx"/>
                <input type="submit" id="submitBtn" />
                <Messaging {...props}/>

            </form>

        </div>
    )
}

export default SidebarRight