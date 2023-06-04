import React from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pipy6hg', 'template_rxn8l2k', e.target, 'WIHVmFQABSJ6tOwfS')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Your Name" />
      <input type="email" name="user_email" placeholder="Your Email" />
      <textarea name="message" placeholder="Message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default ContactUs;
