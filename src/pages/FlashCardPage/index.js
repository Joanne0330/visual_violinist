import './styles.css';
import {useState} from 'react';
import { flashCardData } from './flashCardData';
import { shuffleDataArray } from '../../hooks/dataHooks';
import FlashCardsBeginModal from '../../common/FlashCardsBeginModal';
import FlashCardsSession from '../../common/FlashCardsSession';

const FlashCardPage = () => {
	const [chosenFlashCardsData, setChosenFlashCardsData] = useState([]);
	const [isBeginModalOpen, setIsBeginModalOpen] = useState(true);
	const [isEndModalOpen, setIsEndModalOpen] = useState(false);

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

	const aboardSession = () => {
		setChosenFlashCardsData([]);
		setIsBeginModalOpen(true);
		setIsEndModalOpen(false);
	}

	return (
		<>
			<h2 className='flashCardPageText'>Flash Cards</h2>
			{/**TODO: Can move the below into a FlashCardSession Component */}
			{!!chosenFlashCardsData.length && !isBeginModalOpen &&
				<FlashCardsSession 
					chosenFlashCardsData={chosenFlashCardsData} 
					setIsEndModalOpen={setIsEndModalOpen}
					isEndModalOpen={isEndModalOpen}
					aboardSession={aboardSession}
				/>
			
			}
			<FlashCardsBeginModal 
				isBeginModalOpen={isBeginModalOpen} 
				setIsBeginModalOpen={setIsBeginModalOpen}
				convertChosenStackToData={convertChosenStackToData}
				chosenFlashCardsData={chosenFlashCardsData}
				setChosenFlashCardsData={setChosenFlashCardsData}
			/>
		</>
	)
}

export default FlashCardPage;