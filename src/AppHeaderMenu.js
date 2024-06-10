import './styles.css';
import { Grid, Tooltip, IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import { useState, Fragment } from 'react';
import useIsSmallScreen from './hooks/useIsSmallScreen';
import { useNavigate } from 'react-router-dom';


const studyList = ['study 1', 'study 2', 'study 3']
const practiseList = ['practice 1', 'practice 2', 'practice 3']

const pageIconButtons = [
  {pageTitle: 'Home', buttonIcon: <HomeOutlinedIcon style={{color: 'white'}} fontSize='large'/>, pageControl: 'Home'},
  {pageTitle: 'Learn and study', buttonIcon: <MenuBookOutlinedIcon style={{color: 'white'}} fontSize='large'/>, pageControl: 'Study'},
  {pageTitle: 'Play and practice', buttonIcon: <MusicNoteOutlinedIcon style={{color: 'white'}} fontSize='large' />, pageControl: 'Practice'},
]

function AppHeaderMenu() {
  const isSmallScreen = useIsSmallScreen();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenuButton, setSelectedMenuButton] = useState('')
  const [menuList, setMenuList] = useState([])
  const open = Boolean(anchorEl);
  // let location = useLocation();
  let navigate = useNavigate();

  const handleRedirect = (page) => {
    console.log('go to page', page)
    if(page === 'Home') {
      navigate('')

    }
  }

  const handleClick = (event, pageControl) => {
    if(pageControl === 'Study' || pageControl === 'Practice') {
      const findMenuList = pageControl === 'Study' ? studyList : practiseList
      setMenuList(findMenuList)
      setAnchorEl(event.currentTarget);
      setSelectedMenuButton(pageControl)
    } else {
      handleRedirect(pageControl)
      setMenuList([])
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedMenuButton('')
  };

  return(
    <div className="appHeader"> 
      <Grid container direction='row' justifyContent='space-between'>
        <Grid item>
          {isSmallScreen ?
            <h3 className='appTitle' style={{marginTop: 5}}>The Visual Violinist</h3>
            :
            <h1 className='appTitle'>The Visual Violinist</h1>
          }
        </Grid>
        <Grid item >
          {pageIconButtons.map((item, i) => (
            <span key={i}>
              <Tooltip 
                title={<Fragment><Typography color="inherit">{item.pageTitle} </Typography></Fragment>} 
                key={`menu-tooltip-${i}`} 
                arrow
              >
                <IconButton
                  // tabIndex={i}
                  key={`menu-button-${i}`}
                  style={{backgroundColor: selectedMenuButton === item.pageControl ? '#ffb3bf': '', margin: isSmallScreen ? 0 : 5,}}
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
                key={`menu-list-${i}`}
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
                {menuList.map((course, index) => (
                  <MenuItem onClick={handleClose} key={`menu-list-item-${index}`}>
                    {course}
                  </MenuItem>
                ))}
              </Menu>
            </span>              
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default AppHeaderMenu;