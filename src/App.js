import { Grid, Tooltip, IconButton } from '@material-ui/core';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import './styles.css';
import PracticePage from "./pages/PracticePage";

const pageIconButtons = [
  {pageTitle: 'Home', buttonIcon: <HomeOutlinedIcon style={{color: 'white'}} fontSize='large'/>, pageControl: 'Home'},
  {pageTitle: 'Study', buttonIcon: <MenuBookOutlinedIcon style={{color: 'white'}} fontSize='large'/>, pageControl: 'Study'},
  {pageTitle: 'Practice', buttonIcon: <MusicNoteOutlinedIcon style={{color: 'white'}} fontSize='large' />, pageControl: 'Practice'},

]

function App() {
  return (
    <>
      <div className="appHeader"> 
        <Grid container direction='row' justifyContent='space-between'>
          <Grid item>
            <h2 className='appTitle'>The Visual Violinist</h2>
          </Grid>
          <Grid item >
            {pageIconButtons.map(item => (
              <Tooltip title={item.pageTitle}>
                <IconButton
                  onClick={() => null}
                  // size="medium"
                  // sx={{ ml: 2 }}
                  // aria-controls={open ? 'account-menu' : undefined}
                  // aria-haspopup="true"
                  // aria-expanded={open ? 'true' : undefined}
                >
                  {item.buttonIcon}
                </IconButton>
              </Tooltip>
            ))}
          </Grid>
        </Grid>
      </div>
      <div className="wallPaper" style={{backgroundImage: 'url("/assets/images/background.jpg")'}}>
        <div className="contentContainer">
          <PracticePage/>
        </div>
      </div>
      <h5 className="appFooter">© 2024 Joanne Chen. All rights reserved.</h5>
    </>
  );
}

export default App;
