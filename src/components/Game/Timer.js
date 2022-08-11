import React, { Fragment, useEffect, useState } from "react";

function Timer({ isGameOver }) {
  const [timer, setTimer] = useState(0);

  function formatTime(time) {
    const getSeconds = `0${Math.round(time % 60)}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  }

  useEffect(() => {
    let interval;

    if (!isGameOver) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (isGameOver) {
      clearInterval(interval);
      setTimer(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isGameOver]);

  return <Fragment>{formatTime(timer)}</Fragment>;
}

export default Timer;
