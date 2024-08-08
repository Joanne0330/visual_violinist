import './styles.css';
import {useState} from 'react';
import FlashCardBeginModal from '../../common/FlashCardBeginModal';
import { flashCardData } from './flashCardData';
import { shuffleDataArray } from '../../hooks/dataHooks';

const FlashCardPage = () => {
	const [chosenFlashCardsData, setChosenFlashCardsData] = useState([]);
	const [isModalOpen] = useState(true);

	const convertChosenStackToData = (chosenStackArr) => {
		//1) map to find the correct data and push into an array
		let singleDataArr = [];
		chosenStackArr.map(choice => singleDataArr.push(flashCardData[choice]))

		//2) filter out the duplicates
		const key = 'noteImg';
		const filteredSingleData = [...new Map(singleDataArr.flat().map(note => [note[key], note])).values()];	

		//3) double the data
		let doubledData = filteredSingleData;
		filteredSingleData.map(item => doubledData.push(item))

		//4) shuffle data
		const shuffledDoubleData = shuffleDataArray(doubledData);

		//5) assign to flashCardData
		setChosenFlashCardsData(shuffledDoubleData);
	};

	return (
		<>
			<h2 className='flashCardPageText'>Flash Card</h2>
			{/* <h3 className='learnPageText'>{learnData[location.pathname].subText}</h3> */}
			<FlashCardBeginModal 
				isModalOpen={isModalOpen} 
				convertChosenStackToData={convertChosenStackToData}
				chosenFlashCardsData={chosenFlashCardsData}
				setChosenFlashCardsData={setChosenFlashCardsData}
				/>
		</>
	)
}

export default FlashCardPage;