import React from 'react'

const Nav = () => {
  return (
    <ul className='flex gap-6 px-6 font-monsa text-blue-0 cursor-pointer max-sm:gap-3 '>
        <li className=' relative cursor-pointer group'>
          <a href="#Intro"><span className='inline-block hover:text-black'>About Me</span></a>
          <span className="absolute left-0 right-0 bottom-0 w-0 h-0.5 bg-blue-0 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className='relative cursor-pointer group'>
          <a href="#Project"><span className='inline-block hover:text-black'>Projects</span></a>
          <span className="absolute left-0 right-0 bottom-0 w-0 h-0.5 bg-blue-0 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className='relative cursor-pointer group'>
          <a href="https://drive.google.com/file/d/1ZEmutcs5gJ03o1A4vOF2h4Tt-VTiIvwv/view"  target='_blank'><span className='inline-block hover:text-black'>My Resume</span></a>
          <span className="absolute left-0 right-0 bottom-0 w-0 h-0.5 bg-blue-0 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className='relative cursor-pointer group'>
          <a href="#Contact"><span className='inline-block hover:text-black'>Contact</span></a>
          <span className="absolute left-0 right-0 bottom-0 w-0 h-0.5 bg-blue-0 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-300"></span>
        </li>
    </ul>
  )
}

export default Nav
