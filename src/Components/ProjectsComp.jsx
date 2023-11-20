import React from 'react'

const ProjectsComp = (props) => {
  return (
    <div className='w-[50%] p-4 py-8'>
        <img src={props.image} alt="" />
        <h1 className='text-xs md:text-xl py-4'>{props.text}</h1>
        <span className='text-xs md:text-lg text-gray-400'>{props.tags}</span>
    </div>
  )
}

export default ProjectsComp