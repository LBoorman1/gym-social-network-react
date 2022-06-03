import React from 'react'
import { HomeIcon, AdjustmentsIcon, UserIcon } from '@heroicons/react/solid'
import NavBarRow from './NavBarRow'


function NavBar() {
  return (
    <div className='sticky top-0 flex justify-evenly w-100 px-5 py-5 bg-gray-100'>
        <NavBarRow name='Feed' Icon={HomeIcon}/>
        <NavBarRow name='User' Icon={UserIcon}/>
        <NavBarRow name='Settings' Icon={AdjustmentsIcon}/>
    </div>
  )
}

export default NavBar