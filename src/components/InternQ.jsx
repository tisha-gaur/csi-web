import React from 'react'
import FormButton from './formButton'
import { useForm } from 'react-hook-form'

const InternQ = ({onClose, onBack}) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange',
});
const onSubmit = (data) => console.log(data);

  return (
    <div className='p-6'>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
      <div className="mb-3 flex gap-6">
          <label className="block w-3/4">Current Semester<span className='text-red-500'>*</span></label>
          <div className="w-full flex flex-col">
          <select {...register("currentSemester", { required: true })} className="w-full border p-2 rounded">
            <option value="">Choose</option>
            <option value="1">Web Development</option>
            <option value="2">Another Option</option>
          </select>
          {errors.currentSemester && <span className='text-red-500'>This field is required</span>}
          </div>
        </div><div className="mb-3 flex gap-6">
          <label className="block w-3/4">Are you having enough skill sets to apply for the same domain?<span className='text-red-500'>*</span></label>
          <div className="w-full flex flex-col">
          <div className="flex gap-4 w-full">
            <label><input type="radio" {...register("enoughSkills", { required: true })} value="Yes" /> Yes</label>
            <label><input type="radio" {...register("enoughSkills", { required: true })} value="No" /> No</label>
          </div>
          {errors.enoughSkills && <span className='text-red-500'>Please select an option</span>}
          </div>
        </div>
        <div className="mb-3 flex gap-6">
          <label className="block w-3/4">Select the Technical Skills (Can select only 3 skills)<span className='text-red-500'>*</span></label>
          <div className="w-full flex flex-col">
          <select {...register("technicalSkills", { required: true })} className="w-full border p-2 rounded">
            <option value="">Choose</option>
            <option value="React">React</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Deep Learning">Deep Learning</option>
            <option value="Web Development">Web Development</option>
            <option value="Javascript">Javascript</option>
            <option value="Node">Node</option>
            <option value="Vanilla">Vanilla</option>
            <option value="Tailwind">Tailwind</option>
          </select>
          {errors.technicalSkills && <span className='text-red-500'>Please select your skills</span>}
          </div>
        </div>
        <div className="mb-3 flex gap-6">
          <label className="block w-3/4">Have you done any projects/Training before in the chosen domain?<span className='text-red-500'>*</span></label>
          <div className="w-full flex flex-col">
          <div className="flex gap-4 w-full">
            <label><input type="radio" {...register("projectsDone", { required: true })} value="Yes" /> Yes</label>
            <label><input type="radio" {...register("projectsDone", { required: true })} value="No" /> No</label>
          </div>
          {errors.projectsDone && <span className='text-red-500'>Please select an option</span>}
          </div>
          
        </div>
        <div className="mb-3 flex gap-6">
          <label className="block w-3/4">Select Batch<span className='text-red-500'>*</span></label>
          <div className="w-full flex flex-col">
          <div className="flex gap-4 w-full">
            <label><input type="radio" {...register("selectedBatch", { required: true })} value="Batch 1 | 20th May'2024" /> Batch 1 | 20th May'2024</label>
            <label><input type="radio" {...register("selectedBatch", { required: true })} value="Batch 2 | 3rd June'2024" /> Batch 2 | 3rd June'2024</label>
          </div>
          {errors.selectedBatch && <span className='text-red-500'>Please select a batch</span>}
          </div>
        </div>
        <div className="mb-3 flex gap-6">
          <label className="block w-3/4">After the successful completion of the CSI program, would you like to join our Organization as a Full Time Employee?<span className='text-red-500'>*</span></label>
          <div className="w-full flex flex-col">
          <div className="flex gap-4 w-full">
            <label><input type="radio" {...register("joinAsEmployee", { required: true })} value="Yes" /> Yes</label>
            <label><input type="radio" {...register("joinAsEmployee", { required: true })} value="No" /> No</label>
          </div>
          {errors.joinAsEmployee && <span className='text-red-500'>Please select an option</span>}
          </div>
        </div>
        <FormButton isDisabled={!isValid} isCurrentPage={'Internship Questionnaire'} onNext={handleSubmit(onSubmit)} onBack={onBack} onClose={onClose}/>
      </form>
    </div>
  )
}

export default InternQ
