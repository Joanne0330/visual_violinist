import { Grid, Typography, Tooltip, IconButton } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import './styles.css';
import {useState} from 'react';


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

	return (
		<>
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
					<button className="buttonOpen" style={{backgroundColor: buttonSelected(1)}} onClick={!isReveal ? () => setPosition(1) : null}>G</button>
					<button className="buttonOpen" style={{backgroundColor: buttonSelected(2)}} onClick={!isReveal ? () => setPosition(2) : null}>D</button>
					<button className="buttonOpen" style={{backgroundColor: buttonSelected(3)}} onClick={!isReveal ? () => setPosition(3) : null}>A</button>
					<button className="buttonOpen" style={{backgroundColor: buttonSelected(4)}} onClick={!isReveal ? () => setPosition(4) : null}>E</button>
			
			</Grid>
			<Grid container item direction="row">
					<button className="button" style={{backgroundColor: buttonSelected(5)}} onClick={!isReveal ? () => setPosition(5) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(6)}} onClick={!isReveal ? () => setPosition(6) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(7)}} onClick={!isReveal ? () => setPosition(7) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(8)}} onClick={!isReveal ? () => setPosition(8) : null}><div className='verticalLine'></div></button>
			
			</Grid>
			<Grid container item direction="row">
					<button className="button" style={{backgroundColor: buttonSelected(9)}} onClick={!isReveal ? () => setPosition(9) : null}><div className='cross'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(10)}} onClick={!isReveal ? () => setPosition(10) : null}><div className='cross'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(11)}} onClick={!isReveal ? () => setPosition(11) : null}><div className='cross'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(12)}} onClick={!isReveal ? () => setPosition(12) : null}><div className='cross'></div></button>
					{!isSmallScreen ? <Typography> First finger line</Typography> : <Typography style={{wordBreak: 'break-all'}}> 1st </Typography> }

			</Grid>
			<Grid container item direction="row">
					<button className="button" style={{backgroundColor: buttonSelected(13)}} onClick={!isReveal ? () => setPosition(13) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(14)}} onClick={!isReveal ? () => setPosition(14) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(15)}} onClick={!isReveal ? () => setPosition(15) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(16)}} onClick={!isReveal ? () => setPosition(16) : null}><div className='verticalLine'></div></button>
			</Grid>           
			<Grid container item direction="row">
					<button className="button" style={{backgroundColor: buttonSelected(17)}} onClick={!isReveal ? () => setPosition(17) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(18)}} onClick={!isReveal ? () => setPosition(18) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(19)}} onClick={!isReveal ? () => setPosition(19) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(20)}} onClick={!isReveal ? () => setPosition(20) : null}><div className='verticalLine'></div></button>
			</Grid>
			<Grid container item direction="row">
					<button className="button" style={{backgroundColor: buttonSelected(21)}} onClick={!isReveal ? () => setPosition(21) : null}><div className='cross'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(22)}} onClick={!isReveal ? () => setPosition(22) : null}><div className='cross'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(23)}} onClick={!isReveal ? () => setPosition(23) : null}><div className='cross'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(24)}} onClick={!isReveal ? () => setPosition(24) : null}><div className='cross'></div></button>
					{!isSmallScreen ? <Typography> Third finger line</Typography> : <Typography> 3rd </Typography>}

			</Grid>
			<Grid container item direction="row">
					<button className="button" style={{backgroundColor: buttonSelected(25)}} onClick={!isReveal ? () => setPosition(25) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(26)}} onClick={!isReveal ? () => setPosition(26) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(27)}} onClick={!isReveal ? () => setPosition(27) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(28)}} onClick={!isReveal ? () => setPosition(28) : null}><div className='verticalLine'></div></button>
			</Grid>
			<Grid container item direction="row">
					<button className="button" style={{backgroundColor: buttonSelected(29)}} onClick={!isReveal ? () => setPosition(29) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(30)}} onClick={!isReveal ? () => setPosition(30) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(31)}} onClick={!isReveal ? () => setPosition(31) : null}><div className='verticalLine'></div></button>
					<button className="button" style={{backgroundColor: buttonSelected(32)}} onClick={!isReveal ? () => setPosition(32) : null}><div className='verticalLine'></div></button>
			</Grid>
		</>	
	);

}

export default FirstPositionFingerboard;