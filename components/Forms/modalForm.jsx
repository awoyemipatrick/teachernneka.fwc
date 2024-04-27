"use client"

import React, { useState } from "react";
import axios from 'axios';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export const ModalForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async () => {
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

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <>
      <Button onPress={onOpen} color="primary"><EnvelopeIcon /></Button>
      <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
        <ModalContent className="">

          <ModalHeader className="flex flex-col gap-1">Send Message</ModalHeader>

          <ModalBody className="shadow-2xl p-10 ">
            <Input
              value={formData.name}
              onChange={(e) => handleChange(e, 'name')}
              // label="Full Name"
              placeholder="Enter your Name"
              type="text"
              variant="bordered"
              className='px-4 py-2 m-2'
            />
            <Input
              value={formData.email}
              onChange={(e) => handleChange(e, 'email')}
              autoFocus
              // label="Email"
              placeholder="Enter your email"
              variant="bordered"
              className='px-4 py-2 m-2'
            />
            <textarea
              className="border border-gray-300 rounded-md p-2 w-full"
              label="Message:"
              placeholder="Enter your Message"
              value={formData.message}
              onChange={(e) => handleChange(e, 'message')}
              rows="4"
              required
            ></textarea>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
