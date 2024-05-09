import React from 'react'

function Brewscard({breweries}) {
  return (
    <div className="shadow-xl bg-cyan-500 hover:bg-violet-600 active:bg-violet-700">
      <div className="w-full place-items-center ">
    
<h4>{breweries.name}</h4>
<h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>
{breweries.address_1}</h4>
<h4>{breweries.brewery_type}</h4>
    </div>
    </div>
  )
}

export default Brewscard;