import React from 'react';
import "./Ecom.css";
import { useState } from 'react';


export default function Ecom() {
    const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

  const handleMouseMove = (e) => {
    setMouseX(e.pageX - e.target.offsetLeft - width / 2);
    setMouseY(e.pageY - e.target.offsetTop - height / 2);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    const delay = setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
    setMouseLeaveDelay(delay);
  };

  const cardStyle = {
    transform: `rotateY(${mouseX / width * 30}deg) rotateX(${mouseY / height * -30}deg)`
  };

  const cardBgTransform = {
    transform: `translateX(${mouseX / width * -40}px) translateY(${mouseY / height * -40}px)`
  };

  const cardBgImage = {
    backgroundImage: `url(${dataImage})`
  };
  return (
    <div className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="card" style={cardStyle}>
        <div className="card-bg" style={{ ...cardBgTransform, ...cardBgImage }}></div>
        <div className="card-info">
          {/* Header and content slots go here */}
        </div>
      </div>
    </div>
  )
}
