import './styles.css';
import PracticeSession from "../../common/PracticeSession";
import useIsSmallScreen from '../../hooks/useIsSmallScreen';
import { useLocation } from 'react-router-dom';
import  practiceData from './practiceData'

const PracticePage = () => {
  const isSmallScreen = useIsSmallScreen();
  const location = useLocation();
  // TODO: In case url manually installed incorrectly, need to put an error page, consider putting in loading as well
  // console.log(mockData)
  return(
    <>
      {!practiceData[location.pathname] ?
        <h1 style={{color: 'white'}}>Future Error Template</h1>
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