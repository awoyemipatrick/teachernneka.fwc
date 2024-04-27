"use client"
import React from 'react'
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

export const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded mb-2">
      <div
        className="p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className='flex justify-between items-center px-2 gap-4'>
        <h2 className="text-lg font-semibold">{title}</h2>
        <FaPlus />
        </div>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-100">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

