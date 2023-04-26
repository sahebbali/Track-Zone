import React, { useEffect } from 'react';
import useClock from '../../hooks/useClock';
import ClockDisplay from '../share/clock-display';
import ClockActions from '../share/clock-actions';
import useTimer from '../../hooks/useTimer';

const LocalClock = ({clock, updateClock, createClock}) => {
	const {date, offset, timezone} = useClock(clock.timezone,clock.offset);
	const timer  = useTimer(date);
	useEffect(()=>{
		updateClock({
			date,
			timezone,
			offset
		});
	},[date]);

	return (
		<div>
			{timer && (
				<ClockDisplay
				date={timer}
				offset={offset}
				timezone={timezone}
				title={clock.title}
				/>
			)}
			<ClockActions 
			clock={clock} 
			updateClock={updateClock} 
			local= {true}
			createClock = {createClock}
			/>
		</div>
	);
};

export default LocalClock;
