import React, { useState, useRef, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import Instructions from './instructions';
import UserDetails from './userDetails';
import EducationalDetails from './educationalDetails';
import InternQ from './InternQ';

function Form({ onClose }) {
  const [activeSection, setActiveSection] = useState('Instructions');
  const modalRef = useRef(null);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'Instructions':
        return <Instructions onBack={onClose} onNext={() => setActiveSection('User Details')} />;
      case 'User Details':
        return <UserDetails onBack={() => setActiveSection('Instructions')} onNext={() => setActiveSection('Educational Details')} />;
      case 'Educational Details':
        return <EducationalDetails onBack={() => setActiveSection('User Details')} onNext={() => setActiveSection('Internship Questionnaire')} />;
      case 'Internship Questionnaire':
        return <InternQ onBack={() => setActiveSection('Educational Details')} onNext={() => alert('Thank you for completing the form!')} onClose={() => {onClose(); alert('Thank you for completing the form!')}} />;
      default:
        return null;
    }
  };

  return (
    <div ref={modalRef} onClick={closeModal} className='fixed z-10 inset-0 h-screen bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-0 max-h-screen overflow-y-auto border">
        <div className="flex justify-between items-center  p-6">
          <p className="text-2xl font-semibold ">CSI Registration Form</p>
          <button onClick={onClose}>
            <IoMdClose className='fill-black w-8 h-8' />
          </button>
        </div>
        <hr />
        <div className="flex justify-around mt-4 mb-4">
          {['Instructions', 'User Details', 'Educational Details', 'Internship Questionnaire'].map((section, index) => (
            <p
              key={index}
              className={`cursor-pointer font-semibold mx-auto pt-0 ${activeSection === section ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'} text-sm sm:text-md`}
              
            >
              {section}
            </p>
          ))}
        </div>
        <div>
          {renderSectionContent()}
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Form;
