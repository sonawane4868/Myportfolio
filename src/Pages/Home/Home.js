
import'./home.css'

import Typewriter from 'typewriter-effect';
import { useState ,useRef ,useEffect } from 'react';
export default function Home() {
 
  const [isScrolling, setIsScrolling] = useState(true);
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const [isBtn, setIsBtn] = useState(false);
  const [isClick, setIsClick] = useState(true);
  const [isClose, setIsClose] = useState(true);
  const [isArrow, setIsArrow] = useState(false);

  const scrollToBottom = () => {
    setIsScrolling(true);

    const targetScrollY = window.scrollY + 700; // Scroll down by 500 pixels
    const speed = 10; // You can adjust the speed (higher number for slower scroll)

    const scrollStep = () => {
      if (window.scrollY < targetScrollY && isScrolling) {
        window.scrollTo(0, window.scrollY + speed);
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  const stopScrolling = () => {
    setIsScrolling(false);
  };


  const videoRef = useRef(null);


    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play();
        setTimeout(() => {
          setIsBubbleVisible(true);
          setTimeout(() => {
            setIsBubbleVisible(false);
          }, 1500); // Set a delay of 1 second for the bubble to disappear
        }, 5000);
        setTimeout(() => {
          setIsClick(false);
        }, 1000);
        setTimeout(() => {
          setIsBtn(true);
        }, 10000);
        setTimeout(() => {
          setIsArrow(true);
        }, 12000);
      }

    }

    const closeDiv = () => {
      setTimeout(() => {
        setIsClose(false);
      }, 1500);
      setTimeout(() => {
        setIsBtn(false);
      }, 1000);
      setTimeout(() => {
        setIsArrow(false);
      }, 1000);
    }
    



   
  return (
    
    <div className='container-fluid  py-5 mx-0 px-0 h-100vh'>
    

     <div className='text-center hh '>
    <h1 className='text-white text-center heading mb-0 hi' >Hi,</h1>
    <h1 className='text-white text-center heading '>i'AM <span className='span'>A</span>D<span className='span'>I</span>T<span className='span'>Y</span>A</h1>
    <h2 className='heading2 text-center'>
    <Typewriter 
  options={{
    strings: ['REACT.JS DEVELOPER','FRONTEND DEVELOPER','WEB DEVELOPER','DESIGNER'],
    delay:200,
    autoStart:true,
    pauseFor:1500,
    loop:true,
    
  }}
/></h2>
<div className='scroll d-flex flex-column'>
<button className='btn btnnn text-center mx-auto my-0'  
    onMouseDown={scrollToBottom}
      onMouseUp={stopScrolling}
      onTouchStart={scrollToBottom}
      onTouchEnd={stopScrolling}
      onClick={scrollToBottom} ><img src='./arrow.png' className='btnimg'/></button>
<span className='text-light  heading3  sss my-0'  >scroll down</span>



</div>

</div>
  {isClose && (<div className='start-btn'>
  {isClick && (<a class="box__link button-animation"  onClick={playVideo}>
  Click Me
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</a>)}
<div className='video-intro'>

{isBubbleVisible && ( <div id="speech-bubble">
		<div id="bub-part-a"></div>
		<div id="bub-part-b"></div>
		<div id="bub-part-c"></div>
		<div id="speech-txt">It is too dark here!</div>
		<div id="bub-part-c"></div>
		<div id="bub-part-b"></div>
		<div id="bub-part-a"></div>

		<div id="speech-arrow">
			<div id="arrow-w"></div>
			<div id="arrow-x"></div>
			<div id="arrow-y"></div>
			<div id="arrow-z"></div>
		</div>
</div> )}
<video width="auto" height="390"   className='video-inner' ref={videoRef}>
      <source src="./malepopup.webm" type="video/mp4"/>
     </video>

</div>

  </div>)}
  {isBtn && (<div class="toggle" >
    <input type="checkbox"  onChange={closeDiv}/>
    <label></label>
</div>)}

{isArrow && (<div class="arrow" >
    <img src='./r-arrow.png' className='img-fluid '/>
</div>)}



   
    </div>
   
  )
  
}
