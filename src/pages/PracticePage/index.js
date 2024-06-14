import './styles.css';
import PracticeSession from "../../common/PracticeSession";
import useIsSmallScreen from '../../hooks/useIsSmallScreen';
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
          <h4 className='practicePageText'>{practiceData[location.pathname].subText}</h4>
          <PracticeSession isSmallScreen={isSmallScreen} selectedData={practiceData[location.pathname].practiceData} path={location.pathname}/>
        </>
      }
    </>
  )
}

export default PracticePage;