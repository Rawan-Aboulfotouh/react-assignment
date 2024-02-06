import React from 'react'
import img1 from '../Assets/avataaars.svg'

export default function Home() {
  return (

    
      <div >
 
    
    <div className='d-felx justify-content-center align-items-center '>
    <div className=' background m-auto w-100  py-5'>
        <img src={img1} className='Photo d-flex justify-content-center align-items-center m-auto '/>
        <div className='m-auto text-center'>
            <p className='fw-bold text-white fs-1 text-center my-4'>REACT FRAMEWORK</p>
            <div>
            <p className='fw-bold text-white fs-5 text-center my-4 d-inline '>_________________</p>
            <i class="fa-solid fa-star d-inline fs-6 mx-4 text-white"></i>
            <p className='fw-bold text-white fs-5 text-center my-4 d-inline'>_________________</p>
            </div>
            
            <p className=' text-white fs-5 text-center my-4'>Graphic Artist - Web Designer - Illustrator</p>
            
        </div>
        
       
      </div>
      
    </div>
   

    
     
      </div>
    )
  }

