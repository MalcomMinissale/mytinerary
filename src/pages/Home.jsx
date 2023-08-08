import { useState } from "react";
import Carousel from "../components/Carousel";


export default function Home() {

  const [show, setShow] = useState(true)
    const nombre1 = 'My'
const nombre2 = 'Tinerary'

let data = [
  {id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg"},
  {id: 'america2', city: "New York", photo: "/img/america/newyork.jpg"},
  {id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
  {id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg"},
  {id: 'asia1' , city: "Bangkok", photo: "/img/asia/bangkok.jpg"},
  {id: 'asia2' , city: "Pekin", photo: "/img/asia/pekin.jpg"},
  {id: 'asia3' , city: "Singapur", photo: "/img/asia/singapur.jpg"},
  {id: 'asia4' , city: "Tokyo", photo: "/img/asia/tokio.jpg"},
  {id: 'europe1' , city: "Ibiza", photo: "/img/europe/ibiza.jpg"},
  {id: 'europe2' , city: "London", photo: "/img/europe/london.jpg"},
  {id: 'europe3' , city: "Paris", photo: "/img/europe/paris.jpg"},
  {id: 'europe4' , city: "Roma", photo: "/img/europe/roma.jpg"},
  {id: 'oceania1' , city: "Majuro", photo: "/img/oceania/majuro.jpg"},
  {id: 'oceania2' , city: "Sidney", photo: "/img/oceania/sidney.jpg"},
  {id: 'oceania3' , city: "Suva", photo: "/img/oceania/suva.jpg"},
  {id: 'oceania4' , city: "Wellington", photo: "/img/oceania/wellington.jpg"}
]
  return (
    <main className="flex justify-between items-center px-10">
    <div className="flex flex-col justify-center items-start  gap-y-10">
      <h1 className="flex self-stretch text-5xl font-bold w-[742px]">Find the perfect destination</h1>
        <div className="text-slate-500 w-[546px]">
          <p>Our app will help you find the perfect path for your next</p>
          <p>trip. With an easy-to-use interface and a host of itinerary</p>
          <p>options, planning your next trip has never been easier.</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
          <button className="bg-blue-500 rounded-lg text-2xl font-semibold text-white flex w-[250px] px-[16px] py-[20px] justify-center items-center gap-4">View More</button>
          </div>
          <div>
          {show ?  <input onClick={()=>setShow(!show)} type="button" value='Hide' className="bg-pink-500 hover:bg-blue-700 text-white font-semibold text-2xl py-2 px-4 rounded-lg flex w-[250px] px-[16px] mx-1 py-[20px] justify-center items-center gap-4" /> :  <input onClick={()=>setShow(!show)} type="button" value='Show' className="bg-pink-500 hover:bg-blue-700 text-white font-semibold text-2xl py-2 px-4 rounded-lg flex w-[250px] px-[16px] mx-1 py-[20px] justify-center items-center gap-4" />}
          </div>
        </div>
        </div>
        
        {show ? <Carousel data={data} /> : <h1 className="text-[24px]">Click en "Show" para ver Carrousel</h1> }
        
    
  </main>
  )
}