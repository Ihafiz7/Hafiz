import React from 'react'

const IntroPage = () => {
  return (
    <div className='w-full min-h-full flex flex-col bg-gradient-intro'>
        <div className=' p-6 m-6 flex flex-col items-center flex-wrap gap-4'>
            <h1 className='text-white text-center font-monsa text-3xl font-bold mt-8'>Hi, I’m Hafiz. Nice to meet you.</h1>
            <p className='text-white font-monsa text-xl text-center break-words w-[60%] max-sm:w-[80%]'>I'm quietly confident, naturally curious, and perpetually working on improving my chops. I like to work with talented people to create digital products for both business and consumer use.</p>
        </div>
        <div className=' bg-white m-6 rounded-xl font-monsa p-8 shadow-bottom'>
            <h1 className=' text-center text-lg font-bold pt-4 text-blue-0'>Frontend Developer</h1>
            <p className='text-center font-semibold flex items-center justify-center '>I value simple content structure, clean design patterns.I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <h3 className='text-center text-lg font-bold pt-3 text-blue-0'>Languages I speak:</h3>
            <p className='text-center font-semibold'>React, JavaScript, HTML, CSS, Tailwind CSS, Git</p>
            <h3 className='text-center text-lg font-bold pt-3 text-blue-0'>Dev Tools:</h3>
            <p className='text-center font-semibold'>Github, Netlify, VSCode, Tailwind, React+Vite </p>
        </div>

    </div>
  )
}

export default IntroPage