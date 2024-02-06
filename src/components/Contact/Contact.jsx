
import React from 'react'

export default function Contact() {
  return (
    <div >
 
    
   
    <div className=' bg-white m-auto w-100  py-5'>
        
        <div className='m-auto text-center'>
            <p className='fw-bold text-balck fs-1 text-center '>CONTACAT SECSSION</p>
            <div>
            <p className='fw-bold text-black fs-2 text-center  d-inline '>______</p>
            <i class="fa-solid fa-star d-inline fs-3 mx-4 text-black"></i>
            <p className='fw-bold text-black fs-2 text-center  d-inline'>______</p>
            </div>
            
            <form >
                <input className='form-control w-50 m-auto mt-5 border-top-0 border-start-0 border-end-0 ' placeholder='userName'/>
                <input className='form-control w-50 m-auto mt-5 border-top-0 border-start-0 border-end-0' placeholder='userAge'/>
                <input className='form-control w-50 m-auto mt-5 border-top-0 border-start-0 border-end-0' placeholder='userEmail'/>
                <input className='form-control w-50 m-auto mt-5 border-top-0 border-start-0 border-end-0' placeholder='userPassword'/>
                <button className='btn background text-white mt-3  '>Send message</button>
                
            </form>
            
        </div>
        
       
      
      
    </div>
    

    
     
      </div>
  )
}

