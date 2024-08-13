import './styles.css';
import {Paper, Grid, Typography, Divider, Card, CardMedia, Button} from '@mui/material';
import {useState} from 'react';
import { useIsSmallScreen } from '../../hooks/screenSizeHooks';

const FlashCardsSession = (props) => {
	const {chosenFlashCardsData} = props;
	const [dataIndex, setDataIndex] = useState(0);
	const [correctAnswers, setCorrectAnswers] = useState([]);
	const [incorrectAnswers, setIncorrectAnswers] = useState([]);
	const isSmallScreen = useIsSmallScreen();

	const handleOnClick = (value) => {
		console.log(value)
		if(value === chosenFlashCardsData[dataIndex].noteBaseName) {
			setCorrectAnswers([...correctAnswers, chosenFlashCardsData[dataIndex]])
		} else {
			setIncorrectAnswers([...incorrectAnswers, chosenFlashCardsData[dataIndex]])
		}
		setDataIndex(dataIndex + 1)
	}

	console.log(chosenFlashCardsData)

	return (
		<>
			<Paper className='flashCardScoreBar' style={{borderRadius: '10px', background: 'linear-gradient(170deg, #08445e, #d1d1e0)'}}>
					<Grid container direction="row">
						<Grid item xs={6} style={{ paddingTop: 10}}>
							<Typography className="scoreTextColor" variant='body1'>Correct</Typography>
						</Grid>
						<Grid item xs={6} style={{ paddingTop: 10}}> 
							<Typography variant='body1' className="scoreTextColor">Incorrect</Typography>
						</Grid>
					</Grid>
					<Divider variant="middle" style={{borderColor: 'white', margin: '10px'}}/>
					<Grid container direction="row">
						<Grid item xs={6} style={{ paddingBottom: 10}}>
							<Typography variant='body2' className="scoreTextColor">{`${correctAnswers.length} / ${chosenFlashCardsData.length}`}</Typography>
						</Grid>
						<Grid item xs={6} style={{ paddingBottom: 10}}> 
							<Typography variant='body2' className="scoreTextColor">{`${incorrectAnswers.length} / ${chosenFlashCardsData.length}`}</Typography>
						</Grid>
					</Grid>
			</Paper> 
			<Card className='flashCardSessionCard' style={{borderRadius: '10px', marginTop: 10, marginBotton: 10, background: 'linear-gradient(170deg, #08445e, #d1d1e0)'}}>
				<Grid container>
					<Grid item xs={12} sm={6}>
						<CardMedia
										sx={{ minHeight: isSmallScreen ? 200 : 450}}
										image={chosenFlashCardsData[dataIndex].noteImg}
										title='Note'
									/>
					</Grid>
					<Grid   xs={12} sm={6} container item spacing={3} justifyContent='space-around'>
							{['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(note => (
								<Grid item xs={6} sm={4}>
									<Button 
										fullWidth 
										size='lg' 
										color='secondary' 
										variant='contained' 
										onClick={() => handleOnClick(note)}
										// name={note} 
										// value={note}
									>{note}</Button>
								</Grid>
							))}
					</Grid>
				</Grid>
			</Card>
		</>
	)

}

export default FlashCardsSession;