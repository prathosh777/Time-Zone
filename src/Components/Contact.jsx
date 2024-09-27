import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .send(
        'service_zehhwuy',  // Replace with your service ID
        'template_rhranf9',  // Replace with your template ID
        formData,
        'WEJFesRXefUHiJUhj'       // Replace with your user ID
      )
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form after submission
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
      });
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      {isSubmitted ? (
        <div className="success-message">
          <p>Thank you for reaching out! We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
