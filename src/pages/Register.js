import React from 'react'

function Register() {
  return (
    <div className='flex items-center justify-center p-10 h-full' style={{backgroundImage: `url("https://media.istockphoto.com/photos/dumbbells-and-kettlebells-on-a-floor-bodybuilding-equipment-fitness-picture-id1307360297?k=20&m=1307360297&s=170667a&w=0&h=aRkT_smYFrXxjAK8ahmXCyVD_vESyYltkipD9qjjEw8=")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    width:'100vw',
    height:'100vh'
    }}> {/* The background */}
        <form className='flex flex-col items-center justify-center bg-white md:w-2/4 md:h-2/4 rounded'> {/*box around the form */}
            <div> {/*  The Register title */}
                <h1 className='text-3xl'>Register</h1>
            </div>
            <div className='md:max-w-3/4 text-xl '> {/* Box for the elements of the form */}             
                <div className='flex flex-col md:flex-row md:justify-between p-2 md:w-2/4'> {/* This will be username and password */}
                    <div className='flex flex-col p-2'> {/* One box for username */}
                        <label className='text-left'>Username</label>    
                        <input className='bg-gray-400 rounded' type="text" placeholder='Username123'></input>
                    </div>
                    <div className='flex flex-col p-2'> {/* One box for password */}
                        <label className='text-left'>Password</label>    
                        <input className='bg-gray-400 rounded placeholder-black' type="text" placeholder='************'></input>
                    </div>
                </div>
                <div className='w-full' > {/* This is for email address */}
                    <div className='flex flex-col p-2 '> {/* One box for username */}
                        <label className='text-left'>Email Address</label>    
                        <input className='bg-gray-400 rounded' type="text" placeholder='Username123'></input>
                    </div>
                </div>
            </div>
        </form>        
    </div>
  )
}

export default Register