
function App() {
  const nombre1 = 'My'
  const nombre2 = 'Tinerary'
  return (
    <div className=" min-h-screen bg-#EBEBEB px-56 pt-[32px] pb-[399px] gap-y-[318px] flex flex-col">
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
      {/* {console.log(nombre2)} */}
      {/* esto es un comentario */}
      <main className="flex justify-between items-center">
      <div className="flex flex-col justify-center items-start w-[742px] gap-y-10">
          <h1 className="flex self-stretch text-5xl font-bold">Find the perfect destination</h1>
            <div className="text-slate-500">
              <p>Our app will help you find the perfect path for your next</p>
              <p>trip. With an easy-to-use interface and a host of itinerary</p>
              <p>options, planning your next trip has never been easier.</p>
            </div>
            <button className="bg-blue-500 rounded-lg text-2xl font-semibold text-white flex w-[346px] px-[16px] py-[20px] justify-center items-center gap-4">View More</button>
        </div>
        <div>
          <h4>Carrousel</h4>
        </div>      
      </main>
    </div>
  )
}

export default App