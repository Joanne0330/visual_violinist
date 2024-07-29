import './styles.css';
import PracticeSession from "../../common/PracticeSession";
import {useIsSmallScreen}from '../../hooks/screenSizeHooks';
import { useLocation } from 'react-router-dom';
import  practiceData from './practiceData';
import PageNotFound from '../../common/PageNotFound';

const PracticePage = () => {
  const isSmallScreen = useIsSmallScreen();
  const location = useLocation();

  return(
    <>
      {!practiceData[location.pathname] ?
        <PageNotFound />
        :
        <>
          <h2 className='practicePageText'>{practiceData[location.pathname].practiceTitle}</h2>
          <h3 className='practicePageText'>{practiceData[location.pathname].subText}</h3>
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