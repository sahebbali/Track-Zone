import React from 'react';
 import ClockListItem from './clock-listitem';
 import classes from '../../style/index.module.css'

const ClockList = ({clocks, localClock, updateClock, deleteClock}) => {
	return <div>
		<h3>Other Clocks</h3>
		<hr></hr>
		{ClockList.length === 0 ? (
			<p>There is no clock Please Create a Clock</p>
		) : (
			<div className={classes.container}> 
				{
					clocks.map((clock)=>(
						<ClockListItem 
							key={clock.id}
							clock={clock}
							localClock = {localClock}
							updateClock ={updateClock}
							deleteClock ={deleteClock}
						/>
					))
				}
			</div>
		)}
	</div>;
};

export default ClockList;
