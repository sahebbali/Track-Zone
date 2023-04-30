import { format } from "date-fns";
import React from "react";
import classes from '../../../style/index.module.css';
const ClockDisplay = ({date,title,timezone,offset})=>{
    let offsetHr = offset / 60;
    return(
        <div >
            <h1>Title: {title}</h1>
            <h3>{format(date, 'yyyy-MM-dd  hh:mm:ss aaa')}</h3>
            <p>
                {timezone} {"  "} {" "}
                {offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}
            </p>

        </div>
    )

};
export default ClockDisplay;