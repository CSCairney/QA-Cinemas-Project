import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './emailform.css'
import Button from 'react-bootstrap/Button';

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2boguwp', 'template_you5wxd', form.current, 'alnPun0mV80hIi1T_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div  id="emailforms">
      <form ref={form} onSubmit={sendEmail}>
      <div class="mb-3">
      <label  class="form-label"/>
      <input type="text" name="user_name" class="form-control" placeholder="Name" />
      </div>
      <div class="mb-3">
      <label class="form-label"/>
      <input type="email" class="form-control"  name="user_email" placeholder="name@email.com"/>
      </div>
      <div class="mb-3">
        <label for="Textarea1" class="form-label"/>
        <textarea class="form-control" id="Textarea1" rows="3" placeholder="Message Here" name="message"></textarea>
      </div>

      <Button variant="warning" type="submit" value="Send" size="lg">Submit</Button>
      </form>
    </div>
  );
};
export default EmailForm;



