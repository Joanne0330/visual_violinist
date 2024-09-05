import './styles.css';
import {Paper, Grid, Typography, Divider, Card, CardMedia, IconButton, Fab} from '@mui/material';
import {useState, useEffect} from 'react';
import { useIsSmallScreen } from '../../hooks/screenSizeHooks';
import RefreshIcon from '@mui/icons-material/Refresh';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import MusicLoader from '../Loading';
import FlashCardsEndModal from '../../common/FlashCardsEndModal';
import useTimer from '../../hooks/timerHooks';
import {formatTime} from '../../utils';

const FlashCardsSession = (props) => {
	const {chosenFlashCardsData, setIsEndModalOpen, aboardSession, isEndModalOpen} = props;
	const {timer, isActive, handleStart, handlePause} = useTimer(0)
	const [dataIndex, setDataIndex] = useState(0);
	const [correctAnswers, setCorrectAnswers] = useState([]);
	const [incorrectAnswers, setIncorrectAnswers] = useState([]);
	const [isLoading, setIsLoading ] = useState(false);
	const [showCorrection, setShowCorrection] = useState(false);
	const isSmallScreen = useIsSmallScreen();

	useEffect(() => {
		if(timer === 0 && dataIndex === 0 && !isActive) {
			handleStart();
		}
	}, [timer, dataIndex, isActive, handleStart ])

	const handleNextQuestion = () => {
		if(dataIndex + 1 < chosenFlashCardsData.length) {
			setDataIndex(dataIndex + 1);
		} else {
			setIsEndModalOpen(true);
			handlePause();
		}	
	}

	const handleLoadingTime = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			handleNextQuestion();
		}
		, 200);
	}

	const handleOnClick = (value) => {
		if(value === chosenFlashCardsData[dataIndex].noteBaseName) {
			setCorrectAnswers([...correctAnswers, chosenFlashCardsData[dataIndex]])
			handleLoadingTime();
		} else {
			setIncorrectAnswers([...incorrectAnswers, chosenFlashCardsData[dataIndex]])
			setShowCorrection(true);
			setTimeout(() => {
				setShowCorrection(false);
				handleLoadingTime();
			}, 5000)
		}
	}

	return (
		<>
			<Paper className='flashCardScoreBar' style={{borderRadius: '10px'}}>
					<Fab color="secondary" id="flashCardModalIconButtons" aria-label="refresh" size='small' onClick={aboardSession}>
            <RefreshIcon />
          </Fab>
					<Typography variant='body1' className='scoreTextColor' style={{marginTop: '10px'}}>{formatTime(timer)}</Typography>
					{/* <Typography variant='body1' className='scoreTextColor' style={{marginTop: '10px'}}>00:00:00</Typography> */}
					<Grid container direction="row">
						<Grid item xs={6} className="scoreTitleContainer">
							<CheckIcon className='scoreTextColor'/>
							<Typography className="scoreTextColor" variant='body1'>Correct</Typography>
						</Grid>
						<Grid item xs={6} className="scoreTitleContainer"> 
							<ClearIcon className='scoreTextColor'/>
							<Typography variant='body1' className="scoreTextColor">Incorrect</Typography>
						</Grid>
					</Grid>
					<Divider variant="middle" style={{borderColor: 'white', margin: '10px'}}/>
					<Grid container direction="row">
						<Grid item xs={6} className="scoreMarkContainer">
							<Typography variant='body2' className="scoreTextColor">{`${correctAnswers.length} / ${chosenFlashCardsData.length}`}</Typography>
						</Grid>
						<Grid item xs={6} className="scoreMarkContainer"> 
							<Typography variant='body2' className="scoreTextColor">{`${incorrectAnswers.length} / ${chosenFlashCardsData.length}`}</Typography>
						</Grid>
					</Grid>
			</Paper> 
			<Card className='flashCardSessionCard' style={{borderRadius: '10px'}}>
				<Grid container>
					<Grid item xs={12} sm={6}>
						{isLoading ?
							<MusicLoader isSmallScreen={isSmallScreen} isFlashCardsFeature={true}/>
							:
							<CardMedia
								sx={{ height: isSmallScreen ? 250 : 450}}
								image={chosenFlashCardsData[dataIndex].noteImg}
								title='Note'
							/>
						}
					</Grid>

						<Grid  style={{marginTop: 3}} xs={12} sm={6} container item spacing={2} direction="row" justifyContent='center' alignItems='center'>
								{ showCorrection ? 
									<>
										<ClearIcon color="error" fontSize="large"/>
										<div style={{height: isSmallScreen ? 250 : 450, alignContent: 'center'}}>
											<Typography variant="h6">{` The correct answer is: ${chosenFlashCardsData[dataIndex].noteBaseName}`}</Typography> 
										</div>
									</>
								:
									
									['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(note => (
										<Grid item  key={note}>
											<IconButton
												sx={{ ml: 2 }}
												size='large' 
												style={{boxShadow: '0 10px 20px 0 #666666', backgroundColor: '#9c27b0', color: 'white', width: '57px'}}
												onClick={() => handleOnClick(note)}
											>{note}</IconButton>
										</Grid>
									))
								}
						</Grid>
				</Grid>
			</Card>
			<FlashCardsEndModal 
				isEndModalOpen={isEndModalOpen} 
				aboardSession={aboardSession}
				chosenFlashCardsData={chosenFlashCardsData}
				correctAnswers={correctAnswers}
				incorrectAnswers={incorrectAnswers}
				timer={timer}	
			/>
		</>
	)

}

export default FlashCardsSession;