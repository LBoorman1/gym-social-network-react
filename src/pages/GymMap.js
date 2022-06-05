import React from 'react'
import Map from '../components/Map'
import NavBar from '../components/NavBar'

function GymMap() {
  return (
    <body id='gymmap'> {/* This is used to prevent window scrolling on the gym map page */}
    <div className=''>
      <NavBar />
      <Map />
    </div>
    </body>
  )
}

export default GymMap