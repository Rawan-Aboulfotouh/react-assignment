
import React, { Component } from 'react'
import img2 from '../Assets/poert1 (1).png'
import img3 from '../Assets/port2 (1).png'
import img4 from '../Assets/port3.png'




export default class Portfolio extends Component {
  render() {
    return (
      <div >
  
    

    <div className='container my-5'>
        <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='member1 ' >
                    <img src={img2} className='w-100 rounded-3  my-2'/>    
                </div>
                
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <div>
                    <img src={img3} className='w-100 rounded-3  my-2'/>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <div>
                    <img src={img4} className='w-100 rounded-3  my-2'/>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <div>
                    <img src={img2} className='w-100 rounded-3  my-2'/>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <div>
                    <img src={img3} className='w-100 rounded-3  my-2'/>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <div>
                    <img src={img4} className='w-100 rounded-3  my-2'/>
                </div>
            </div>
        </div>

    </div>
    
    
      
   
    
    

    
     
      </div>
    )
  }
}
