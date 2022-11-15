import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

//Future: -add a backend
//        - add route to save contact form into DB
//        - email me when contact form is used
//        - text message when someone contacts me--use Twilio

const Contact = () => {
  const [formStatus, setFormStatus] = useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <section>
      <Header></Header>
      <div id="contact-page">
        <div id="contact" className="container mt-5">
          <h2 className="mb-3">Contact Me</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" id="message" required />
            </div>
            <button className="btn btn-danger" type="submit">
              {formStatus}
            </button>
          </form>
        </div>
        <div></div>
        <Footer></Footer>
      </div>
    </section>
  );
};
export default Contact;
