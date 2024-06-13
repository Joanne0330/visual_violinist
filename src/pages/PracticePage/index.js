import './styles.css';
import PracticeSession from "../../common/PracticeSession";
import useIsSmallScreen from '../../hooks/useIsSmallScreen';
import { useLocation } from 'react-router-dom';
import  practiceData from './practiceData'

// const mockData = [
//   {noteImg: "/assets/images/mid_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['A', 'D'], fingering: ['0', '4'], position: [3, 30]}, 
//   {noteImg: "/assets/images/high_G_sharp.png", noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
//   {noteImg: "/assets/images/mid_E_flat.png", noteBaseName: 'E', accidental: 'b', chosenString: ['D'], fingering: ['1'], position: [6]},
//   // {noteImg: "/assets/images/mid_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['A', 'D'], fingering: ['0', '4'], position: [3, 30]}, 
//   // {noteImg: "/assets/images/high_G_sharp.png", noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
//   // {noteImg: "/assets/images/mid_E_flat.png", noteBaseName: 'E', accidental: 'b', chosenString: ['D'], fingering: ['1'], position: [6]},
//   // {noteImg: "/assets/images/mid_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['A', 'D'], fingering: ['0', '4'], position: [3, 30]}, 
//   // {noteImg: "/assets/images/high_G_sharp.png", noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
//   // {noteImg: "/assets/images/mid_E_flat.png", noteBaseName: 'E', accidental: 'b', chosenString: ['D'], fingering: ['1'], position: [6]},
//   // {noteImg: "/assets/images/mid_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['A', 'D'], fingering: ['0', '4'], position: [3, 30]}, 
//   // {noteImg: "/assets/images/high_G_sharp.png", noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
//   // {noteImg: "/assets/images/mid_E_flat.png", noteBaseName: 'E', accidental: 'b', chosenString: ['D'], fingering: ['1'], position: [6]},
//   // {noteImg: "/assets/images/mid_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['A', 'D'], fingering: ['0', '4'], position: [3, 30]}, 
//   // {noteImg: "/assets/images/high_G_sharp.png", noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
//   // {noteImg: "/assets/images/mid_E_flat.png", noteBaseName: 'E', accidental: 'b', chosenString: ['D'], fingering: ['1'], position: [6]},
//   // {noteImg: "/assets/images/mid_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['A', 'D'], fingering: ['0', '4'], position: [3, 30]}, 
//   // {noteImg: "/assets/images/high_G_sharp.png", noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
//   // {noteImg: "/assets/images/mid_E_flat.png", noteBaseName: 'E', accidental: 'b', chosenString: ['D'], fingering: ['1'], position: [6]}
// ]

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
          <h3 className='practicePageHeader'>{practiceData[location.pathname].practiceTitle}</h3>
          <PracticeSession isSmallScreen={isSmallScreen} selectedData={practiceData[location.pathname].practiceData} path={location.pathname}/>
        </>
      }
    </>
  )
}

export default PracticePage;