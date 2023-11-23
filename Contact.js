import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; 
import './contact.css';

const Popover = ({ message, onClose }) => {
  return (
    <div className="popover">
      <p dangerouslySetInnerHTML={{ __html: message }}></p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const hooray = "Hooray! <br /><br /> Your email sent successfully! <br /><br />You're one step closer to hiring an amazing Developer!";
const failed = "Failed to send email. <br /><br /> Please try again later.";

const Contact = () => {
  const form = useRef();
  const [popoverMessage, setPopoverMessage] = useState(null);
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID') // Replace with your actual service, template, and user IDs
      .then((result) => {
        console.log(result.text);
        setPopoverMessage(hooray);
        setOpen(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        setPopoverMessage(failed);
        setOpen(true);
        form.current.reset();
      });
  };

  const closePopover = () => {
    setPopoverMessage(null);
    setOpen(false);
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>

      {open && popoverMessage && (
        <Popover message={popoverMessage} onClose={closePopover} />
      )}
    </div>
  );
};

export default Contact;
