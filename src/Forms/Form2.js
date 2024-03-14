import React from "react";

export default function Form2() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPass: "",
    okayToEmail: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirmPass) {
      console.log("Successfully signed up");
      if (formData.okayToEmail) {
        console.log("Thanks for signing up for our newsletter!");
      }
    } else {
      console.log("passwords do not match");
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmPass"
          value={formData.confirmPass}
          onChange={handleChange}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="okayToEmail"
            checked={formData.okayToEmail}
            onChange={handleChange}
          />
          <label htmlFor="okayToEmail">
            I want to join the newsletter
          </label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}