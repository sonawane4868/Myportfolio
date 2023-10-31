import React, { useRef } from 'react';

const FocusComponent = () => {
  const focusRef = useRef(null);

  const handleMouseMove = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    focusRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(190, 255, 255, 0.2), transparent 40%)`;
  };

  return (
    <div className="focus" ref={focusRef} style={{ width: '100vw', height: '100vh' }}>
      <p>Your content here</p>
      {/* You can place your other components/content here */}
      <div onMouseMove={handleMouseMove}></div>
    </div>
  );
};

export default FocusComponent;
