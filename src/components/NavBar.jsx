import { useState } from "react"

export default function NavBar() {
const [show, setShow] = useState(false)

  return (
    <header className="bg-white flex justify-center px-10 items-center ">

    <nav className="flex justify-between w-full p-1  items-center" >
      <div>
        <a href="" className="font-sans text-3xl font-bold">My Tinerary</a>
      </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        onClick={()=>setShow(!show)} strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-[40px] h-[40px] flex items-end" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        {show ? (<div className="flex flex-row items-center">
              <a href="" className="px-2 font-bold text-2xl">Home</a>
              <a href="" className="px-2 font-bold text-2xl">Cities</a>
              <button class="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 me-2 rounded inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ">
                <path fillRule="evenodd" d="M1 6a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V6zm4 1.5a2 2 0 114 0 2 2 0 01-4 0zm2 3a4 4 0 00-3.665 2.395.75.75 0 00.416 1A8.98 8.98 0 007 14.5a8.98 8.98 0 003.249-.604.75.75 0 00.416-1.001A4.001 4.001 0 007 10.5zm5-3.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm0 6.5a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm.75-4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" clipRule="evenodd" />
              </svg>
                <span className="px-2">Login</span> 
              </button>
        </div>) : (null) }
    </nav>
    </header>
  )
}

