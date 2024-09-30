import { Typography, Modal, Card, Button, Grid }from '@mui/material';
import './styles.css';
import { useLocation, useNavigate } from 'react-router-dom';
import {formatTime} from '../../utils';


const EndSessionModal = (props) => {
	const { 
		isModalOpen, 
		correctAnswers, 
		wrongAnswers, 
		totalQuestions, 
		handleUseWrongAnswersData,
		resetEntireExcercise,
		isSecondAttemptQuestions,
		handleRevealAnswers,
		keyName,
		timer
	} = props;

	let navigate = useNavigate();
	const location = useLocation();

  return (
		<Modal
			open={isModalOpen}
			onClose={resetEntireExcercise}
		>
			<Card className='modalCard' style={{borderRadius: '15px', minWidth: '250px'}}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					End of study session
				</Typography>
				{correctAnswers.length === totalQuestions && !wrongAnswers.length ?
					<>
						<Typography sx={{ mt: 2 }}>
							{isSecondAttemptQuestions ? 'Practice makes perfect! You got everything correct second time round! Well done!' : 'Congratulation! You answered everything correctly!'}
						</Typography>
						{timer !== 0 &&
							<Typography sx={{ mt: 2 }}>{`And you took ${formatTime(timer, 'text')} to answer these question!`}</Typography>
						}
						<Grid justifyContent="flex-end" direction="row" container>
							<Button onClick={resetEntireExcercise} id='modalButton' variant="contained" color="secondary">Close</Button>
						</Grid>
					</>
					:
					<>
						<Typography sx={{ mt: 2 }}>
							{isSecondAttemptQuestions ? `You have answered ${wrongAnswers.length} ${wrongAnswers.length === 1 ? 'question' : 'questions'} incorrectly this time round!` : `Your total score is ${(Math.ceil(correctAnswers.length/totalQuestions * 100))}%!`}
						</Typography>
						{timer !== 0 &&
							<Typography sx={{ mt: 2 }}>{`And you took ${formatTime(timer, 'text')} to answer these question!`}</Typography>
						}
						<Typography sx={{ mt: 2 }}>
							{isSecondAttemptQuestions ? `Would you like to see the answers to those you have answered incorrectly?` : `You have answered ${wrongAnswers.length} ${wrongAnswers.length === 1 ? 'question' : 'questions'} incorrectly, would you like to try ${wrongAnswers.length === 1 ? 'this question' : 'those questions'} again?`}
						</Typography>
						<Grid justifyContent="flex-end" direction="row" container style={{marginTop: '10px'}}>
							{isSecondAttemptQuestions ? 
								<Button onClick={handleRevealAnswers} id='modalButton' variant="contained" color="secondary">Yes, I want to see the answers</Button>
								:
								<Button onClick={handleUseWrongAnswersData} id='modalButton' variant="contained" color="secondary">Yes</Button>
							}
							<Button onClick={resetEntireExcercise} id='modalButton' variant="contained" color="secondary">No, play again</Button>
							{wrongAnswers.length > 5 &&	
							 <Button onClick={() => navigate(location.pathname.replace('practice', 'learn'))} id='modalButton' variant="contained" color="secondary">{`Take me to learn ${keyName} pattern instead`}</Button>
							 }
						</Grid>
					</>
				}
			</Card>
		</Modal>
	)
}

export default EndSessionModal;