import React from 'react'

function Brewscard({breweries}) {
  return (
    <div className="shadow-xl bg-cyan-500">
      <div className="w-full place-items-center ">
    
<h4>{breweries.name}</h4>
<h4>{breweries.address_1}</h4>
<h4>{breweries.brewery_type}</h4>
    </div>
    </div>
  )
}

export default Brewscard;