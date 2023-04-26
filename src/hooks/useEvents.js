import React, { useState } from 'react'
import shortid from 'shortid';

function useEvents() {
    const [state, setState] = useState({});

    const getEventByClockId =(clockId) =>{
        return Object.keys(state).filter((item) => item.startsWith(clockId));
    };

    const getEvents = (isArray = false) =>{
        if(!isArray)  return state;

        return Object.values(state)
    };

    const addEvents = (event) =>{
        event.id = shortid.generate();
        const { id, clockId} = event;

        setState((prev)=>({
            ...prev,
            [`${clockId}|${id}`]: event;
        }));
        
        return event;
    }




  return {
    getEventByClockId,
    getEvents,
  }
}

export default useEvents
