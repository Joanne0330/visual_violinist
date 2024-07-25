import { Pagination, Card, CardContent, CardMedia, Typography, Grid, IconButton} from '@mui/material';
import { Tooltip } from '@material-ui/core'
import './styles.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const LearnSession = (props) => {
	const {dataArray, dataIndex, setDataIndex, isSmallScreen, isMediumScreen, pathname} = props;
	let navigate = useNavigate();

	return (
		<div style={{padding: 20, display: 'flex', justifyContent: 'center'}}>
			<Card sx={{ width: isSmallScreen && !isMediumScreen ? '100%' : isMediumScreen ? '80%' : '60%',  borderRadius:'15px' }}>
				{!!dataArray[dataIndex].learnImg &&
					<CardMedia
					sx={{ minHeight: isSmallScreen && !isMediumScreen ? 250 : isMediumScreen ? 350 : 450}}
					image={dataArray[dataIndex].learnImg}
					title={dataArray[dataIndex].imgTitle}
					/>
				}
				<CardContent className="learnCardContent" >
						<Grid container  direction="column" spacing={2} justifyContent='center' alignItems='center'>
							{dataArray[dataIndex].texts.map((text, id) => (
								<Grid item xs={12} key={id}> 
									<Typography variant="body1" className="contentText" >{text}</Typography>
								</Grid>
							))}
							<Grid container direction="row" justifyContent='space-between'>
								<IconButton 
									disabled={dataIndex === 0} 
									color={dataIndex === 0 ? 'default' : 'secondary'} 
									onClick={() => setDataIndex(dataIndex - 1)} 
									style={{margin: '12px'}}
									>
									<KeyboardDoubleArrowLeftIcon  fontSize="large"/>
								</IconButton>
								{pathname !== '/learn/introduction' && dataIndex === dataArray.length - 1 ?
									<Tooltip 
										title={<Fragment><Typography color="inherit">Practise this key</Typography></Fragment>} 
										arrow
									>
										<IconButton color='secondary' style={{margin: '12px'}} onClick={() => navigate(pathname.replace('learn', 'practice'))}>
											<MusicNoteOutlinedIcon fontSize='large'  />
										</IconButton>
									</Tooltip>
									:
									<IconButton 
										disabled={dataIndex === dataArray.length - 1} 
										color={dataIndex === dataArray.length - 1 ? 'default' : 'secondary'}
										onClick={() => setDataIndex(dataIndex + 1)}
										style={{margin: '12px'}}
										>
										<KeyboardDoubleArrowRightIcon  fontSize="large"/>
									</IconButton>
								}
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

export default LearnSession;