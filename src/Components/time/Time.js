import React, { useEffect, useState } from 'react';
import TimeView from './TimeView';

function Time() {
  const [currentSecond, setCurrentSecond] = useState(0);

  useEffect(() => {
    const addSecondInterval = setInterval(() => {
      setCurrentSecond(currentSecond + 1);
    }, 1000);

    return () => {
      clearInterval(addSecondInterval);
    };
  });

  return <TimeView currentSecond={currentSecond} />;
}

export default Time;
