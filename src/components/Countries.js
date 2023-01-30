import React, {useState, useEffect} from 'react';
import Article from "./Article";

export default function Countries() {
   const [countries, setCountries] = useState([])

   useEffect(() => {
      const getCountries = async () =>{
         try {
         const res = await fetch ("https://restcountries.com/v3.1/all");
         const data = await res.json();
         setCountries(data);
         
       }  catch (error) {
         console.error(error);
         }
      };
      getCountries();
     }, []);

   return ( 
         <>
            {countries.map((country) => (
              <Article key={country.name.common} {...country} />
            ))}        
        </>
   );
}