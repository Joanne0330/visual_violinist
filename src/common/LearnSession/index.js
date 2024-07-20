import { Pagination, Card, CardContent, CardMedia, Typography, Grid, IconButton } from '@mui/material';
import './styles.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const LearnSession = (props) => {
	const {dataArray, dataIndex, setDataIndex, isSmallScreen} = props;
	return (
		<div style={{padding: 20, display: 'flex', justifyContent: 'center'}}>
			<Card sx={{ width: isSmallScreen ? '100%' : '60%',  borderRadius:'15px' }}>
				{!!dataArray[dataIndex].learnImg &&
					<CardMedia
					sx={{ minHeight: isSmallScreen ? 250 : 450}}
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
								<IconButton 
									disabled={dataIndex === dataArray.length - 1} 
									color={dataIndex === dataArray.length - 1 ? 'default' : 'secondary'}
									onClick={() => setDataIndex(dataIndex + 1)}
									style={{margin: '12px'}}
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

export default LearnSession;