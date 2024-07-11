import React from 'react';
import { useForm } from 'react-hook-form';
import FormButton from './formButton';

const UserDetails = ({ onNext, onBack}) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full mx-auto flex flex-col gap-0 p-6'>
      <div className="mb-2 flex gap-6">
        <label className="block w-2/4">Candidate Name <span className='text-red-500'>*</span></label>
        <div className="flex flex-col w-full">
          <input
            type="text"
            {...register("firstName", { required: true, maxLength: 20 })}
            aria-invalid={errors.firstName ? "true" : "false"}
            placeholder="Eg. John Nair"
            className="w-full border p-2 rounded"
          />
          {errors.firstName?.type==='required' && <p className='text-red-500' role="alert">First name is required</p>}
          {errors.firstName?.type==='maxLength' && <p className='text-red-500' role="alert">Max length is 20</p>}
        </div>
      </div>
      <div className="mb-2 flex gap-6">
        <label className="block w-2/4">E-mail ID (Mention your personal and active email id) <span className='text-red-500'>*</span></label>
        <div className="flex flex-col w-full">
          <input
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="Eg. john@example.com"
            className="w-full border p-2 rounded"
          />
          {errors.email?.type === 'required' && <span className='text-red-500'>This field is required</span>}
          {errors.email?.type === 'pattern' && <span className='text-red-500'>Invalid email format</span>}
        </div>
      </div>
      <div className="mb-2 flex gap-6">
        <label className="block w-2/4">State <span className='text-red-500'>*</span></label>
        <div className="flex flex-col w-full">
          <input
            type="text"
            {...register("state", { required: true })}
            aria-invalid={errors.state ? "true" : "false"}
            placeholder="Eg. California"
            className="w-full border p-2 rounded"
          />
          {errors.state && <p className='text-red-500' role="alert">State is required</p>}
        </div>
      </div>
      <div className="mb-2 flex gap-6">
        <label className="block w-2/4">Contact Number <span className='text-red-500'>*</span></label>
        <div className="flex flex-col w-full">
          <input
            type="tel"
            {...register("contactNumber", { required: true, pattern: /^[0-9]{10}$/ })}
            aria-invalid={errors.contactNumber ? "true" : "false"}
            placeholder="Eg. +91 XXXXXXXXXX"
            className="w-full border p-2 rounded"
          />
          {errors.contactNumber && <p className='text-red-500' role="alert">Valid 10 digit phone number required</p>}
        </div>
      </div>
      <div className="mb-2 flex gap-6">
        <label className="block w-2/4">Candidate’s LinkedIn ID URL <span className='text-red-500'>*</span></label>
        <div className="flex flex-col w-full">
          <input
            type="text"
            {...register("linkedinURL", {
              required: true,
              pattern: /^(https:\/\/linkedin\.com\/)|^(https:\/\/)/
            })}
            aria-invalid={errors.linkedinURL ? "true" : "false"}
            placeholder="Eg. https://linkedin.com/in/john-nair"
            className="w-full border p-2 rounded"
          />
          {errors.linkedinURL && (
            <p className='text-red-500' role="alert">Please enter a valid LinkedIn URL starting with 'https://linkedin.com' or 'https://'</p>
          )}
        </div>
      </div>
      <div className="mb-0 flex gap-6">
        <label className="block w-2/4">Aadhar card number <span className='text-red-500'>*</span></label>
        <div className="flex flex-col w-full">
          <input
            type="text"
            {...register("aadhar", { required: true, pattern: /^[0-9]{12}$/ })}
            aria-invalid={errors.aadhar ? "true" : "false"}
            placeholder="Eg. 1234 5678 9101"
            className="w-full border p-2 rounded"
          />
          {errors.aadhar && <p className='text-red-500' role="alert">Valid 12 digit Aadhar number required</p>}
        </div>
      </div>
      <FormButton isDisabled={!isValid} onNext={handleSubmit(onSubmit)} onBack={onBack} isCurrentPage={'User Details'} />
    </form>
  );
};

export default UserDetails;
