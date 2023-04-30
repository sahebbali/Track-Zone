import React, { useState } from 'react'
import useEvents from '../../../hooks/useEvents';
import './form.css'
function eventForm({values= {title:'', location:'',time: '',}, isEdit,updateEvent,eventUpdate, tagol,selectData}) {
  console.log(values);
    const [events, setEvents] = useState(selectData || values);

    const handleChange =(e)=>{
        const {name, value} = e.target;
        setEvents((prev) =>({
            ...prev,
            [name]:value,
        }));

    };

    const handleSubmit = (e)=>{
        e.preventDefault();
       if(isEdit){
        eventUpdate(events);
       } else {
        if(!(events.title === "")){
         updateEvent(events)
       }
       }
        tagol(true);
    };
    
  return (
    <div>
      <form onSubmit={handleSubmit} >
      <div className='formhead'>
        <label className='etitle'>Event Title :</label>
        <input 
          className='einput'
            id='title'
            type="text"
            name='title'
            value={events.title}
            onChange={handleChange}
         />
      </div>
      <div className='formhead'>
        <label>Event Location :</label>
        <input 
          id='location'
            type="text"
            name='location'
            value={events.location}
            onChange={handleChange}
         />
      </div>
      <div className='formhead'>
        <label>Event Time :</label>
        <input 
        className='einput'
            id='time'
            type="time"
            name='time'
            value={events.time}
            onChange={handleChange}
         />
      </div>
      <div>
        <button className='Subbtn' type='onSubmit' >{isEdit ? 'Update' : 'Submit'}</button>
      </div>
      </form>
    </div>
  )
}

export default eventForm;
