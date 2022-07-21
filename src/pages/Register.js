import React, { useState } from 'react'
import axios from 'axios';
function Register() {

    const [data, setData] = useState({
        username: "",
        password: "",
        emailAddress: ""
    });

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const url = "http://localhost:5000/api/users";
            const {data:res} = await axios.post(url, data);
            console.log(res.message);
        } catch (error) {
            console.log(error.message);
        }
    };

  return (
    <div className='flex items-center justify-center p-10 h-full' style={{ 
        backgroundImage: `url("https://media.istockphoto.com/photos/dumbbells-and-kettlebells-on-a-floor-bodybuilding-equipment-fitness-picture-id1307360297?k=20&m=1307360297&s=170667a&w=0&h=aRkT_smYFrXxjAK8ahmXCyVD_vESyYltkipD9qjjEw8=")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        width:'100vw',
        height:'100vh'
    }}> {/* The background */}
        <form className='flex flex-col items-center justify-center bg-white rounded' onSubmit={handleSubmit}> {/*box around the form */}
            <div className='pt-5'> {/*  The Register title */}
                <h1 className='text-3xl'>REGISTER</h1>
            </div> 
            <div className='flex flex-col md:max-w-3/4 text-xl p-10'> {/* Box for the elements of the form */} 
                           
                <div className='flex flex-col md:flex-row md:justify-between p-2 md:w-2/4'> {/* This will be username and password */}
                    <div className='flex flex-col pr-2'> {/* One box for username */}
                        <label className='text-left'>Username</label>    
                        <input 
                            className='bg-gray-400 rounded placeholder-gray-300' 
                            type="text" 
                            placeholder='Username123'
                            name='username' 
                            onChange={handleChange}
                            value={data.username}
                            required
                        />
                    </div>
                    <div className='flex flex-col'> {/* One box for password */}
                        <label className='text-left'>Password</label>    
                        <input 
                            className='bg-gray-400 rounded shadow-lg placeholder-gray-300 no-underline' 
                            type="text"    
                            placeholder='************' 
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            required
                        />
                    </div>
                </div>
                <div className='w-full' > {/* This is for email address */}
                    <div className='flex flex-col p-2 '> {/* One box for username */}
                        <label className='text-left'>Email Address</label>    
                        <input 
                            className='bg-gray-400 rounded placeholder-gray-300 no-underline' 
                            type="text" 
                            placeholder='Email Address'
                            name='emailAddress'
                            onChange={handleChange}
                            value={data.emailAddress}
                            required
                        />
                    </div>
                </div>
            </div>
            <button type='submit' className='bg-gray-400 rounded m-5 p-2'>
                Submit
            </button>
        </form>        
    </div>
  )
}

export default Register