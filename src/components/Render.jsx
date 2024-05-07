import React from 'react'
import Brewscard from './Brewscard'

function Render({breweries}) {
  const brew = breweries.map((brew) =>{
    return <Brewscard breweries={brew}/>
    }
  )

  return (
    <div className='grid grid-cols-4 gap-4'>
    {brew}
    </div>
  )
}

export default Render