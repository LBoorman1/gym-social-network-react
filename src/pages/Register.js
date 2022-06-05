import React from 'react'

function Register() {
  return (
    <div className='flex items-center justify-center p-10 md:bg-slate-400 h-full'> {/* The background */}
        <form className='flex flex-col items-center justify-center bg-white md:w-2/4 md:h-2/4 rounded'> {/*box around the form */}
            <div className=' flex flex-col md:flex-row md:justify-between p-2 md:w-2/4'> {/* This will be username and password */}
                <div className='flex flex-col p-2'> {/* One box for username */}
                    <label className='text-left text-pink-700'>Username</label>    
                    <input className='bg-gray-400 text-pink-500 rounded' type="text" placeholder='Username123'></input>
                </div>
                <div className='flex flex-col p-2'> {/* One box for password */}
                    <label className='text-left'>Password</label>    
                    <input className='bg-gray-400 rounded' type="text" placeholder='************'></input>
                </div>
            </div>
            <div className='w-full' > {/* This is for email address */}
                <div className='flex flex-col p-2 '> {/* One box for username */}
                    <label className='text-left text-pink-700'>Email Address</label>    
                    <input className='bg-gray-400 text-pink-500 rounded' type="text" placeholder='Username123'></input>
                </div>
            </div>
        </form>        
    </div>
  )
}

export default Register