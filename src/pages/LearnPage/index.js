import { Pagination, Card, CardContent, CardMedia, Typography, Grid, IconButton } from '@mui/material';
import './styles.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import useIsSmallScreen from '../../hooks/useIsSmallScreen';

// learn data which should be moved later


const LearnPage = () => {
	const [dataIndex,setDataIndex ] = useState(0);
	const location = useLocation();
	const isSmallScreen = useIsSmallScreen();
	const dataArray = [
		{learnImg: '/assets/images/learn/piano_keyboard.png', texts: ['this is a piano keyboard111', 'weirdd infor here', 'more weidrd info']},
		{learnImg: '/assets/images/learn/piano_keyboard2.png', texts: ['this is a piano keyboard', 'let us learn about semitone']},
		{learnImg: '/assets/images/learn/narrower_photo.png', texts: ['lksjlkjlkjlksj lkjdlkjslkjlkj fslkjlkjlkj', 'soiuso iusoiu fsoisufoiusdf', 'siuyfsiuy siuyiuysi suyisuyi suysiuysiuy siuys iuysiuysiuysf']},
		{learnImg: '/assets/images/learn/smaller_photo.png', texts: ['lksjlkjlkjlksj lkjdlkjslkjlkj fslkjlkjlkj', 'soiuso iusoiu fsoisufoiusdf', 'siuyfsiuy siuyiuysi suyisuyi suysiuysiuy siuys iuysiuysiuysf']},
		{learnImg: '/assets/images/learn/small_circles.png', texts: ['lksjlkjlkjlksj lkjdlkjslkjlkj fslkjlkjlkj', 'soiuso iusoiu fsoisufoiusdf', 'siuyfsiuy siuyiuysi suyisuyi suysiuysiuy siuys iuysiuysiuysf']},
		{learnImg: '/assets/images/learn/big_circles_400.png', texts: ['lksjlkjlkjlksj lkjdlkjslkjlkj fslkjlkjlkj', 'soiuso iusoiu fsoisufoiusdf', 'siuyfsiuy siuyiuysi suyisuyi suysiuysiuy siuys iuysiuysiuysf']},
		{learnImg: '/assets/images/learn/super_small_circles_100.png', texts: ['lksjlkjlkjlksj lkjdlkjslkjlkj fslkjlkjlkj', 'soiuso iusoiu fsoisufoiusdf', 'siuyfsiuy siuyiuysi suyisuyi suysiuysiuy siuys iuysiuysiuysf']},
	]

	// TODO: make sure everytime url changes, the data change and set data and index back to zero to prevent error
	useEffect(() => {
    // setDataArray([]);
    setDataIndex(0);
  }, [ 
		// selectedData, 
		location.pathname])

	return (
		// TODO: inplement error page if data not found
		<div style={{padding: 20, display: 'flex', justifyContent: 'center'}}>
			<Card sx={{ width: isSmallScreen ? '100%' : '60%',  borderRadius:'15px' }}>
				<CardMedia
					sx={{ minHeight: isSmallScreen ? 250 : 350}}
					image={dataArray[dataIndex].learnImg}
					title='lalal'
				/>
				<CardContent className="learnCardContent" >
						<Grid container  direction="column" spacing={2} justifyContent='center' alignItems='center'>
							{dataArray[dataIndex].texts.map(text => (
								<Grid item xs={12}> 
									<Typography variant="body1" >{text}</Typography>
								</Grid>
							))}
							<Grid container direction="row" justifyContent='space-between'>
								<IconButton 
									disabled={dataIndex === 0} 
									color={dataIndex === 0 ? 'default' : 'secondary'} 
									onClick={() => setDataIndex(dataIndex - 1)} 
								>
									<KeyboardDoubleArrowLeftIcon  fontSize="large"/>
								</IconButton>
								<IconButton 
									disabled={dataIndex === dataArray.length - 1} 
									color={dataIndex === dataArray.length - 1 ? 'default' : 'secondary'}
									onClick={() => setDataIndex(dataIndex + 1)}
								>
									<KeyboardDoubleArrowRightIcon  fontSize="large"/>
								</IconButton>
							</Grid>
							<Grid item xs={12}>
								<Pagination size="small" count={dataArray.length} page={dataIndex + 1} variant="outlined" color="secondary" hidePrevButton hideNextButton/>
							</Grid>
						</Grid>
				</CardContent>
			</Card>
		</div>
	)
}

export default LearnPage;