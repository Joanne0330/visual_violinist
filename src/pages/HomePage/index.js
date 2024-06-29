import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import { Paper, Divider } from '@mui/material';
import { Grid, IconButton, Typography, Button} from '@material-ui/core';
import { practiseList, learnList } from "../../AppHeaderMenu";
import { useNavigate } from 'react-router-dom';


const homePageData = [
	{
		courseCategory: 'Learn',
		description: 'Learn and understand finger placement on the violin, and various of patterns',
		icon: <MenuBookOutlinedIcon style={{color: 'white'}} fontSize='large'/>,
		courseList: [...learnList]
	},
	{
		courseCategory: 'Practice',
		description: 'Play and practice reading musical notes, finding their fingering and placement on the violin',
		icon: <MusicNoteOutlinedIcon style={{color: 'white'}} fontSize='large'/>,
		courseList: [...practiseList]
	}

];

const HomePage = () => {
	let navigate = useNavigate();

	return (
		<>
			<Grid container direction="row" spacing={4}>
			{homePageData.map(course => (
				<Grid item xs={12} md={6} key={course.courseCategory}>
					<Paper 
						style={{
							margin: 10,
							padding: 10,
							minWidth: 300,
							textAlign: 'center',
							backgroundColor: '#21262b',
							opacity: 0.8,
							borderRadius: 10,
							borderStyle: 'ridge',
							borderColor: 'white'

						}}				
					>
					<IconButton
						size="medium"
						sx={{ ml: 2 }}
						disabled
          >
          	{course.icon}
          </IconButton>
					<Typography variant='h6' style={{color: 'white'}} >{course.courseCategory}</Typography>
					<Divider variant="middle" style={{borderColor: 'white', margin: '10px'}}/>
					<Typography variant='body1' style={{color: 'white'}}>{course.description}</Typography>
					<Grid container spacing={2} style={{padding: 10}}>
						{course.courseList.map(item => (
							<Grid item xs={12} md={6}> 
							 <Button color='secondary' variant='contained' style={{ width: '100%', height: '100%', textTransform: 'none'}} onClick={() => navigate(item.url)}>{item.name}</Button>
							</Grid>
						))}
					</Grid>
					</Paper>
				</Grid>

			))}
			</Grid>
		</>
	)
}

export default HomePage;