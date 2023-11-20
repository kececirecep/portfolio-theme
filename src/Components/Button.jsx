import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='border-b-2 border-[#6C1BF0] hover:text-[#6C1BF0] font-semibold'>{props.text}</button>
    </div>
  )
}

export default Button