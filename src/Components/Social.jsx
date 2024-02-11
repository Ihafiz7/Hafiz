const Social = () => {
  return (
    <div className="flex items-center justify-center gap-10 my-8">
        <a href="mailto:hafizalasad712@gmail.com" target='_blank' rel='noopener noreferrer' className="p-2 rounded-full bg-gray-200 hover:bg-red-300">
            <img src='gmail.svg' alt="mail" className="w-8 h-8" />
        </a>
        <a href="https://www.instagram.com/hafiz_ahmed_11/" target='_blank' rel='noopener noreferrer' className="p-2 rounded-full bg-gray-200 hover:bg-red-300">
            <img src='insta.svg' alt="insta" className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/hafiz-asad-a7a93b210/" target='_blank' rel='noopener noreferrer' className="p-2 rounded-full bg-gray-200 hover:bg-red-300">
            <img src='linkin.svg' alt="in" className="w-8 h-8" />
        </a>
        <a href="https://wa.me/01916119909?text=Hello%20there!"  target='_blank' rel='noopener noreferrer' className="p-2 rounded-full bg-gray-200 hover:bg-red-300">
            <img src='whatsapp.svg' alt="app" className="w-8 h-8" />
        </a>
    </div>
  )
}

export default Social