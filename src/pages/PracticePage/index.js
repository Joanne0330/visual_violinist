import './styles.css';
import PracticeSession from "../../common/PracticeSession";
import {useIsSmallScreen}from '../../hooks/screenSizeHooks';
import { useLocation } from 'react-router-dom';
import  practiceData from './practiceData';
import PageNotFound from '../../common/PageNotFound';
import { Typography } from '@mui/material';

const PracticePage = () => {
  const isSmallScreen = useIsSmallScreen();
  const location = useLocation();

  return(
    <>
      {!practiceData[location.pathname] ?
        <PageNotFound />
        :
        <>
          <Typography variant='h5' className='practicePageText'>{practiceData[location.pathname].practiceTitle}</Typography>
          <Typography variant='subtitle1' className='practicePageText'>{practiceData[location.pathname].subText}</Typography>
          <br />
          <PracticeSession  
            isSmallScreen={isSmallScreen} 
            selectedData={practiceData[location.pathname].practiceData} 
            path={location.pathname} 
            keyName={practiceData[location.pathname].practiceTitle.replace("Let's practice ", '')}
          />
        </>
      }
    </>
  )
}

export default PracticePage;