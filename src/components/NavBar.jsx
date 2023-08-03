
export default function NavBar() {
  return (
    <header className="bg-white flex justify-center items-center ">
    <nav className="flex justify-between w-full p-1  items-center" >
      <div>
        <a href="" className="font-sans text-3xl font-bold">My Tinerary</a>
      </div>
      <div className="flex flex-row items-center">
        <a href="" className="px-2 font-bold text-2xl">Home</a>
        <a href="" className="px-2 font-bold text-2xl">Cities</a>
        <button className="bg-blue-500 rounded-lg text-2xl font-semibold text-white flex py-[16px] px-[32px]">Login</button>
      </div>
    </nav>
    </header>
  )
}

