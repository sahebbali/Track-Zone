import { useState } from 'react'
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
            [`${clockId}|${id}`]: event,
        }));
console.log(event);
        return event;
    };

    const deleteEvent =(id)=>{
        const events = {...state};
        delete events[id];
        setState(events);
    }
    

    const deleteEventByClock = (clockId) =>{
        const events = Object.keys(state).filter((item)=> !item.startsWith(clockId));

        setState(events);
    };
    const updateEvent = (updateEvent, id) =>{
    const events = {...state};
    events[id] = {
        ...events[id],
        ...updateEvent,
    };

    setState(events);
    };



  return {
    events: state,
    getEventByClockId,
    getEvents,
    addEvents,
    deleteEvent,
    deleteEventByClock,
    updateEvent
  };
};

export default useEvents;
