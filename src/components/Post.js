import React from 'react'

function Post({user, likes, picture}) {
  return (
    <div className='py-10 border-b-2'>
        <p>{user}</p>
        <img className='min-h-max ' src={picture} alt=""/>
        <p>{likes}</p>
    </div>
  )
}

export default Post