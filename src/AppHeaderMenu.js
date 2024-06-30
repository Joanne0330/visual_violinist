import './styles.css';
import { Grid, Tooltip, IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import { useState, Fragment } from 'react';
import useIsSmallScreen from './hooks/useIsSmallScreen';
import { useNavigate, useLocation } from 'react-router-dom';


export const learnList = [
  {name: 'Learn: C Major - all natural', url: '/learn/c_major'},
  {name: 'Learn: G Major - 1 sharp', url: '/learn/g_major'},
  {name: 'Learn: F Major - 1 flat', url: '/learn/f_major'},
  {name: 'Learn: D Major - 2 sharps', url: '/learn/d_major'},
];

export const practiseList = [
  {name: 'Practice: C Major - all natural', url: '/practice/c_major'},
  {name: 'Practice: G Major - 1 sharp', url: '/practice/g_major'},
  {name: 'Practice: F Major - 1 flat', url: '/practice/f_major'},
  {name: 'Practice: D Major - 2 sharps', url: '/practice/d_major'},
  {name: 'Practice: Bb Major - 2 flats', url: '/practice/b_flat_major'},
  {name: 'Practice: A Major - 3 sharps', url: '/practice/a_major'},
  {name: 'Practice: Eb Major - 3 flats', url: '/practice/e_flat_major'},
  {name: 'Practice: E Major - 4 sharps', url: '/practice/e_major'},
  {name: 'Practice: Ab Major - 4 flats', url: '/practice/a_flat_major'},
];

const pageIconButtons = [
  {pageTitle: 'Home', buttonIcon: <HomeOutlinedIcon style={{color: 'white'}} fontSize='large'/>, pageControl: 'Home'},
  {pageTitle: 'Learn', buttonIcon: <MenuBookOutlinedIcon style={{color: 'white'}} fontSize='large'/>, pageControl: 'Learn'},
  {pageTitle: 'Play and practice', buttonIcon: <MusicNoteOutlinedIcon style={{color: 'white'}} fontSize='large' />, pageControl: 'Practice'},
]

function AppHeaderMenu() {
  const isSmallScreen = useIsSmallScreen();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenuButton, setSelectedMenuButton] = useState('')
  const [menuList, setMenuList] = useState([])
  const open = Boolean(anchorEl);
  let navigate = useNavigate();
  const location = useLocation();


  const handleRedirect = (redirectURL) => navigate(redirectURL)

  const handleClick = (event, pageControl) => {
    if(pageControl === 'Learn' || pageControl === 'Practice') {
      const findMenuList = pageControl === 'Learn' ? learnList : practiseList
      setMenuList(findMenuList)
      setAnchorEl(event.currentTarget);
      setSelectedMenuButton(pageControl)
    } else {
      handleRedirect('')
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
                  elevation: 4,
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
                  <MenuItem 
                    onClick={() => handleRedirect(course.url)} 
                    key={`menu-list-item-${index}`} 
                    disabled={course.url === location.pathname}
                  >
                    {course.name}
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