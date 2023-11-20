import React from 'react'

const ExperienceComp = (props) => {
  return (
    <div className='py-4'>
        <h1 className=' text-lg md:text-4xl'>{props.text}</h1>
        <p className='text-sm'>{props.explanation}</p>
    </div>
  )
}

export default ExperienceComp