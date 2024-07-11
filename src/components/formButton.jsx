import React from 'react';

const FormButton = ({ isDisabled, onNext, onBack, isCurrentPage }) => {
  return (
    <div className="flex gap-5 bg-gray-50 w-full p-6">
      {isCurrentPage === 'Instructions' ? (
        <button type='button' className="px-8 py-2 bg-gray-500 text-white rounded" onClick={onBack}>Cancel</button>
      ) : (
        <button type='button' className="px-8 py-2 bg-gray-500 text-white rounded" onClick={onBack}>Back</button>
      )}

      {isCurrentPage === 'Internship Questionnaire' ? (
        <button
          type="submit"
          className={`custom-button py-2 px-8 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 disabled:opacity-50`}
          disabled={isDisabled}
        >Submit</button>
      ) : (
        <button
          type="button"
          className={`custom-button py-2 px-8 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 disabled:opacity-50`}
          disabled={isDisabled}
          onClick={onNext}
        >Next</button>
      )}
    </div>
  );
};

export default FormButton;
