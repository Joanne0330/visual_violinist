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
		// {
		// 	learnImg: '/assets/images/learn/piano_keyboard_horizontal_more_space.png', 
		// 	texts: ['The spacing between 2 fingers next to each other on a violin depends on whether those 2 notes form a whole-tone or semitone', 'But what does that mean?']},
		{
			learnImg: '/assets/images/learn/piano_keyboard_even_more_space.png', 
			texts: [
				'To learn about spacing or distance between 2 fingers on a violin, we must first learn about whole-tone and semitone intervals.',
				'Please take a look at this is piano keyboard, you will notice that most notes have a black note in between itself and another note. Take D and E for example, there is a note between them and that note is called D# or Eb.',
				'When 2 notes have another note in between them, this interval is called whole-tone. D and E together form a whole-tone.',
				'However, E and F do not have a black key in between them, nor do B and C!',
				'When 2 notes do not have another note in between them, this interval is called semitone (or half-step). Semitone is the smallest interval in our western musical world!',
				'Therefore, E and F form a semitone, so do B and C!'
			]
		},
		{
			learnImg: '/assets/images/learn/D_string_example_natural.png', 
			texts: [
				'This is the reason why on the violin, sometimes there is a space between 2 fingers, and sometimes there is no space and the fingers are right next to each other!', 
				'Look at this example of notes on the D string. There is space between third finger G and fourth finger A. This is because the interval of G and A is whole-tone and you can fit another note in between them.', 
				'However, there is no space between first finger E and second finger F, as the interval is a semitone. The fingers are right next to each other and we cannot fit another note between them.'
			]
		},
	// 	{learnImg: '/assets/images/learn/piano_keyboard_horizontal_centered.png', texts: ['this is a piano keyboard', 'let us learn about semitone']},
	// 	{learnImg: '/assets/images/learn/piano_keyboard_horizontal.png', texts: ['lksjlkjlkjlksj lkjdlkjslkjlkj fslkjlkjlkj', 'soiuso iusoiu fsoisufoiusdf', 'siuyfsiuy siuyiuysi suyisuyi suysiuysiuy siuys iuysiuysiuysf']},
	// 	{learnImg: '/assets/images/learn/piano_keyboard_horizontal_centered.png', texts: ['lksjlkjlkjlksj lkjdlkjslkjlkj fslkjlkjlkj', 'soiuso iusoiu fsoisufoiusdf', 'siuyfsiuy siuyiuysi suyisuyi suysiuysiuy siuys iuysiuysiuysf']},
	// 	{learnImg: '/assets/images/learn/small_circles.png', texts: ['lksjlkjlkjlksj lkjdlkjslkjlkj fslkjlkjlkj', 'soiuso iusoiu fsoisufoiusdf', 'siuyfsiuy siuyiuysi suyisuyi suysiuysiuy siuys iuysiuysiuysf']},
	// 	{learnImg: '/assets/images/learn/big_circles_400.png', texts: ['lksjlkjlkjlksj lkjdlkjslkjlkj fslkjlkjlkj', 'soiuso iusoiu fsoisufoiusdf', 'siuyfsiuy siuyiuysi suyisuyi suysiuysiuy siuys iuysiuysiuysf']},
	// 	{learnImg: '/assets/images/learn/super_small_circles_100.png', texts: ['lksjlkjlkjlksj lkjdlkjslkjlkj fslkjlkjlkj', 'soiuso iusoiu fsoisufoiusdf', 'siuyfsiuy siuyiuysi suyisuyi suysiuysiuy siuys iuysiuysiuysf']},
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
				{!!dataArray[dataIndex].learnImg &&
					<CardMedia
						sx={{ minHeight: isSmallScreen ? 250 : 350}}
						image={dataArray[dataIndex].learnImg}
						title='lalal'
					/>
				}
				<CardContent className="learnCardContent" >
						<Grid container  direction="column" spacing={2} justifyContent='center' alignItems='center'>
							{dataArray[dataIndex].texts.map(text => (
								<Grid item xs={12}> 
									<Typography variant="body1" style={{marginLeft: 20, marginRight: 20}} >{text}</Typography>
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