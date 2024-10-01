import { Typography} from '@material-ui/core';
import { Card, CardContent, Button } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import {formatTime} from '../../utils';
import './styles.css';

const OptionalTimer = (props) => {
	const {isReveal, isActive, handleStart, handlePause, isPaused, timer} = props
  return (
		<Card raised sx={{ minWidth: '100%', borderRadius:'15px' }}>
		<CardContent className="optionalTimer" >
			<div className='optionalTimerText'>
				<TimerIcon fontSize="large"/>
			</div>
			<Typography className="optionalTimerText" variant="h6">{formatTime(timer, 'digital')}</Typography>
			<div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
				<Button color='secondary' variant='contained' size="small" disabled={isReveal || isActive} onClick={handleStart}>{isPaused && timer !== 0 ? 'RESUME' : 'START'}</Button>
				<Button color='secondary' variant='contained' size="small" disabled={isPaused || !isActive} onClick={handlePause}>PAUSE</Button>
			</div>
		</CardContent>
	</Card>
	)

}

export default OptionalTimer;