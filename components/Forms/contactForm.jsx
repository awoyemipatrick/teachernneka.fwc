"use client"
import { useState } from 'react';
import axios from 'axios';

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to Formspree with the form data
      const response = await axios.post('https://formspree.io/f/xyyreeen', formData);

      // Check if the submission was successful
      if (response.status === 200 || response.status === 201) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Form submission failed.');
      }

      // Clear the form fields
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Close the modal after form submission
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      className={`bg-white p-6 rounded-md w-3/4 sm:w-min lg:w-1/4 shadow-2xl ${isOpen ? 'block' : 'hidden'}`
      }>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          Name:
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="block mb-4">
          Email:
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="block mb-4">
          Message:
          <textarea
            className="border border-gray-300 rounded-md p-2 w-full"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </label>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
