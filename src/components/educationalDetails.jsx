import React from 'react';
import FormButton from './formButton';
import { useForm } from 'react-hook-form';

const EducationalDetails = ({ onNext, onBack }) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className='p-6'>
      <div className="mb-4">
        NOTE:
        <ul className=" list-disc pl-5">
          <li>This internship is exclusively reserved for pre-final year students.</li>
          <li>Once enrolled in a specific domain, it will not be possible to change to another domain.</li>
          <li>Kindly ensure that all information provided is accurate and complete.</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
                <div className=" mb-2 flex gap-6">
                    <label className="block w-2/4">College Name<span className='text-red-500'>*</span></label>
                    <div className="w-full flex flex-col">
                        <input type="text" {...register("collegeName", { required: true })} aria-invalid={errors.collegeName ? "true" : "false"} placeholder="Eg. XYZ College" className="w-full border p-2 rounded"/>
                        {errors.collegeName && <p className='text-red-500' role="alert">College Name is required</p>}
                    </div>
                </div>
                <div className="mb-2 flex gap-6">
                    <label className="block w-2/4">Qualification<span className='text-red-500'>*</span></label>
                    <div className="w-full flex flex-col">

                        <input
                            type="text"
                            {...register("qualification", { required: true })}
                            aria-invalid={errors.qualification ? "true" : "false"}
                            placeholder="Eg. Bachelor's in Engineering"
                            className="w-full border p-2 rounded"
                        />
                        {errors.qualification && <p className='text-red-500' role="alert">Qualification is required</p>}
                    </div>
                </div>
                <div className="mb-2 flex gap-6">
                    <label className="block w-2/4">Branch<span className='text-red-500'>*</span></label>
                    <div className="w-full flex flex-col">

                        <div className="flex gap-4 w-full">
                            <label><input type="radio" {...register("branch", { required: true })} value="CS" /> CS</label>
                            <label><input type="radio" {...register("branch", { required: true })} value="IT" /> IT</label>
                            <label><input type="radio" {...register("branch", { required: true })} value="ECE" /> ECE</label>
                        </div>
                        {errors.branch && <p className='text-red-500' role="alert">Please select a Branch</p>}
                    </div>
                </div>
                <div className="mb-2 flex gap-6">
                    <label className="block w-2/4">Current Semester<span className='text-red-500'>*</span></label>
                    <div className="w-full flex flex-col">

                        <select
                            {...register("currentSemester", { required: true })}
                            aria-invalid={errors.currentSemester ? "true" : "false"}
                            className="w-full border p-2 rounded"
                        >
                            <option value="">Choose</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                        {errors.currentSemester && <p className='text-red-500' role="alert">Current Semester is required</p>}
                    </div>
                </div>
                <div className="mb-2 flex gap-6">
                    <label className="block w-2/4">Passing out year<span className='text-red-500'>*</span></label>
                    <div className="w-full flex flex-col">

                        <div className="flex gap-4 w-full">
                            <label><input type="radio" {...register("passingOutYear", { required: true })} value="2024" /> 2024</label>
                            <label><input type="radio" {...register("passingOutYear", { required: true })} value="2025" /> 2025</label>
                            <label><input type="radio" {...register("passingOutYear", { required: true })} value="2026" /> 2026</label>
                        </div>
                        {errors.passingOutYear && <p className='text-red-500' role="alert">Please select a Passing out year</p>}
                    </div>
                </div>
                <div className="mb-2 flex gap-6">
                    <label className="block w-2/4">The aggregate percentage of your graduation<span className='text-red-500'>*</span></label>
                    <div className="w-full flex flex-col">
                        <input
                            type="number"
                            {...register("aggregatePercentage", { required: true, pattern: /^[0-9]{2}$/ })}
                            aria-invalid={errors.aggregatePercentage ? "true" : "false"}
                            placeholder="Eg. 75"
                            className="w-full border p-2 rounded"
                        />
                        {errors.aggregatePercentage && <p className='text-red-500' role="alert">Valid aggregate Percentage is required</p>}
                    </div>
                </div>
                <div className="mb-2 flex gap-6">
                    <label className="block w-2/4">12th Percentage<span className='text-red-500'>*</span></label>
                    <div className="w-full flex flex-col">

                        <input
                            type="number"
                            {...register("twelfthPercentage", { required: true, pattern: /^[0-9]{2}$/ })}
                            aria-invalid={errors.twelfthPercentage ? "true" : "false"}
                            placeholder="Eg. 85%"
                            className="w-full border p-2 rounded"
                        />
                        {errors.twelfthPercentage && <p className='text-red-500' role="alert">Valid 12th Percentage is required</p>}
                    </div>
                </div>
                <div className="mb-2 flex gap-6">
                    <label className="block w-2/4">10th Percentage<span className='text-red-500'>*</span></label>
                    <div className="w-full flex flex-col">

                        <input
                            type="number"
                            {...register("tenthPercentage", { required: true, pattern: /^[0-9]{2}$/ })}
                            aria-invalid={errors.tenthPercentage ? "true" : "false"}
                            placeholder="Eg. 90%"
                            className="w-full border p-2 rounded"
                        />
                        {errors.tenthPercentage && <p className='text-red-500' role="alert">Valid 10th Percentage is required</p>}
                    </div>
                </div>
                <div className="mb-2 flex gap-6">
                    <label className="block w-2/4">Any backlogs?<span className='text-red-500'>*</span></label>
                    <div className="w-full flex flex-col">

                        <div className="flex gap-4 w-full">
                            <label><input type="radio" {...register("backlogs", { required: true })} value="Yes" /> Yes</label>
                            <label><input type="radio" {...register("backlogs", { required: true })} value="No" /> No</label>
                        </div>
                        {errors.backlogs && <p className='text-red-500' role="alert">Please select if there are any backlogs</p>}
                    </div>
                </div>
                <FormButton isDisabled={!isValid} onNext={onNext} onBack={onBack} isCurrentPage={'Educational Details'} />
      </form>
        </div>
    )
}

export default EducationalDetails
