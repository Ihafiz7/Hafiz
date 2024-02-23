import React from 'react'
import { data } from './Components/data'

const Project = () => {
  return (
    <div className='w-full min-h-full'>
        <div className='text-center font-monsa mt-12'>
            <p className='text-3xl font-bold text-blue-0'>My Recent Work</p>
            <p className='text-lg font-semibold mt-3'>These are more functional than design. Want to see more? <a href="mailto:hafizalasad712@gmail.com" target='_blank' rel='noopener noreferrer' className="text-blue-0">Email me.</a> </p>
        </div>
        <div className='mx-6 grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8 p-12'>
            {data.map((item) => ( 
                <div key={item.id} className='relative xl:w-350 xl:h-[200px] w-300 h-[200px]  overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 font-monsa '>
                    <div className="absolute flex flex-col items-center justify-center inset-0 bg-cover bg-center bg-no-repeat border-gradient" style={{ backgroundImage: `url(${item.imgUrl})` }}>
                    <h2 className="text-white text-2xl font-bold text-center mb-2">{item.title}</h2>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-opacity-80 bg-gray-900 hover:bg-blue-0 transition duration-300 ease-in-out opacity-0 hover:opacity-100">
                        <p className="text-white text-center text-lg mb-4">{item.des}</p>

                        <button className="bg-white px-4 py-2 border-none rounded-xl hover:bg-black transition duration-300 ease-in-out"><a href={item.webLoc} target='_blank' className='font-monsa font-semibold no-underline cursor-pointer text-blue-0 hover:text-white '>Visit website</a></button>
                    </div>
                </div>
                
            ))}
        </div>
        
    </div>
  )
}

export default Project