import React from 'react';
import { useEffect } from 'react';
import Home from '../Home/Home';
import Mymain from '../Mymain/Mymain';
import Skill from '../Skill/Skill';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import './full.css';
import CursorEffect from '../../Cursour';

import Aos from 'aos';

export default function Full() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div>
     <CursorEffect />
      <Home/>
      <Mymain/>
      <Skill/>
      <Work/>
      <Contact/>
      
      
    </div>
  )
}
