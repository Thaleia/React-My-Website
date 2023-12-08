
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import './app.css';

const Popover = ({ message, onClose }) => {
  return (
    <div className="popover">
      <div>
        {message}
      </div>
      <button onClick={onClose}>
        <span className="material-symbols-outlined">done_outline</span>
      </button>
    </div>
  );
};


const hooray = (
  <>
    Hooray! <br />
    <br />
    Your email was sent successfully! <br />
    <br />
    You're one step closer to hiring an amazing Developer!
  </>
);

const failed = (
  <>
    Oops something went wrong.. <br />
    <br />
    Click to send an email{' '}
    <a href="mailto:thaleia.vavanou@gmail.com"></a>
  </>
);

const Contact = () => {
  const form = useRef();
  const [popoverMessage, setPopoverMessage] = useState(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

 // Increase textarea length on upon text addition
  const adjustHeight = (event) => {
    const el = event.target;
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';

    const lines = el.value.split('\n').length;
    if (lines > 1) {
      el.style.height = el.scrollHeight + 16 + 'px';
    }
      el.style.borderRadius = '28px';
  };

// EmailJS setup (go to https://www.emailjs.com/ to setup your account)
  const sendEmail = (e) => {
    e.preventDefault();
// when visitor completes the contact form email is sent through to me
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID') // Replace with your actual service, template, and user IDs
      .then((result) => {
        console.log(result.text);
        setPopoverMessage(hooray);
        setOpen(true);
        form.current.reset();
      })
      .catch((error) => {  // if there is an error I used the mailto functionality to provide alternative email contact
        console.log(error.text);
        const failedMessage = (
          <>
            {failed}{' '}
            <a className='send-email' href="mailto:thaleia.vavanou@gmail.com">  
              <i className="material-icons">&#xe0be;</i>
            </a>
          </>
        );
        setPopoverMessage(failedMessage);
        setOpen(true);
        form.current.reset();
      });
  };

  const closePopover = () => {
    setPopoverMessage(null);
    setOpen(false);
  };

return (
  <div className='contact'>
    <h1 className='threeD' style={{marginBottom: "30px",
                fontSize: "calc(26px +1vmin)", letterSpacing: '0'
                }} >Contact Form</h1>
    <form ref={form} onSubmit={sendEmail}>
      <label>
      <input type="text" name="user_name" placeholder='Name'/>
      </label>
      <br />
      <label>
      <input type="email" name="user_email" placeholder='Email address' />
      </label>
      <br />
      <label>
      <textarea 
        className="messageTextarea"
        type="text" 
        name="message" 
        placeholder='This space awaits your words!'
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          adjustHeight(e);
        }}
        onKeyDown={(e) => adjustHeight(e)}
      />
      </label>
      <br />
      <input className='cButton' type="submit" value="Send" />
    </form>

    {open && popoverMessage && (<Popover message={popoverMessage} onClose={closePopover} />)}
  </div>
);
};

export default Contact;
