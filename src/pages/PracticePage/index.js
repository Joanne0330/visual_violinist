import './styles.css';
import { useEffect, useState } from 'react';
import PracticeSession from "../../common/PracticeSession";
import useIsSmallScreen from '../../hooks/useIsSmallScreen';

const mockData = [
  {noteImg: "/assets/images/mid_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['A', 'D'], fingering: ['0', '4'], position: [3, 30]}, 
  {noteImg: "/assets/images/high_G_sharp.png", noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
  {noteImg: "/assets/images/mid_E_flat.png", noteBaseName: 'E', accidental: 'b', chosenString: ['D'], fingering: ['1'], position: [6]},
  // {noteImg: "/assets/images/mid_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['A', 'D'], fingering: ['0', '4'], position: [3, 30]}, 
  // {noteImg: "/assets/images/high_G_sharp.png", noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
  // {noteImg: "/assets/images/mid_E_flat.png", noteBaseName: 'E', accidental: 'b', chosenString: ['D'], fingering: ['1'], position: [6]},
  // {noteImg: "/assets/images/mid_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['A', 'D'], fingering: ['0', '4'], position: [3, 30]}, 
  // {noteImg: "/assets/images/high_G_sharp.png", noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
  // {noteImg: "/assets/images/mid_E_flat.png", noteBaseName: 'E', accidental: 'b', chosenString: ['D'], fingering: ['1'], position: [6]},
  // {noteImg: "/assets/images/mid_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['A', 'D'], fingering: ['0', '4'], position: [3, 30]}, 
  // {noteImg: "/assets/images/high_G_sharp.png", noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
  // {noteImg: "/assets/images/mid_E_flat.png", noteBaseName: 'E', accidental: 'b', chosenString: ['D'], fingering: ['1'], position: [6]},
  // {noteImg: "/assets/images/mid_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['A', 'D'], fingering: ['0', '4'], position: [3, 30]}, 
  // {noteImg: "/assets/images/high_G_sharp.png", noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
  // {noteImg: "/assets/images/mid_E_flat.png", noteBaseName: 'E', accidental: 'b', chosenString: ['D'], fingering: ['1'], position: [6]},
  // {noteImg: "/assets/images/mid_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['A', 'D'], fingering: ['0', '4'], position: [3, 30]}, 
  // {noteImg: "/assets/images/high_G_sharp.png", noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
  // {noteImg: "/assets/images/mid_E_flat.png", noteBaseName: 'E', accidental: 'b', chosenString: ['D'], fingering: ['1'], position: [6]}
]
const PracticePage = () => {
  const isSmallScreen = useIsSmallScreen();
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    //TODO: this is the place to decide which key / data to use depending on the URL 
    setSelectedData(mockData)
  }, [setSelectedData])

  return(
    <>
      <h3 className='practicePageHeader'>This is the Practice Page Title</h3>
      <PracticeSession isSmallScreen={isSmallScreen} selectedData={selectedData}/>
    </>
  )
}

export default PracticePage;