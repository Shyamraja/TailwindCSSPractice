import React, {useState, UseEffect, useEffect} from 'react'
const url ="https://restcountries.com/v3.1/all";

const Countries = () => {
    const [countries, setCountries] = useState([])
    
    const fetchCountryData = async () =>{
       const response = await fetch(url)
       const countries = await response.json()
       setCountries(countries)
       console.log(countries)
       }
    useEffect(() => {
        fetchCountryData()
    }, [])

  return (
    <>
    {countries.map((country) =>{ 
       const { id } = country
       return <article key={id}>Country Info</article>

    } )}
    </>
  )
}

export default Countries