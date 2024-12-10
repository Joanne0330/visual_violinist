import { Grid, Typography, Tooltip, IconButton } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import './styles.css';
import {useState} from 'react';
import InvisibleMidiSound from '../InvisibleMidiSound';
import { midiPlaySound } from '../../hooks/midiPlaySound';
import { MIDI_VIOLIN_SOUND_CHOICE } from '../../utils';

const MIDI_LENGTH = 0.5

const FirstPositionFingerboard = (props) => {
	const {position, setPosition, isSmallScreen, isReveal} = props;
	const [isToolTipOpen, setIsToolTipOpen] = useState(false);

	const buttonSelected = (num) => {
		if(num === position) {
				return !isReveal ? '#9c27b0' : '#B22222';
		} 
	}

	const toolTipText = [
		`Below is a representation of your violin fingerboard in the first postion where you can click to choose where you think this note can be played on the fingerboard.`,
		`The top of this fingerboard being the furthese away from you and the bottom being closest to you.`,  
		`${isSmallScreen ? `The line from left to right labled 1st means the usual 1st finger line and the line labled 3rd means the usual 3rd finger line. They are there to give you visual reference.` : `The first finger line and the third finger line are there to give you visual reference.`}`, 
		`If you think a note can be played with an open string, you can choose G, D, A or E on the top of the fingerboard.`]


	const onFingerboardClick = (position, octave, number) => {
		setPosition(position);
		midiPlaySound(octave, number, MIDI_VIOLIN_SOUND_CHOICE, MIDI_LENGTH)
	}

	return (
		<>
			<InvisibleMidiSound soundChoices={[MIDI_VIOLIN_SOUND_CHOICE]}/>
			<Typography id="instructionText">{!isReveal ? 'Step 3: Where is this note on your fingerboard?' : 'You can find this note here on the fingerboard:'}
				<Tooltip 
					arrow
					title={toolTipText.map((line,id) => (
						<Typography variant="body2" key={id} style={{marginBottom: '10px'}}>{line}</Typography>
					))}
					PopperProps={{
						disablePortal: true,
					}}
					onClose={() => setIsToolTipOpen(false)}
					open={isToolTipOpen}
					disableHoverListener
					disableTouchListener
				>
					<IconButton onClick={() => setIsToolTipOpen(!isToolTipOpen)}>
						<HelpIcon />
					</IconButton>
				</Tooltip>
			</Typography>

			<Grid container item direction="row">
					<button className="buttonOpen" style={{backgroundColor: buttonSelected(1)}} onClick={!isReveal ? () => onFingerboardClick(1, 4, 7) : null}>G</button>
					<button className="buttonOpen" style={{backgroundColor: buttonSelected(2)}} onClick={!isReveal ? () => onFingerboardClick(2, 4, 14) : null}>D</button>
					<button className="buttonOpen" style={{backgroundColor: buttonSelected(3)}} onClick={!isReveal ? () => onFingerboardClick(3, 5, 9) : null}>A</button>
					<button className="buttonOpen" style={{backgroundColor: buttonSelected(4)}} onClick={!isReveal ? () => onFingerboardClick(4, 5, 16) : null}>E</button>
			
			</Grid>
			<Grid container item direction="row">
					<button className="button" style={{backgroundColor: buttonSelected(5)}} onClick={!isReveal ? () => onFingerboardClick(5, 4, 8) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(6)}} onClick={!isReveal ? () => onFingerboardClick(6, 4, 15) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(7)}} onClick={!isReveal ? () => onFingerboardClick(7, 5, 10) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(8)}} onClick={!isReveal ? () => onFingerboardClick(8, 5, 17) : null}><div className='verticalLine'></div></button>
			
			</Grid>
			<Grid container item direction="row">
					<button className="button" style={{backgroundColor: buttonSelected(9)}} onClick={!isReveal ? () => onFingerboardClick(9, 4, 9) : null}><div className='cross'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(10)}} onClick={!isReveal ? () => onFingerboardClick(10, 4, 16) : null}><div className='cross'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(11)}} onClick={!isReveal ? () => onFingerboardClick(11, 5, 11) : null}><div className='cross'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(12)}} onClick={!isReveal ? () => onFingerboardClick(12, 5, 18) : null}><div className='cross'></div></button>
					{!isSmallScreen ? <Typography> First finger line</Typography> : <Typography style={{wordBreak: 'break-all'}}> 1st </Typography> }

			</Grid>
			<Grid container item direction="row">
					<button className="button" style={{backgroundColor: buttonSelected(13)}} onClick={!isReveal ? () => onFingerboardClick(13, 4, 10) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(14)}} onClick={!isReveal ? () => onFingerboardClick(14, 4, 17) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(15)}} onClick={!isReveal ? () => onFingerboardClick(15, 5, 12) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(16)}} onClick={!isReveal ? () => onFingerboardClick(16, 6, 7) : null}><div className='verticalLine'></div></button>
			</Grid>           
			<Grid container item direction="row">
					<button className="button" style={{backgroundColor: buttonSelected(17)}} onClick={!isReveal ? () => onFingerboardClick(17, 4, 11) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(18)}} onClick={!isReveal ? () => onFingerboardClick(18, 4, 18) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(19)}} onClick={!isReveal ? () => onFingerboardClick(19, 5, 13) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(20)}} onClick={!isReveal ? () => onFingerboardClick(20, 6, 8) : null}><div className='verticalLine'></div></button>
			</Grid>
			<Grid container item direction="row">
					<button className="button" style={{backgroundColor: buttonSelected(21)}} onClick={!isReveal ? () => onFingerboardClick(21, 4, 12) : null}><div className='cross'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(22)}} onClick={!isReveal ? () => onFingerboardClick(22, 5, 7) : null}><div className='cross'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(23)}} onClick={!isReveal ? () => onFingerboardClick(23, 5, 14) : null}><div className='cross'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(24)}} onClick={!isReveal ? () => onFingerboardClick(24, 6, 9) : null}><div className='cross'></div></button>
					{!isSmallScreen ? <Typography> Third finger line</Typography> : <Typography> 3rd </Typography>}

			</Grid>
			<Grid container item direction="row">
					<button className="button" style={{backgroundColor: buttonSelected(25)}} onClick={!isReveal ? () => onFingerboardClick(25, 4, 13) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(26)}} onClick={!isReveal ? () => onFingerboardClick(26, 5, 8) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(27)}} onClick={!isReveal ? () => onFingerboardClick(27, 5, 15) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(28)}} onClick={!isReveal ? () => onFingerboardClick(28, 6, 10) : null}><div className='verticalLine'></div></button>
			</Grid>
			<Grid container item direction="row">
					<button className="button" style={{backgroundColor: buttonSelected(29)}} onClick={!isReveal ? () => onFingerboardClick(29, 4, 14) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(30)}} onClick={!isReveal ? () => onFingerboardClick(30, 5, 9) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(31)}} onClick={!isReveal ? () => onFingerboardClick(31, 5, 16) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(32)}} onClick={!isReveal ? () => onFingerboardClick(32, 6, 11) : null}><div className='verticalLine'></div></button>
			</Grid>
		</>	
	);

}

export default FirstPositionFingerboard;