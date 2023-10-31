import React, { useState, useEffect } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  return (
    <div className="cursor" style={{ left: position.x - 200, top: position.y - 200 }}></div>
  );
};

export default CursorEffect;
