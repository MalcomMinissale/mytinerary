import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import axios from 'axios'
import apiUrl from '../apiUrl'
import CardPolaroid from '../components/CardPolaroid'
import CardCity from '../components/CardCity'
import ErrorCard from '../components/ErrorCard'

/* export default function Cities() {
  const [cities, setCities] = useState([])
  const [reEffect,setReEffect] = useState(true)
  const text = useRef()

  useEffect(
    ()=> {
      axios(apiUrl+'cities?city='+text.current.value)
        .then(res=>setCities(res.data.response))
        .catch(err=>console.log(err))
    }, [reEffect]
  )

  function handleFilter() {
    console.log(text.current.value)
    setReEffect(!reEffect)
  }

  return (
    <>
    <input ref={text} type='text' name='text' id='text' onKeyUp={handleFilter} className='bg-blue-200 rounded placeholder:pl-2' placeholder="Search City"/>
    {cities.map(each=><CardPolaroid key={each._id} src={each.photo} alt={each._id} text={each.city} id={each._id} />)}    
    </>
  )
}
 */

export default function Cities() {
  const [cities, setCities] = useState([])
  const [reEffect, setReEffect] = useState(true)
  const [error, setError] = useState(false)
  const text = useRef()


  useEffect(() => {
      axios(apiUrl + 'cities')
          .then((res) => {
              const search = text.current.value.trim().toLowerCase();
              const filteredCities = res.data.response.filter((city) => {
                  const cityName = city.city.toLowerCase();
                  return cityName.startsWith(search);
              });

              if (filteredCities.length === 0) {
                  setError(true);
              } else {
                  setError(false);
                  setCities(filteredCities);
              }
          })
          .catch((err) => {
              console.log(err);
              setError(true);
          });
  }, [reEffect]);

  function handleFilter() {
      setReEffect(!reEffect);
  }

  return (
<>      
          
            <input ref={text} type='text' name='text' id='text' onKeyUp={handleFilter} className='bg-blue-200 rounded placeholder:pl-2' placeholder="Search City"/>
          
          { error ? <ErrorCard /> :
                  <div>
                      {cities.map(each =>
                          <CardCity key={each._id} src={each.photo} alt={each._id} text={each.city} id={each._id}/>
                      )
                      }
                  </div>
          }
  </>    
  )
  
}