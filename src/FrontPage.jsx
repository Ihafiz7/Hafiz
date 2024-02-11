import Nav from './Components/Nav'
import React from 'react';
const FrontPage = () => {
  const [isMenuOpen , setIsMenuOpen] = React.useState(false);

  const handleClick = () => {
    setIsMenuOpen(prevState => !prevState)
  }
  return (
    <div className='w-full min-h-[100vh]'>
      <div className=' flex items-center justify-between py-4 px-16'>
        <img src='logo.svg' alt='Logo' className=' w-16 h-16 max-sm:w-12 max-sm:h-12 md:w-14 md:h-14 hover:bg-black' />
        <div className='max-sm:hidden md:flex xl:flex  '> <Nav /></div>
        <img  src={(!isMenuOpen)? './src/assets/menu.svg' : './src/assets/cross.svg'} className=' w-12 h-12 xl:hidden md:hidden cursor-pointer' onClick={handleClick} />
      </div>
      {isMenuOpen && ( 
        <div className='flex items-center justify-center m-2'>
          <Nav />
        </div>
      )}
      <div className=' flex flex-col w-[100lvw] items-center justify-center mt-10 gap-6 '>
        <h1 className=' font-monsa font-extrabold text-7xl text-blue-0 max-sm:text-4xl md:text-5xl text-center'>Frontend Developer</h1> 
        <h3 className=' font-monsa font-medium text-2xl max-sm:px-5 max-sm:text-lg md:text-xl text-center'>I like to code simple products beautifully for best user experiences.</h3>
      </div>
      <div className='flex items-center justify-center mt-12'>
        <img src='/assets/hafiz.png' className=' w-56 h-56 rounded-full border-[3px] border-[#6E07F3] ' />
      </div>
    </div>
  )
}

export default FrontPage
