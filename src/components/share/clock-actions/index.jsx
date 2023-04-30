import { useState } from "react";
import ClockForm from "../clock-form";


const ClockActions = ({local = false, clock, updateClock, createClock, deleteClock})=>{
    const [isEdit, setIsEdit] = useState(false);
    const [isCreate, setIsCreate] = useState(false);

    const handleClock = (values)=> {
        console.log(values);
        createClock(values);
        
    };

   
    const tagel = (edit) =>{
        setIsEdit(edit);
    };
    return(
        <div>
            <button className="btn" onClick={()=>setIsEdit(!isEdit)}> Edit</button> {" "}
            {local ? (<button className="btn" onClick={()=> setIsCreate(!isCreate)} >Create</button>) : (
            <button className="btn" onClick={() => deleteClock(clock.id)} >Delete</button>)
            }
            {
                isEdit && (
                    <>
                    <h3>Edit Clock</h3>
                       <ClockForm
                            values={clock}
                            title= {!local}
                            edit={true}
                            handleClock={updateClock}
                            tagel = {tagel}
                       />
                    </>
                )
            }
            {
                isCreate && (
                    <>
                    <h3>Create Clock</h3>
                    <ClockForm
                        handleClock={handleClock}
                     />
                    </>
                )
            }
        </div>

    );
};

export default ClockActions;