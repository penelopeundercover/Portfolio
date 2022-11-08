import React, { useState } from "react";

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
    <div className="container mt-5">
      <h2 className="mb-3">React Contact Form Component Example</h2>
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
          <input className="form-control" type="email" id="email" required />
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
  );
};
export default Contact;
{
  /* <form className="form">
  <input
    value={email}
    name="email"
    onChange={handleInputChange}
    type="email"
    placeholder="email"
  />
  <input
    value={userName}
    name="userName"
    onChange={handleInputChange}
    type="text"
    placeholder="username"
  />
  {/* TODO Add another input field with a value, name, type, and placeholder of "password" */
}
{
  /* TODO Add a `onChange` attribute with a value of `handleInputChange` */
}
//   <button type="button" onClick={handleFormSubmit}>
//     Submit
//   </button>
// </form>;

{
  /* <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username" */
}
// />
{
  /* TODO Add another input field with a value, name, type, and placeholder of "password" */
}
{
  /* TODO Add a `onChange` attribute with a value of `handleInputChange` */
}
//       <button type="button" onClick={handleFormSubmit}>
//         Submit
//       </button>
//     </form>
// }; */}
