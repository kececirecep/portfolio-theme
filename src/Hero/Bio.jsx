import React from 'react'
import Button from '../Components/Button'
import profileImg from '../img/imgProfile.png'
import vektorImg from '../img/Vector.png'

const Bio = () => {
  return (
    <div className='flex justify-between py-16'>
      <img src={vektorImg} width="500px" alt="" className='absolute left-0 z-0 ' />
      <div className='w-full md:w-1/2 z-10 bg-transparent text-center md:text-start p-4 md:p-0'>
        <h1 className='font-bold bg-transparent xl:text-7xl lg:text-5xl md:text-3xl sm:text-2xl xs:text-xl'>Nice to meet you!</h1>
        <h1 className='font-bold bg-transparent xl:text-7xl lg:text-5xl md:text-3xl sm:text-2xl xs:text-xl'>I'm <span className='bg-transparent border-b-4 border-[#6C1BF0]'>Jake Silberstein</span></h1>
        <p className='py-16 text-[#D9D9D9] w-full md:w-2/3'>With extensive programming experience since age 9, I've cultivated a fervent passion for machine learning. Committed to continuous learning, I aspire to leverage my competencies in this field to eventually build my career.</p>
        <Button text="CONTACT ME" />
      </div>
      <div className='hidden md:flex'>
        <img src={profileImg} width="355px" alt="" />
      </div>
    </div>

  )
}

export default Bio