import React, { useState } from "react";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});


  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  const handleSubmit = (event) => {

    event.preventDefault();

    let validationErrors = {};


    // Name validation
    if(formData.name.length < 5) {
      validationErrors.name =
      "Name should have atleast 5 characters";
    }


    // Email validation
    if(!formData.email.includes("@") ||
       !formData.email.includes(".")) {

      validationErrors.email =
      "Email should contain @ and .";
    }


    // Password validation
    if(formData.password.length < 8) {

      validationErrors.password =
      "Password should have atleast 8 characters";

    }


    setErrors(validationErrors);


    if(Object.keys(validationErrors).length === 0) {

      alert("Registration Successful!");

      setFormData({
        name: "",
        email: "",
        password: ""
      });

    }

  };


  return (

    <div>

      <h2>Mail Registration Form</h2>


      <form onSubmit={handleSubmit}>


        <label>Name:</label>
        <br />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <p className="error">
          {errors.name}
        </p>


        <label>Email:</label>
        <br />

        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <p className="error">
          {errors.email}
        </p>


        <label>Password:</label>
        <br />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        <p className="error">
          {errors.password}
        </p>


        <button type="submit">
          Register
        </button>


      </form>


    </div>

  );

}

export default Register;