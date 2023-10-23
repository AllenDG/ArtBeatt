import React, { useState } from "react";

export default function Form() {
  // Define state variables for form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log("Form submitted with data:", formData);
    // Reset the form fields if needed
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="form-container">
        <p>Name:</p> {/* Updated label */}
        <input
          type="text"
          placeholder="Name"
          id="input-name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <p>Email:</p> {/* Updated label */}
        <input
          type="email"
          placeholder="Email"
          id="input-email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <p>Password:</p> {/* Updated label */}
        <input
          type="password"
          placeholder="Password"
          id="input-password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
