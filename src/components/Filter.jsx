import React from 'react'

function Filter() {
  
  return (
    <div className=' flex justify-center  flex flex-row  space-x-4 mt-3'>
      <input type="radio" name="" id="City" />
      <label for="html">City</label><br/>
      <input type="radio" name="" id="Name" />
      <label for="html">Name</label><br/>
      <input type="radio" name="" id="State" />
      <label for="html">State</label><br/>
      <input type="radio" name="" id="Type" />
      <label for="html">Type</label><br/>
      <button className='bg-amber-700 border  rounded-md hover:border-slate-400'>Get Random Brewery</button>
    </div>
  )
}

export default Filter;