import { Typography, Modal, Card, Button, Grid }from '@mui/material';
import './styles.css';

const EndSessionModal = (props) => {
	const { 
		isModalOpen, 
		correctAnswers, 
		wrongAnswers, 
		totalQuestions, 
		handleUseWrongAnswersData,
		resetEntireExcercise,
		isSecondAttemptQuestions
	} = props;
	console.log('SECOND ATTEMPT? ', isSecondAttemptQuestions)
  return (
		<Modal
			open={isModalOpen}
			onClose={resetEntireExcercise}
			// aria-labelledby="modal-modal-title"
			// aria-describedby="modal-modal-description"
		>
			<Card className='modalCard' style={{borderRadius: '15px'}}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					End of study session
				</Typography>
				{correctAnswers.length === totalQuestions && !wrongAnswers.length ?
					<>
						<Typography sx={{ mt: 2 }}>
							{isSecondAttemptQuestions ? 'Practice makes perfect! You got everything correct second time round! Well done!' : 'Congratulation! You answered everything correctly!'}
						</Typography>
						<Grid justifyContent="flex-end" direction="row" container>
							<Button onClick={resetEntireExcercise} id='modalButton' variant="contained" color="secondary">Close</Button>
						</Grid>
					</>
					:
					<>
						<Typography sx={{ mt: 2 }}>
							{isSecondAttemptQuestions ? `You have answered ${wrongAnswers.length} ${wrongAnswers.length === 1 ? 'question' : 'questions'} incorrectly this time round!` : `Your total score is ${(Math.ceil(correctAnswers.length/totalQuestions * 100))}%!`}
						</Typography>
						<Typography sx={{ mt: 2 }}>
							{isSecondAttemptQuestions ? `Would you like to see the answers to those you have answered incorrectly?` : `You have answered ${wrongAnswers.length} ${wrongAnswers.length === 1 ? 'question' : 'questions'} incorrectly, would you like to try ${wrongAnswers.length === 1 ? 'it' : 'them'} again?`}
						</Typography>
						<Grid justifyContent="flex-end" direction="row" container>
							{isSecondAttemptQuestions ? 
								<Button id='modalButton' variant="contained" color="secondary">Yes, I want to see the answers</Button>
								:
								<Button onClick={handleUseWrongAnswersData} id='modalButton' variant="contained" color="secondary">Yes</Button>
							}
							<Button onClick={resetEntireExcercise} id='modalButton' variant="contained" color="secondary">No</Button>
						</Grid>
					</>
				}
			</Card>
		</Modal>
	)
}

export default EndSessionModal;