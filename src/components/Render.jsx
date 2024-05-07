import React from 'react'
import Brewscard from './Brewscard'

function Render({breweries}) {
  const brew = breweries.map((brew) =>{
    return <Brewscard breweries={brew}/>
    }
  )

  return (
    <div className='grid grid-cols-8 gap-4 mt-5'>
    {brew}
    </div>
  )
}

export default Render