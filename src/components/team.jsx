import React from 'react'
import akash1 from '../assets/akash1.png'
import akash2 from '../assets/akash2.png'
import Teammember from './teammember'
import sarthak1 from '../assets/sarthak1.png'
import sarthak2 from '../assets/sarthak2.png'
import shifali1 from '../assets/shifali1.png'
import shifali2 from '../assets/shifali2.png'
import priya1 from '../assets/priya1.png'
import priya2 from '../assets/priya2.png'

const Team = () => {

  return (
    <div className='mt-20 mb-28'>
      <h1 className='text-4xl font-semibold text-neutral-600 text-center'>CSI Team</h1>
      <div className=" mx-auto w-4/5 flex flex-wrap gap-4 py-10 justify-center">
        <Teammember name={"Akash Gupta"} url={"https://www.linkedin.com/in/akash-gupta-9a9b4120b/"} image1={akash1} image2={akash2} />
        <Teammember name={"Sharthak Acharjee"} url={"https://www.linkedin.com/in/akash-gupta-9a9b4120b/"} image1={sarthak1} image2={sarthak2} />
        <Teammember name={"Shaifali Sharma"} url={"https://www.linkedin.com/in/akash-gupta-9a9b4120b/"} image1={shifali1} image2={shifali2} />
        <Teammember name={"Priya Soni"} url={"https://www.linkedin.com/in/akash-gupta-9a9b4120b/"} image1={priya1} image2={priya2} />
      </div>
    </div>
  )
}

export default Team
