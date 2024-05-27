import { Grid, Tooltip, IconButton, Menu, MenuItem } from '@material-ui/core';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import './styles.css';
import PracticePage from "./pages/PracticePage";
import { useState } from 'react';

const pageIconButtons = [
  {pageTitle: 'Home', buttonIcon: <HomeOutlinedIcon style={{color: 'white'}} fontSize='large'/>, pageControl: 'Home'},
  {pageTitle: 'Learn and study', buttonIcon: <MenuBookOutlinedIcon style={{color: 'white'}} fontSize='large'/>, pageControl: 'Study'},
  {pageTitle: 'Play and practise', buttonIcon: <MusicNoteOutlinedIcon style={{color: 'white'}} fontSize='large' />, pageControl: 'Practice'},
]

const studyList = ['study 1', 'study 2', 'study 3']
const practiseList = ['practice 1', 'practice 2', 'practice 3']

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuList, setMenuList] = useState([])
  const open = Boolean(anchorEl);


  const handleRedirect = (page) => {
    console.log('go to page', page)
  }

  const handleClick = (event, pageControl) => {
    if(pageControl === 'Study' || pageControl === 'Practice') {
      const findMenuList = pageControl === 'Study' ? studyList : practiseList
      setMenuList(findMenuList)
      setAnchorEl(event.currentTarget);
    } else {
      handleRedirect(pageControl)
      setMenuList([])
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="appHeader"> 
        <Grid container direction='row' justifyContent='space-between'>
          <Grid item>
            <h2 className='appTitle'>The Visual Violinist</h2>
          </Grid>
          <Grid item >
            {pageIconButtons.map((item, i) => (
              <>
                <Tooltip title={item.pageTitle} key={`menu-tooltip-${i}`}>
                  <IconButton
                    key={`menu-button-${i}`}
                    onClick={ e => handleClick(e, item.pageControl)}
                    size="medium"
                    sx={{ ml: 2 }}
                    aria-controls={open ? item.pageControl : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    {item.buttonIcon}
                  </IconButton>
                </Tooltip>
                <Menu
                  key={`menu-drawer-${i}`}
                  getContentAnchorEl={null}
                  anchorEl={anchorEl}
                  id={item.pageControl}
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  {menuList.map(course => (
                    <MenuItem onClick={handleClose} key={`menulist-${course}`}>
                      {course}
                    </MenuItem>
                  ))}
                </Menu>
              </>              
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
