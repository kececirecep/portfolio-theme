import React from 'react'
import ExperienceComp from '../Components/ExperienceComp'
import vektorImg from '../img/Vektor2.png'

const Experience = () => {
    return (
        <div className='border-t-2 border-gray-400 w-full  relative'>
            <div className='container mx-auto py-0 md:py-16'>
                <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8 text-center md:text-start'>
                    <ExperienceComp text="HTML" explanation="4 Years Experience" />
                    <ExperienceComp text="CSS" explanation="4 Years Experience" />
                    <ExperienceComp text="Javascript" explanation="4 Years Experience" />
                    <ExperienceComp text="Accessibility" explanation="3 Years Experience" />
                    <ExperienceComp text="React" explanation="2 Years Experience" />
                    <ExperienceComp text="Sass" explanation="2 Years Experience" />
                </div>

            </div>
            <div className='container mx-0'>
                <img src={vektorImg} width="455px" alt="" className='absolute right-0 bottom-16 bg-transparent' />
            </div>
        </div>
    )
}

export default Experience