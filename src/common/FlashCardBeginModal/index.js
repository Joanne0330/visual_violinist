import { Typography, Modal, Card, Button, Grid }from '@mui/material';
import './styles.css';
import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

const stackOptions = [
	{
		stackName: 'Notes on G string',
		stackDescription: 'Notes for G string - first position (G, A, B, C, D)',
		stackPhoto: "",
		stackId: 'g_string'
	},
	{
		stackName: 'Notes on D string',
		stackDescription: 'Notes for D string - first position (D, E, F, G, A)',
		stackPhoto: "",
		stackId: 'd_string'
	},
	{
		stackName: 'Notes on A string',
		stackDescription: 'Notes for A string - first position (A, B, C, D, E)',
		stackPhoto: "",
		stackId: 'a_string'
	},
	{
		stackName: 'Notes on E string',
		stackDescription: 'Notes for E string - first position (E, F, G, A, B)',
		stackPhoto: "",
		stackId: 'e_string'
	},
	{
		stackName: 'High notes',
		stackDescription: 'Notes for E string - third to fifth position (A, B, C, D, E, F)',
		stackPhoto: "",
		stackId: 'e_string_high'
	}
];

const FlashCardBeginModal = (props) => {
	const {isModalOpen} = props;
	const [chosenStackArr, setChosenStackArr] = useState([]);

	console.log('chosen Stack', chosenStackArr)
	const handlStackButtonClick = (id) => {
		if(!chosenStackArr.includes(id)) {
			setChosenStackArr([...chosenStackArr, id])
		} else {
			const newArr = chosenStackArr.filter(item => item !== id)
			setChosenStackArr(newArr)
		}
	}

  return (
		<Modal
			open={isModalOpen}
			// onClose={resetEntireExcercise}
		>
			<Card className='modalCard' style={{borderRadius: '15px', minWidth: '250px'}}>
				<Grid container direction="column" spacing={2}>
					<Grid item>
						<Typography  variant="h6" >
							Set up your own stack of flash cards!
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1">
							Please pick what you want to include in your stash of cards. You can choose more than one!
						</Typography>
					</Grid>
					<Grid item container spacing={2}>
						<Grid item xs={12} md={6}>
							<Button 
								fullWidth 
								variant="contained" 
								color={chosenStackArr.length === 5 ? 'secondary' : 'inherit'} 
								onClick={() => setChosenStackArr(['g_string', 'd_string', 'a_string', 'e_string', 'e_string_high'])}
							>All notes</Button>
						</Grid>
						{stackOptions.map(stack => (
							<Grid item xs={12} md={6} key={stack.stackId}>
								<Button 
									fullWidth 
									key={stack.stackId} 
									variant="contained" 
									color={!!chosenStackArr.includes(stack.stackId) ? 'secondary' : 'inherit'}  
									onClick={() => handlStackButtonClick(stack.stackId)} 
								>{stack.stackName}</Button>
							</Grid>
						))}
					</Grid>
						<Grid item container justifyContent='flex-end'>
							<Button 
								id="modalButton" 
								variant="contained" 
								color="secondary"
								disabled={chosenStackArr.length === 0}
							>Next</Button>
						</Grid>
				</Grid>
			</Card>
		</Modal>
	)
}

export default FlashCardBeginModal;