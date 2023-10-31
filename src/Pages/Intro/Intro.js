import React, { useEffect } from 'react'
import './Intro.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';
export default function Intro() {
const navigate=useNavigate();
  useEffect(()=>{
    Aos.init();
  },[])

  const press=()=>{
    
    navigate('full');
  }
  

  return (
    <div className='intro' onAnimationEnd={press}>
      <h4 className='text-white he'><span className='span'>L</span>OA<span className='span'>D</span>IN<span className='span'>G</span>.<span className='span'>.</span>.</h4>
      <div className='linebox' >
        <div className='line' ></div>
      </div>
     

    </div>

  )
}
