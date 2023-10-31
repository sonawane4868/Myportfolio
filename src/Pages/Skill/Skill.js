import React from 'react'
import './skill.css'
export default function Skill() {
  return (
    <div className='skill mx-0 container-fluid'>
      <div className='row w-90'>
        <div className='col-lg-6 col-md-6 col-sm-12 ' >
            <h1 className='heading text-white  my-5' ><span className="span">S</span>K<span className='span'>I</span>L<span className='span'>L</span>S</h1>
            <p className='  mt-5 skillw'>I have created successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is Ecommerce  ,front-end development, HTML, CSS, JS, Bootstrap, React.js , Three.js ,Java ,spring boot
                , building small and medium web apps, custom plugins, features, animations, and coding interactive layouts. I have worked in Saas Based platform too.</p>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12  mx-auto ' >
            
        <h3 className='heading3 mt-5 mb-3 '>HTML</h3>
        <div className='linebox1  ' >
        <div className='line1' ></div>
        </div>

        <h3 className='heading3 mt-5 mb-3'>CSS</h3>
        <div className='linebox2  ' >
        <div className='line2 bg-sucess' ></div>
        </div>

        <h3 className='heading3 mt-5 mb-3'>JAVASCRIPT</h3>
        <div className='linebox3' >
        <div className='line3 bg-sucess' ></div>
        </div>

        <h3 className='heading3 mt-5 mb-3'>BOOTSTRAP</h3>
        <div className='linebox4' >
        <div className='line4 bg-sucess' ></div>
        </div>

        <h3 className='heading3 mt-5 mb-3'>REACT.JS</h3>
        <div className='linebox5' >
        <div className='line5 bg-sucess' ></div>
        </div>

        </div>
      </div>
    </div>
  )
}
