import { formatDistance } from "date-fns";
import useClock from "../../hooks/useClock";
import ClockActions from "../share/clock-actions";
import ClockDisplay from "../share/clock-display";
import useTimer from "../../hooks/useTimer";
import classes from '../../style/index.module.css'
import { useState } from "react";
import { generate } from "shortid";
import EventForm from "../share/clock-form/eventForm";


const ClockListItem = ({localClock,clock,updateClock, deleteClock})=>{
    const [addEvent, setAddevent] = useState(false);
    const [events, setEvents] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [selectData, setSelectData] = useState({});
    const { date } = useClock(clock.timezone, clock.offset);
    const timer = useTimer(date);

    const updateEvent =(event)=>{
        event.id = generate();
        setEvents([...events, event]);
    };
    const eventUpdate=(Event, id)=>{
        const updateEvents = events.map((event)=>{
            console.log("event:", event.id);
            console.log("Event:", Event.id);
            if(event.id === Event.id)
            {
                console.log("Its True----");
                return Event;
            }
            return event;
        });
        setSelectData(Event);
        setEvents(updateEvents);
        setIsEdit(!isEdit);
        
    };

    const eventDelet=(id)=>{
        console.log("event Delete");
        const updateEvents = events.filter((event) => event.id !== id);
        setEvents(updateEvents);
    };

    const tagol= (bool)=>{
        setAddevent(!bool);
        setIsEdit(!bool);
    };

    if(!date || !timer ) return null;
    return(
     <div className={classes.container}>
           <div className={classes.listcard}>
            <ClockDisplay 
                date = {timer}
                offset={clock.offset}
                timezone={clock.timezone}
                title={clock.title}
            />
			<h3>Time difference: {formatDistance(localClock, timer)}</h3>
            <button className={classes.Ebtn} onClick={(e)=>setAddevent(!addEvent)}>Add Events</button>
            {
                addEvent && (
                    <EventForm  updateEvent={updateEvent} tagol={tagol} />
                )
            }
             {events.length > 0 && (
                 <div>
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Time</th>
                        </tr>
                        {
                            events.map((event)=>(
                                <tr key={event.id}>
                                    <td>{event.title}</td>
                                    <td>{event.location}</td>
                                    <td>{event.time}</td>
                                    <td><button className={classes.Edbtn} onClick={(e)=>eventUpdate(event, event.id)}>Edit</button></td>
                                    <td><button className={classes.Dbtn} onClick={(e)=>eventDelet(event.id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </table>                        
                </div>
            )}
             {isEdit && (<div>
                <EventForm
                        
                        updateEvent={updateEvent}
                        tagol={tagol}
                        isEdit={isEdit}
                        eventUpdate={eventUpdate}
                        selectData = {selectData}
                     />
             </div>)
            }
            <ClockActions 
              clock={clock}  
              updateClock={updateClock}
              deleteClock= {deleteClock}

            />
        </div>
     </div>
    );
};

export default ClockListItem;