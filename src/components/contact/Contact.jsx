import React, { useState } from 'react';
import './contact.css'; // Import the CSS file

function Contact() {
  // Define state variables for form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    console.log('Form submitted with data:', formData);
    // Reset the form fields if needed
    setFormData({
      name: '',
      email: '',
      subject: '',
    });
  };

  return (
    <div className="contact-container" style={{ height: '70vh' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ height: '50vh' }}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group" style={{maxWidth:'30vh'}}>
          <label htmlFor="subject">Subject:</label>
          <textarea
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            style={{ height: '150px', resize: 'both' }} // Adjust height and resize property
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit Request</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
