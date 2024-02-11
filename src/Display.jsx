import Social from './Components/Social'
import { data2 } from './Components/data'

const Display = () => {
  return (
    <div className='w-full min-h-full mt-8 flex flex-col items-center justify-center bg-gradient-display px-4'>
        <p className='text-center text-blue-0 text-4xl font-monsa font-bold'>I'm proud to have completed some awesome courses:
        </p>
        <div className='mt-16 grid sm:grid-cols-1 md:grid-cols-2 gap-8 font-monsa bg-green-0 rounded-xl w-[75%] items-center p-4'>
            {data2.map((item) => (
                <div key={item.id} className=' relative w-350 h-auto mx-8 rounded-xl shadow-lg text-center py-4'>
                    <div>
                        <p className='text-2xl text-white cursor-pointer md:text-xl max-sm:text-lg'><a href={ item.link} target='_blank'> { item.title } </a></p>
                    </div>
                </div>
            ))}
        </div>
        <div className='flex flex-col items-center justify-center mt-8' id="Contact">
            <div className='flex flex-col items-center justify-center font-monsa text-white text-lg'>
                <p>Interested in working together?</p>
                <p>We should queue up a time to chat.</p>
            </div>
            <div className='flex items-center justify-center bg-white hover:bg-black mt-8'>
                <img src='logo.svg' className='w-16 h-16' />
            </div>
            <div>
                <Social />
            </div>
            <div className='flex flex-col items-center justify-center text-white mb-8'>
                <p className='font-monsa font-semibold text-2xl text-center'>HandCrafted By me©twentytwentyfour</p>
                <p className=' flex items-center justify-center font-monsa'>Made With<img src='react.svg' className='w-12 h-12 ml-4'/><span className='font-bold sm:text-lg md:text-4xl '>React</span> <span className='mx-4'> and</span> <img src='tailwind.svg' className='w-12 h-12'/><span className='font-bold sm:text-lg md:text-3xl'>Tailwind</span></p>
            </div>
        </div>
    </div>
  )
}

export default Display