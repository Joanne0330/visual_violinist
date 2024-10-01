import { Typography, Modal, Card, Button, Grid }from '@mui/material';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { formatTime } from '../../utils';

const FlashCardsEndModal = (props) => {
	const {isEndModalOpen, aboardSession, chosenFlashCardsData, correctAnswers, incorrectAnswers, timer} = props;

	let navigate = useNavigate();

	const textEditor = (questions) => questions === 1 ? `${questions} question` : `${questions} questions`;

  return (
		<Modal
			open={isEndModalOpen}
		>
			<Card className='modalCard' style={{borderRadius: '15px', minWidth: '250px'}}>
				<Typography variant="h6" component="h2">
					End of Flashcards Session
				</Typography>
				<Typography sx={{ mt: 2 }}>
					{`In this round of Flashcards you had total of ${textEditor(chosenFlashCardsData.length)}. You had answered ${textEditor(correctAnswers.length)} correctly and ${textEditor(incorrectAnswers.length)} incorrectly.`}
				</Typography>
				<Typography sx={{ mt: 2 }}>
					{`You took ${formatTime(timer, 'text')} to finish these Flashcards. We recommend each question takes 2 seconds to answer therefore in this round ${timer <= chosenFlashCardsData.length * 2 ? 'you finished with lightening speed! Hooray!' : 'you were a little slow. I would recommend to keep practising these cards!'}`} 
				</Typography>
				<Grid justifyContent="flex-end" direction="row" container style={{marginTop: '10px'}}>
					<Button onClick={aboardSession} id='modalButton' variant="contained" color="secondary">New game</Button>
					<Button onClick={() => navigate('/')} id='modalButton' variant="contained" color="secondary">Home</Button>
				</Grid>
			</Card>
		</Modal>
	)
}

export default FlashCardsEndModal;