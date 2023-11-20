import React from 'react'
import Button from '../Components/Button'
import Nav from '../Hero/Nav'

const Footer = () => {
    return (
        <div className='flex flex-col pt-12 bg-[#242424]'>
            <div className='container mx-auto bg-[#242424] flex flex-col md:flex-row items-center justify-between mb-28 p-4 md:p-0'>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-[60px] font-semibold py-8'>Contact</h1>
                    <p className='text-gray-400 w-1/1 text-lg'>I would love to hear about your project and how I can help. Please fill in the form, and I’ll get back to you as soon as possible. I would love to hear about your project and how I can help. Please fill in the form, and I’ll get back to you as soon as possible. I would love to hear about your project and how I can help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                </div>
                <div className='w-full md:w-1/3 mt-12'>
                    <form className='flex flex-col'>
                        <input type="text" id="name" name="name" className='bg-transparent border-b-2 border-gray-500 py-4 p-4 focus:border-none' placeholder='NAME' />
                        <input type="email" id="email" name="email" className='bg-transparent border-b-2 border-gray-500 py-4 p-4 focus:border-none' placeholder='EMAIL' />
                        <textarea id="message" name="message" className='bg-transparent border-b-2 border-gray-500 py-4 p-4 mb-4 focus:border-none' placeholder='MESSAGE' />
                        <Button text="SEND MESSAGE" />
                    </form>
                </div> 
            </div>
            <div className='container mx-auto border-t-2 border-gray-500'>
                <Nav/>
            </div>
        </div>
    )
}

export default Footer