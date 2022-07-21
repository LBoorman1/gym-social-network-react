import React, {useState} from 'react'
import Feed from '../components/Feed'
import NavBar from '../components/NavBar'

function Timeline() {

  const [show, setShow] = useState(false);

  return (

    <div>
      <NavBar setShow={setShow}/>
      <Feed show={show} setShow={setShow}/>
    </div>
    
  )
}

export default Timeline