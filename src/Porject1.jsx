import React from 'react'

const Porject1 = () => {
  const images = ['image2.png','image1.png','image3.png'];
  const links = ['https://leicacamera1.netlify.app/','https://etq1.netlify.app/','https://buffalocopy.netlify.app/']
  const [imgNumber, setImgNumber] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const leftClick = () => {
    setImgNumber((prevImg) => prevImg > 0 ? prevImg - 1 : 2 )
  }
  const rightClick = () => {
    setImgNumber((prevImg) => prevImg < 2 ? prevImg + 1 : 0)
  }

  return (
    <div className='w-full min-h-full'>
        <div className='text-center font-monsa mt-12'>
            <p className='text-3xl font-bold text-blue-0'>My Recent Work</p>
            <p className='text-lg font-semibold mt-3'>These are more about design rather than functionality </p>
        </div>
        <div className='flex items-center justify-center p-4'>
          <button onClick={leftClick} className='mr-[-20px] z-10'> <img src='cl.svg' alt='Arrow Left' className='w-12 h-12 p-2 border-[1px] rounded-full bg-blue-0' /></button>
          <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='relative w-[80vw] h-[80vh]'>
            <img src={images[`${imgNumber}`]} alt='Site Image' className={`w-[80vw] h-[80vh] object-cover border-[1px] border-solid border-blue-0 ${isHovered ? 'blur-sm': ''}`} /> 
            {isHovered && (<a href={links[`${imgNumber}`]} target='_blank'  className=' absolute italic flex items-center justify-center bottom-8 right-12 w-28 h-8 rounded-2xl text-white bg-blue-0' >Visit Website</a>)}
          </div>
          <button onClick={rightClick} className='ml-[-20px] z-10'> <img src='cr.svg' alt='Arrow Right' className='w-12 h-12 p-2 border-[1px] rounded-full bg-blue-0' /></button>
        </div>
    </div>
  )
}

export default Porject1