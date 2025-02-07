
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
        'service_zehhwuy', 
        'template_rhranf9',
        formData,
        'WEJFesRXefUHiJUhj'       
      )
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); 
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
      });
  };

  const formVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariant = {
    hover: {
      scale: .99,
      transition: {
        yoyo: 5, 
      },
    },
    tap: { scale: 0.9 }, 
  };

  const successVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } },
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>

      {isSubmitted ? (
        <motion.div
          className="success-message"
          variants={successVariant}
          initial="hidden"
          animate="visible"
        >
          <p>Thank you for reaching out! We'll get back to you soon.</p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          variants={formVariant}
        >
          <motion.div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            variants={buttonVariant}
            whileHover="hover"
            whileTap="tap"
            className="submit-button "
          >
            Send Message
          </motion.button>
        </motion.form>
      )}
    </div>
  );
};

export default ContactPage;
