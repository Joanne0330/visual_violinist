import { Typography, Card, CardContent } from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import './styles.css';

const PageNotFound = () => {
	return (
		<div className="pageNotFoundContainer">
			<Card className="pageNotFoundCard" sx={{ borderRadius: '20px' }}>
					<div className="pageNotFoundIconContainer" >
						<ReportProblemIcon  sx={{ fontSize: 60 }} color="secondary"/>
					</div>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div" className="pageNotFoundText">
							Oops! Page not found!
						</Typography>
						<div className="pageNotFoundSubTextContainer">
							<Typography variant="body2" color="text.secondary" className="pageNotFoundText">
								We cannot find the page you have requested. 
							</Typography>
							<Typography  variant="body2" color="text.secondary" className="pageNotFoundText">
								Please ensure you have entered the correct web address, or make a selection from the menu.
							</Typography>
						</div>
					</CardContent>
			</Card>
		</div>
	)
}

export default PageNotFound;