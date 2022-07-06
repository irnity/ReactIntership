import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import TimeView from './TimeView';

function Time() {
  const [currentSecond, setCurrentSecond] = useState(0);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const addSecondInterval = setInterval(() => {
      setCurrentSecond(currentSecond + 1);
    }, 1000);

    return () => {
      clearInterval(addSecondInterval);
    };
  });

  return <TimeView currentSecond={currentSecond} theme={theme} />;
}

export default Time;
