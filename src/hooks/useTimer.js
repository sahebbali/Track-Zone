import { addSeconds } from 'date-fns';
import React, { useEffect, useState } from 'react'

function useTimer(date) {
    const [timer, setTimer] = useState(date);

    useEffect(()=>{
        setTimer(date)
    },[date]);

    let timerId = null;

    useEffect(()=>{
        if(!timer || timerId !== null) return ;
        timerId = setInterval(()=> {
            setTimer(addSeconds(timer, 1))
        }, 1000);
        return () => clearInterval(timerId);
    },[timer]);

  return timer;
};

export default useTimer;
