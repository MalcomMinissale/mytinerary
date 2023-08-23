import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import apiUrl from "../apiUrl"
import NavBar from "../components/NavBar"
import { Link as Anchor } from "react-router-dom"
import Footer from "../components/Footer"


export default function CityDetails() {
  const { _id } = useParams()
  const [city, setCity] = useState([])


  useEffect(
    () => {
      axios(apiUrl + 'cities/' + _id)
        .then(res =>{setCity(res.data.response)
          console.log(city)})
        .catch(err => console.log(err))
    }, []
  )

  return (
    <>
    <div>CityDetails of city {city.city} under construction</div>
    <Anchor to={'/cities/'}>
    <button className="bg-pink-500 hover:bg-blue-500 rounded-lg text-2xl font-semibold text-white flex w-[250px] px-[16px] py-[20px] justify-center items-center gap-4">Back to Cities</button>
          </Anchor>
    </>
  )
}
