import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./emailform.css";
import Button from "react-bootstrap/Button";
// ignore warninng
const EmailForm = () => {
  const form = useRef();
  const intialValues = { user_name: "", user_email: "", messages: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [message, setMessage] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  // eslint-disable-next-line
  useEffect(() => {
    console.log(message);
    if (Object.keys(message).length === 0 && isSubmit) {
      console.log(formValues);
    }
    // eslint-disable-next-line
  }, [message]);

  const validate = (values) => {
    const error = {};

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/i;

    if (!values.user_name) {
      message.user_name = "Name is required";
    }
    if (!values.user_email) {
      message.user_email = "Email is required!";
    } else if (!regEx.test(values.user_email)) {
      message.user_email = "Email is Not Valid!";
    }
    if (!values.messages) {
      message.messages = "Message is required!";
    }

    return message;
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(validate(formValues));
    setIsSubmit(true);

    emailjs
      .sendForm(
        "service_2boguwp",
        "template_you5wxd",
        form.current,
        "alnPun0mV80hIi1T_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      const refreshPage = () =>{
        window.location.reload();
    } 
  };

  return (
    <div id="emailforms">
      {Object.keys(message).length === 0 && isSubmit ? (
        <div className="message_success">Message submitted successfully</div>
      ) : (
        <pre></pre>
      )}

      <form ref={form} onSubmit={sendEmail}>
        <div class="mb-3">
          <label class="form-label" />
          <input
            type="text"
            name="user_name"
            class="form-control"
            placeholder="Name"
            value={formValues.user_name}
            onChange={handleOnChange}
          />
        </div>
        <p>{message.user_name}</p>
        <div class="mb-3">
          <label class="form-label" />
          <input
            type="email"
            class="form-control"
            name="user_email"
            placeholder="Name@email.com"
            value={formValues.user_email}
            onChange={handleOnChange}
          />
        </div>
        <p>{message.user_email}</p>
        <div class="mb-3">
          <label for="Textarea1" class="form-label" />
          <textarea
            class="form-control"
            id="Textarea1"
            rows="3"
            placeholder="Message Here"
            name="messages"
            value={formValues.messages}
            onChange={handleOnChange}
          ></textarea>
          <p>{message.messages}</p>
        </div>

        <Button variant="warning" type="submit" value="Send" >
          Submit
        </Button>
        <Button type="reset" variant="danger" onClick={() => window.location.reload(false)} >
          Reset
        </Button>
      </form>
    </div>
  );
};
export default EmailForm;
