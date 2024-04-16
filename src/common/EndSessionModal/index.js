import { Typography, Modal, Card }from '@mui/material';
import './styles.css';

const EndSessionModal = (props) => {
	const { isModalOpen, closeModal, correctAnswers, wrongAnswers, totalQuestions } = props;

  return (
		<Modal
			open={isModalOpen}
			onClose={closeModal}
			// aria-labelledby="modal-modal-title"
			// aria-describedby="modal-modal-description"
		>
		<Card className='modalCard' style={{borderRadius: '15px'}}>
			<Typography id="modal-modal-title" variant="h6" component="h2">
				End of study session
			</Typography>
			{correctAnswers.length === totalQuestions && !wrongAnswers.length ?
				<Typography sx={{ mt: 2 }}>
					{`Congratulation! You answered everything correctly!`}
				</Typography>
				:
				<>
					<Typography sx={{ mt: 2 }}>
						{`Your total score is ${(Math.ceil(correctAnswers.length/totalQuestions * 100))}%!`}
					</Typography>
					<Typography sx={{ mt: 2 }}>
						{`You have answered ${wrongAnswers.length} incorrectly, would you like to try them again?`}
					</Typography>
				</>
			}
		</Card>
</Modal>

	)

}

export default EndSessionModal;