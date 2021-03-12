import React from "react";
require("dotenv").config();
const nodemailer = require("nodemailer");

function Messaging(props) {

  const handleClick = async (e) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "RastaImagery@gmail.com",
        pass: process.env.REACT_APP_PASSWORD,
      },
    });

    const info = {
      from: props.emailInfo,
      to: "rastaimagery@gmail.com",
      subject: "Website Message",
      text: props.messageInfo,
    };

    transporter.sendMail(info, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    console.log("Message sent: %s", info.to);
    console.log("from", info.from)
    console.log("to", info.to)
    console.log("subject", info.subject)
    console.log("text", info.text)
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Comming back as undefined
  };

  return (
    <div>
      <form>
        <button type="button" id="submitBtn" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Messaging;
