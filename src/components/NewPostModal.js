import React, {useEffect} from 'react'

function NewPostModal({show, setShow}) {

  useEffect(() => { if(show) { document.body.style.overflow = 'hidden' } else { document.body.style.overflow = 'unset' } }, [show]);

  if(!show) {
    return null
  }
  else {
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-modal-bg flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center bg-white rounded'>
                <div className='grid grid-cols-2 text-xl pt-5'>
                    <h1 className='justify-self-start'>Create Post</h1>
                    <button className='justify-self-end' onClick={() => setShow(false)}>X</button>
                </div>
                <div className='flex flex-col md:max-w-3/4 text-xl p-10'>
                    <label>Message</label>
                    <input 
                        className='bg-gray-400 rounded placeholder-gray-300' 
                        type="text" 
                        required
                    />
                </div>
            </div>
        </div>
    );
  }
}

export default NewPostModal