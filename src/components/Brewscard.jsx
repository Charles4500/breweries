import React from 'react'

function Brewscard({breweries}) {
  return (
    <div className="shadow-xl  ">
      <div className="w-full place-items-center">
    
<h4>{breweries.name}</h4>
    </div>
    </div>
  )
}

export default Brewscard;