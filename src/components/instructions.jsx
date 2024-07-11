import React, { useState } from 'react';
import FormButton from './formButton';

const Instructions = ({ onNext, onBack }) => {
  const [isChecked, setIschecked] = useState(false);

  const handleCheckboxChange = () => {
    setIschecked(!isChecked);
  };

  return (
    <div className='p-4'>
      <p>Before filling out the form, take 2 minutes to read some important points given below-</p>
      <ul className="list-disc pl-7">
        <li>This internship is unpaid.</li>
        <li>It is specifically designed for pre-final year students.</li>
        <li>The duration of the internship will be two months.</li>
        <li>Throughout the internship, you will be assigned tasks to complete and work on, which must be submitted during the internship period.</li>
        <li>The internship completion certificates will only be issued upon successful submission and completion of the assigned tasks.</li>
      </ul>
      <div className="mt-4">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} id="instructions" name="instructions" />
        <label htmlFor="instructions" className="ml-2">I have read all the instructions mentioned above</label>
      </div>
      <FormButton isDisabled={!isChecked} onNext={onNext} isCurrentPage={'Instructions'} onBack={onBack} />
    </div>
  );
};

export default Instructions;
