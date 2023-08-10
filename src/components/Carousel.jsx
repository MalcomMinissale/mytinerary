import Arrow from "../components/Arrow"
import CardPolaroid from "../components/CardPolaroid"
import { useState } from "react"

export default function Carousel({ data }) {
    let photo_from = 0
    let photo_to = photo_from+4
    let [counter, setCounter] = useState(0)
    let [counterTo, setCounterTo] = useState(4)

    function next_slide(){
        if (data.length <= counterTo) { 
        setCounter(0)
        setCounterTo(4)
        } else {
        setCounter(counter+4)
        setCounterTo(counterTo+4)
    }
    }

    function prev_slide(){
        if (counter <= 0) { 
        setCounter(data.length-4)
        setCounterTo(data.length)
        } else {
        setCounter(counter-4)
        setCounterTo(counterTo-4)
    }
    }

  return (
    <div className="flex flex-row items-center space-x-1 mt-20 ">
      <Arrow onClick={prev_slide} />
      <div className="flex flex-wrap items-center justify-center">
        {data.slice(counter,counterTo).map((each, index) => (
        <CardPolaroid 
        key={index}
        src={each.photo} 
        alt={each.id} 
        text={each.city} 
        id={each.id}
        />
        ))}
      </div> 
        <Arrow onClick={next_slide} />
      </div> 
  )
}
