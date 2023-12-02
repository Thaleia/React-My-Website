// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser'; 
// import './contact.css';

// const Popover = ({ message, onClose }) => {
//   return (
//     <div className="popover">
//       <p dangerouslySetInnerHTML={{ __html: message }}></p>
//       <button onClick={onClose}><span class="material-symbols-outlined">
// done_outline
// </span></button>
//     </div>
//   );
// };

// const hooray = "Hooray! <br /><br /> Your email was sent successfully! <br /><br />You're one step closer to hiring an amazing Developer!";
// const failed = "Oops something went wrong.. <br /><br /> Click to send an email ";

// const Contact = () => {
//   const form = useRef();
//   const [popoverMessage, setPopoverMessage] = useState(null);
//   const [open, setOpen] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID') // Replace with your actual service, template, and user IDs
//       .then((result) => {
//         console.log(result.text);
//         setPopoverMessage(hooray);
//         setOpen(true);
//         form.current.reset();
//       })
//       .catch((error) => {
//         console.log(error.text);
//         const failedMessage = `${failed} <a href="mailto:thaleia.vavanou@gmail.com?"><i class="material-icons">&#xe0be;</i></a>`;
//         setPopoverMessage(failedMessage);
//         setOpen(true);
//         form.current.reset();
//       });
//   };

//   const closePopover = () => {
//     setPopoverMessage(null);
//     setOpen(false);
//   };

//   return (
//     <div className='universalBackground'>
//       <h1>Contact Form</h1>
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <br />
//         <input type="text" name="user_name" />
//         <br />
//         <label>Email</label>
//         <br />
//         <input type="email" name="user_email" />
//         <br />
//         <label>Message</label>
//         <br />
//         <textarea name="message" />
//         <br />
//         <input type="submit" value="Send" />
//       </form>

//       {open && popoverMessage && (
//         <Popover message={popoverMessage} onClose={closePopover} />
//       )}
//     </div>
//   );
// };

// export default Contact;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Popover = ({ message, onClose }) => {
  return (
    <div className="popover">
      <p dangerouslySetInnerHTML={{ __html: message }}></p>
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
    <a href="mailto:thaleia.vavanou@gmail.com">
      <i className="material-icons">&#xe0be;</i>
    </a>
  </>
);

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
        const failedMessage = (
          <>
            {failed}{' '}
            <a href="mailto:thaleia.vavanou@gmail.com">
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
  <div >
    <h1>Contact Form</h1>
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
      <textarea type="text" name="message" placeholder='This space awaits your words!'/>
      </label>
      <br />
      <input className='cButton' type="submit" value="Send" />
    </form>

    {open && popoverMessage && <Popover message={popoverMessage} onClose={closePopover} />}
  </div>
);
};

export default Contact;
