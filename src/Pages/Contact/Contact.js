import React, { useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {
const [input,setInput]=useState({
  fname:"",
  lname:"",
  number:"",
  email:"",
  message:"",
});

const Send=(e)=>{
  e.preventDefault();
  emailjs.sendForm("service_ocj25oe","template_08agi8b",e.target,'ZZeo8oNPrbycYmbbX');
  alert("thankyou will contact ASAP");
}



  
  return (
    <div className='contact mx-0 container-fluid'>
      <div className='row w-90'>
        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 '>
          <form className='mx-auto' onSubmit={Send}>
          <h1 className='heading text-white  my-5'><span className='span'>C</span>O<span className='span'>N</span>T<span className='span'>A</span>C<span className='span'>T</span> <span className='span'>M</span>E</h1>

            <input type='text' required maxLength={20} placeholder="FIRST NAME" className="in my-3 text-center w-50" name="fname" value={input.fname} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
            <input type='text' required maxLength={20} placeholder="LAST NAME " className="in my-3  text-center w-50" name="lname" value={input.lname} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} /><br/>
            <input type='number' required pattern="^[0-9]*[.,]?[0-9]*$"   placeholder="PHONE" className="in my-5  text-center w-50" name='number' value={input.number} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
            <input type='email' required  placeholder="EMAIL" className="in my-5  text-center w-50" name='email' value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} /><br/>
            <textarea type='text' required   placeholder="TYPE YOUR MESSAGE HERE.." className="in1 my-5  text-center  w-100  " name='message' value={input.message} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/><br/>
            <button className='btn my-4  btn-in' required type='submit'>Send</button>


            
          </form>
        </div>
        <div className='col-lg6 col-md-6 col-sm-12 col-xs-12 text-center ddi'>
          <div className='circles mx-auto'>
            <div className='a'></div>
            <div className='b'></div>
            <div className='c'></div>
            <span className='sp'>ff</span>
          </div><br/>
          <a  href='cv.pdf' download="cv.pdf"><button className='btn btn-in btt mx-auto bg-dark text-white' download="cv.pdf">Download CV</button></a>
        </div>
      </div>
    </div>
  )
}
