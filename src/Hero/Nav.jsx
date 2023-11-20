import React from 'react'
import githubLogo from "../img/Path.png"

const Nav = () => {
  return (
    <div className='grid lg:grid-cols-1 md:grid-col-1 sm:grid-col-12 md:p-0 md:py-8 p-12'>
        <div className="flex justify-between">
            <h1 className=''>JakeSilberstein</h1>
            <img src={githubLogo} width="40px" alt="" />
        </div> 
    </div>
  )
}

export default Nav