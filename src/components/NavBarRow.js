import React from 'react'

function NavBarRow({name, Icon}) {
  return (
    <div className='group flex flex-col items-center cursor-pointer hover:opacity-50'>
        <Icon className='h-10 w-10'/>
        <p className='align-middle'>{name}</p>
    </div>
  )
}

export default NavBarRow