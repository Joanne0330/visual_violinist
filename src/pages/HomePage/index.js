import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { Paper, Divider, Button } from '@mui/material';
import { Grid, IconButton, Typography } from '@material-ui/core';
import { practiseList, learnList } from "../../AppHeaderMenu";
import { useNavigate } from 'react-router-dom';
import './styles.css';

const homePageData = [
	{
		courseCategory: 'Learn',
		description: 'Learn and understand where the notes are on the violin, their spatial relationship with each other to form different patterns for different keys',
		icon: <MenuBookOutlinedIcon style={{color: 'white'}} fontSize='large'/>,
		courseList: [...learnList]
	},
	{
		courseCategory: 'Practice',
		description: 'Practice reading musical notes by playing games, and get better at knowing their names and finding them on the violin',
		icon: <MusicNoteOutlinedIcon style={{color: 'white'}} fontSize='large'/>,
		courseList: [...practiseList]
	},
	{
		courseCategory: 'Flash Cards',
		description: 'Not so confident with knowing the name of the notes? You can practice your reading using this Flash Cards tool',
		icon: <LibraryMusicIcon style={{color: 'white'}} fontSize='large'/>,
		courseList: [{name: 'Go to Flash Cards', url: '/flash_cards'}]
	}

];

const HomePage = () => {
	let navigate = useNavigate();

	return (
		<div style={{marginTop: '25px', marginBottom: '25px'} }>
			<Grid container direction="row" spacing={4} justifyContent='space-around'>
			{homePageData.map(course => (
				<Grid item xs={12} sm={10} md={6} lg={5} key={course.courseCategory}>
					<Paper className="homePageWidgetPaper" style={{borderRadius: 10, backgroundImage:'linear-gradient(170deg, #08445e, #d1d1e0)', padding: 10}}>
					{/* <Paper className="homePageWidgetPaper" style={{borderRadius: 10, background: 'rgba(33,38,43,0.8)', padding: 10}}> */}
					<IconButton
						size="medium"
						sx={{ ml: 2 }}
						disabled
          >
          	{course.icon}
          </IconButton>
					<Typography variant='h6' className='textColor' >{course.courseCategory}</Typography>
					<Divider variant="middle" style={{borderColor: 'white', margin: '10px'}}/>
					<Typography variant='body1' className="textColor" style={{ padding: 10}}>{course.description}</Typography>
					<Grid container spacing={2} style={{padding: 10}}>
						{course.courseList.map(item => (
							<Grid item xs={12} md={course.courseList.length === 1 ? 12 : 6}  key={item.name}> 
							 <Button className="courseButtons" style={{	textTransform: 'none'}} color='secondary' variant='contained'  onClick={() => navigate(item.url)}>{item.name}</Button>
							</Grid>
						))}
					</Grid>
					</Paper>
				</Grid>

			))}
			</Grid>
		</div>
	)
}

export default HomePage;