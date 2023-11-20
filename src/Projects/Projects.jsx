import React from 'react'
import Button from '../Components/Button'
import ProjectsComp from '../Components/ProjectsComp' 
import project2 from '../img/project2.png'
import project3 from '../img/project3.png'
import project4 from '../img/project4.png'
import project5 from '../img/project5.png'
import project6 from '../img/project6.png'

const Projects = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between items-center mt-16'>
        <h1 className='text-5xl md:text-6xl font-semibold pb-4 md:pb-16'>Projects</h1>
        <Button text="CONTACT ME" />
      </div>
      <div className='flex flex-wrap'>
        <ProjectsComp image={project6} text="DESIGN PORTFOLIO" tags="HTML-CSS" />
        <ProjectsComp image={project2} text="E-LEARNING LANDING PAGE" tags="HTML-CSS" />
        <ProjectsComp image={project3} text="TODO WEB APP" tags="HTML-CSS-JAVASCRIPT" />
        <ProjectsComp image={project4} text="ENTERTAINMENT WEB APP" tags="HTML-CSS-JAVASCRIPT" />
        <ProjectsComp image={project5} text="MEMORY GAME" tags="HTML-CSS-JAVASCRIPT" />
        <ProjectsComp image={project6} text="ART GALLERY SHOWCASE" tags="HTML-CSS-JAVASCRIPT" />
      </div>
    </div>
  )
}

export default Projects