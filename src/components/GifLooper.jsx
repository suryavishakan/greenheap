// GifLooper.jsx
import React, { useEffect, useRef, useState } from 'react';

const gifFiles = [
  'https://cdn-icons-gif.flaticon.com/11188/11188249.gif', 
  'https://cdn-icons-gif.flaticon.com/17507/17507026.gif',
  'https://cdn-icons-gif.flaticon.com/12420/12420698.gif'
];

const GifLooper = ({ interval = 9000 }) => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % gifFiles.length);
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [interval]);

  return (
    <img
      src={gifFiles[current]}
      alt="GIF Player"
      className='w-32 h-32 rounded-full border border-[#E8E3F4]'
    />
  );
};

export default GifLooper;
