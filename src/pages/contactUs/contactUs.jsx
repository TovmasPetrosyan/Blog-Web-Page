import React, { useState, useRef } from "react";
import "./contactUs.scss";
import { ContactAnimation } from "../../utils/successAnim";
import * as emailjs from "@emailjs/browser";

const ContactUs = () => {
  emailjs.init({
    publicKey: "Y1RGY__W2p18lTs7r",
    blockHeadless: true,
    blockList: {
      list: ["foo@emailjs.com", "bar@emailjs.com"],
      watchVariable: "userEmail",
    },
    limitRate: {
      id: "app",
      throttle: 10000,
    },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    var templateParams = {
      to_name: "SpaceBlog", // Replace with actual recipient name
      from_name: name, // Replace with actual sender name
      message: message,
    };
    console.log("Submitting form:", { name, email, message });

    emailjs.send("service_e70w192", "template_4lrq7hk", templateParams).then(
      (result) => {
        console.log("Email sent successfully:", result.text);

        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.error("Failed to send email:", error.text);
      }
    );
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className=" contactUsContainer">
      <div className="form-container-main">
        <div className="form-container">
          <div className="form-image">
            <h1 className="montserrat">Get in touch</h1>
            <ContactAnimation />
          </div>
          <div className="form">
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                placeholder="Name"
                autoFocus
                value={name}
                onChange={handleNameChange}
              />
              <input
                type="email"
                id="mail"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Say Hello"
                value={message}
                onChange={handleMessageChange}
              />
              <div className="button-container">
                <button type="submit" className="send-button">
                  Send
                </button>
                <button
                  type="button"
                  className="reset-button"
                  id="reset-btn"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
