
// import './App.css'
import LocalClock from "./components/local-clock/index"
import ClockList from "./components/clock-list/index"
import {generate} from "shortid"
import { useState } from "react";

const LOCAL_CLOCK_INIT = {
	title: 'My Clock',
	timezone: '',
	offset: 0,
	date: null,
};

function App() {
	const [localClock, setLocalClock] = useState({...LOCAL_CLOCK_INIT});
	const [clocks, setClocks] = useState([]);
	const updateLocalClock = (data) => {
		setLocalClock({
			...localClock,
			...data,
		});
	};
const createClock = (clock) =>{
	clock.id = generate();
	setClocks([...clocks, clock]);
};

const updateClock = (updateClock)=>{
	const updateClocks = clocks.map((clock)=>{
		if(clock.id === updateClock.id)
		{
			return updateClock;
		}
		return clock;
	});
	setClocks(updateClocks);
};
const deleteClock =(id)=>{
	const updatesClocks = clocks.filter((clock) => clock.id !== id);
	setClocks(updatesClocks);
}
console.log(clocks);
  return (
    <div className="App">
      <LocalClock 
	  clock ={localClock} 
	  updateClock = {updateLocalClock}
	  createClock ={createClock}
	   />
      <ClockList 
	  clocks ={clocks}
	  localClock={localClock.date}
	  updateClock={updateClock}
	  deleteClock = {deleteClock}
	  />
        
    </div>
  )
}

export default App
