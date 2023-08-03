import Arrow from "../components/Arrow"
import CardPolaroid from "../components/CardPolaroid"


export default function Home() {

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
    <main className="flex justify-between items-center">
    <div className="flex flex-col justify-center items-start w-[742px] gap-y-10 pr-20">
      <h1 className="flex self-stretch text-5xl font-bold">Find the perfect destination</h1>
        <div className="text-slate-500">
          <p>Our app will help you find the perfect path for your next</p>
          <p>trip. With an easy-to-use interface and a host of itinerary</p>
          <p>options, planning your next trip has never been easier.</p>
        </div>
          <button className="bg-blue-500 rounded-lg text-2xl font-semibold text-white flex w-[346px] px-[16px] py-[20px] justify-center items-center gap-4">View More</button>
        </div>
    <div className="flex flex-row items-center">
      <Arrow />
      <div className="flex flex-col justify-between items-center mt-5 bg-red-300">
        {data.slice(0,2).map(each=> <CardPolaroid key={each.id} src={each.photo} alt={each.id} text={each.city} />)}
      </div> 
        <Arrow />
      </div> 
  </main>
  )
}
