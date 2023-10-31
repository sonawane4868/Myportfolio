
import React, { useState } from 'react'
import './work.css'
export default function Work() {
  /*
  all 5 element have there own useState for div open and close and show and dshow these are function 
  in which we set the usestate value for open and close function open ans setOpen is the use state and
  for show and dshow show and setshow is the usestate ,
  now the use state names are changing acoording to the number such as 0,1,2,3,4 here its starts from 0 
  which is assigned to one div(auto-repair).
  
  
  
  
  */
 const [open, setOpen]=useState(false);
 const[show,setShow]=useState(false);
 const [open1, setOpen1]=useState(false);
 const[show1,setShow1]=useState(false);
 const [open2, setOpen2]=useState(false);
 const[show2,setShow2]=useState(false);
 const [open3, setOpen3]=useState(false);
 const[show3,setShow3]=useState(false);
 const [open4, setOpen4]=useState(false);
 const[show4,setShow4]=useState(false);
/* one */
 const oneOpen=()=>{
  
    setOpen(true);
    }
const oneClose=()=>{
      
      setOpen(false);
      }
const oneshow=()=>{
    setShow(true);
}
const oneDshow=()=>{
  setShow(false);
}

/* two */
const twoOpen=()=>{
  
  setOpen1(true);
  }
const twoClose=()=>{
    
    setOpen1(false);
    }
const twoshow=()=>{
  setShow1(true);
}
const twoDshow=()=>{
setShow1(false);
}

/*three */
const threeOpen=()=>{
  
  setOpen2(true);
  }
const threeClose=()=>{
    
    setOpen2(false);
    }
const threeshow=()=>{
  setShow2(true);
}
const threeDshow=()=>{
setShow2(false);
}

/*four */
const fourOpen=()=>{
  
  setOpen3(true);
  }
const fourClose=()=>{
    
    setOpen3(false);
    }
const fourshow=()=>{
  setShow3(true);
}
const fourDshow=()=>{
setShow3(false);
}

/*five */
const fiveOpen=()=>{
  
  setOpen4(true);
  }
const fiveClose=()=>{
    
    setOpen4(false);
    }
const fiveshow=()=>{
  setShow4(true);
}
const fiveDshow=()=>{
setShow4(false);
}
  return (
    <div className='work mx-0 container-fluid'>
      <h1 className='heading text-white mt-4 mb-3    mx-auto text-center'  ><span className='span'>W</span>O<span className='span'>R</span>K</h1>

        

      <div className=' d1 h text-center' onMouseOver={oneOpen} onMouseOut={oneClose}><span className='span fs-2 p-2' >1</span>
     {open && (<div ><h4 className='text-white text-center i heading3'  >AUTO-REPAIR</h4>
     <a href='https://sonawane4868.github.io/AutoRepair/' target="_blank" rel="noreferrer"><img src='./web1.png' className='webimg' data-aos="fade-up" data-aos-delay="700"/></a>
    </div>)}
     {show && (<h5 className='heading text-white fs-6' >A<span className='span'>U</span>T<span className='span'>O</span>R<span className='span'>E</span>P<span className='span'>A</span>I<span className='span'>R</span></h5>)}
      </div> 


      
      <div className=' d2 h text-center' onMouseOver={twoOpen} onMouseOut={twoClose} ><span className='span fs-2 p-2 '>2</span>
      {open1 && (<div><h4 className='text-white text-center heading3 i'   >FOODHUT</h4>
      <a href='https://sonawane4868.github.io/FOODhutt/' target="_blank" rel="noreferrer"><img src='./web2.png' className='webimg' data-aos="fade-up" data-aos-delay="700"/></a>
    </div>)}
    {show1 && (<h5 className='heading text-white fs-6' >F<span className='span'>O</span>O<span className='span'>D</span>H<span className='span'>U</span>T</h5>)}
      </div>



      <div className=' d3 h text-center' onMouseOver={threeOpen} onMouseOut={threeClose}><span className='span fs-2 p-2 '>3</span>
      {open2 && (<div><h4 className='text-white text-center i heading3'   >ARRDROIT</h4>
      <a href='https://sonawane4868.github.io/ARRdroit/' target="_blank" rel="noreferrer"><img src='./web3.png' className='webimg' data-aos="fade-up" data-aos-delay="700"/></a>
    </div>)}
    {show2 && (<h5 className='heading text-white fs-6' >A<span className='span'>R</span>R<span className='span'>D</span>R<span className='span'>O</span>I<span className='span'>T</span></h5>)}
      </div>




      <div className=' d4 h text-center' onMouseOver={fourOpen} onMouseOut={fourClose}><span className='span fs-2 p-2 '>4</span>
      {open3 && (<div ><h4 className='text-white text-center i heading3'  >DIGITAL AGENCY</h4>
      <a href='https://sonawane4868.github.io/DigitalAgency/' target="_blank" rel="noreferrer"><img src='./web4.png' className='webimg' data-aos="fade-up" data-aos-delay="700"/></a>
    </div>)}
    {show3 && (<h5 className='heading text-white fs-6' >D<span className='span'>I</span>G<span className='span'>I</span>T<span className='span'>A</span>L<span className='span'>A</span>G<span className='span'>E</span>N<span className='span'>C</span>Y</h5>)}
      </div>


    
      <div className=' d5 h text-center' onMouseOver={fiveOpen} onMouseOut={fiveClose}><span className='span fs-2 p-2 '>5</span>
      {open4 && (<div ><h4 className='text-white text-center i heading3' >REACTCALCULATOR</h4>
      <a href='https://sonawane4868.github.io/Reactcalculator/' target="_blank" rel="noreferrer"><img src='./web5.png' className='webimg' data-aos="fade-up" data-aos-delay="700"/></a>
    </div>)}
    {show4 && (<h5 className='heading text-white fs-6' >R<span className='span'>E</span>A<span className='span'>C</span>T<span className='span'>C</span>A<span className='span'>L</span>C<span className='span'>U</span>L<span className='span'>A</span>T<span className='span'>O</span>R</h5>)}
      </div>


       <div className='show mx-auto  text-center w-90 px-0'>
        <h1 className='my-4 wrk  w1'  onMouseOver={oneshow} onMouseOut={oneDshow} >AUTO-REPAIR</h1>
        <h1 className='my-4 wrk w2'  onMouseOver={twoshow} onMouseOut={twoDshow}>FOOD-HUT</h1>
        <h1 className='my-4 wrk w3'  onMouseOver={threeshow} onMouseOut={threeDshow}>ARR-DROIT</h1>
        <h1 className='my-4 wrk w4'  onMouseOver={fourshow} onMouseOut={fourDshow}>DIGITAL AGENCY</h1>
        <h1 className='my-4 wrk w5'  onMouseOver={fiveshow} onMouseOut={fiveDshow}>REACTCALCULATOR</h1>
      </div> 
      
      
      
    </div>
  )
}
