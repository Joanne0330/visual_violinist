import './styles.css';
import {useState} from 'react';
import FlashCardBeginModal from '../../common/FlashCardBeginModal';

const FlashCardPage = () => {
	// const [flashCardsData, setFlashCardsData] = useState([]);
	const [isModalOpen] = useState(true);

	const convertChosenStackToData = (chosenStackArr) => {
		console.log('converting this:', chosenStackArr)
		//1) map to find the correct data and push into an array

		//2) filter out the duplicates

		//3) double the data

		//4) shuffle

		//5) assign to flashCardData
	}

	return (
		<>
			<h2 className='flashCardPageText'>Flash Card</h2>
			{/* <h3 className='learnPageText'>{learnData[location.pathname].subText}</h3> */}
			<FlashCardBeginModal isModalOpen={isModalOpen} convertChosenStackToData={convertChosenStackToData}/>
		</>
	)
}

export default FlashCardPage;