import React from 'react';

export default function Article({
  flags,
  name, 
  region,
  population, 

}) {
  return ( 
    <>
  <article>
  <img src={flags.svg}/>
    <h2>
    {name.common}
    </h2>
    <ul>
      <li>Population: {population.toLocaleString()}</li>
      <li>Region: {region}</li>
    </ul>
  </article> 
  </>
); 
}
