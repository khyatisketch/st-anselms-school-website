'use client'
import React from 'react';

const AdmissionDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`
        fixed right-0 top-10 w-80 max-w-full bg-white shadow-lg z-50
        transform transition-transform duration-500 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
      style={{
        marginTop: '60px', // adjust based on navbar height
        borderLeft: '1px solid #ddd',
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-serif font-bold">
          Admission Enquiry Form
        </h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
      </div>

      <hr className="border-gray-300 mb-4" />

      {/* Form */}
      <div className="px-4 pb-4">
        <input
          type="text"
          placeholder="Name of the Child"
          className="w-full border border-gray-300 rounded p-2 mb-3 font-serif placeholder-gray-500"
        />
        <input
          type="text"
          placeholder="Name of the Parent"
          className="w-full border border-gray-300 rounded p-2 mb-3 font-serif placeholder-gray-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded p-2 mb-3 font-serif placeholder-gray-500"
        />
        <input
          type="text"
          placeholder="Number"
          className="w-full border border-gray-300 rounded p-2 mb-3 font-serif placeholder-gray-500"
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full border border-gray-300 rounded p-2 mb-3 font-serif placeholder-gray-500"
        />

        <label className="font-serif font-bold mb-1 block">Applying For</label>
        <select className="w-full border border-gray-300 rounded p-2 mb-4 font-serif">
          <option>Select</option>
          <option>Nursery</option>
          <option>Primary</option>
          <option>Secondary</option>
        </select>

        <button className="w-full bg-lime-400 hover:bg-lime-500 text-white font-serif font-bold py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AdmissionDrawer;
