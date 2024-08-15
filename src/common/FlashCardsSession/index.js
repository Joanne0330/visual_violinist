import './styles.css';
import {Paper, Grid, Typography, Divider, Card, CardMedia, Button, Fab} from '@mui/material';
import {useState} from 'react';
import { useIsSmallScreen } from '../../hooks/screenSizeHooks';
import RefreshIcon from '@mui/icons-material/Refresh';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import MusicLoader from '../Loading';
import FlashCardsEndModal from '../../common/FlashCardsEndModal';

const FlashCardsSession = (props) => {
	const {chosenFlashCardsData, setIsEndModalOpen, aboardSession, isEndModalOpen} = props;
	const [dataIndex, setDataIndex] = useState(0);
	const [correctAnswers, setCorrectAnswers] = useState([]);
	const [incorrectAnswers, setIncorrectAnswers] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const isSmallScreen = useIsSmallScreen();

	const handleOnClick = (value) => {

		if(value === chosenFlashCardsData[dataIndex].noteBaseName) {
			setCorrectAnswers([...correctAnswers, chosenFlashCardsData[dataIndex]])
		} else {
			setIncorrectAnswers([...incorrectAnswers, chosenFlashCardsData[dataIndex]])
		}

		// TODO: Will use correct and incorrect loading method to demo to user therefore will move this logic inside the logic above
		setIsLoading(true)
		setTimeout(() => 
			setIsLoading(false)
		, 200);


		if(dataIndex + 1 < chosenFlashCardsData.length) {
			setDataIndex(dataIndex + 1);
		} else {
			setIsEndModalOpen(true);
		}	
	}

	return (
		<>
			<Paper className='flashCardScoreBar' style={{borderRadius: '10px', background: 'linear-gradient(170deg, #08445e, #d1d1e0)'}}>
					<Fab color="secondary" id="flashCardModalIconButtons" aria-label="refresh" size='small' onClick={aboardSession}>
            <RefreshIcon />
          </Fab>
					<Grid container direction="row">
						<Grid item xs={6} style={{ paddingTop: 10}}>
							<CheckIcon className='scoreTextColor'/>
							<Typography className="scoreTextColor" variant='body1'>Correct</Typography>
						</Grid>
						<Grid item xs={6} style={{ paddingTop: 10}}> 
							<ClearIcon className='scoreTextColor'/>
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
			<Card className='flashCardSessionCard' style={{borderRadius: '10px', marginTop: 15, marginBotton: 10, background: 'linear-gradient(170deg, #08445e, #d1d1e0)'}}>
				<Grid container>
					<Grid item xs={12} sm={6}>
						{isLoading ?
							<MusicLoader />
							:
							<CardMedia
								sx={{ height: isSmallScreen ? 250 : 450}}
								image={chosenFlashCardsData[dataIndex].noteImg}
								title='Note'
							/>
						}
					</Grid>
					{/* {!isLoading &&  */}
						<Grid   xs={12} sm={6} container item spacing={3} justifyContent='space-around'>
								{['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(note => (
									<Grid item xs={6} sm={4} key={note}>
										<Button 
											fullWidth 
											size='lg' 
											color='secondary' 
											variant='contained' 
											onClick={() => handleOnClick(note)}
										>{note}</Button>
									</Grid>
								))}
						</Grid>
					{/* } */}
				</Grid>
			</Card>
			<FlashCardsEndModal 
				isEndModalOpen={isEndModalOpen} 
				aboardSession={aboardSession}
				chosenFlashCardsData={chosenFlashCardsData}
				correctAnswers={correctAnswers}
				incorrectAnswers={incorrectAnswers}	
			/>
		</>
	)

}

export default FlashCardsSession;