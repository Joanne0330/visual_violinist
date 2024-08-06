import './styles.css';
import {useState} from 'react';
import FlashCardBeginModal from '../../common/FlashCardBeginModal';

const FlashCardPage = () => {
	// const [flashCardsData, setFlashCardsData] = useState([]);
	const [isModalOpen] = useState(true)
	

	return (
		<>
			<h2 className='flashCardPageText'>Flash Card</h2>
			{/* <h3 className='learnPageText'>{learnData[location.pathname].subText}</h3> */}
			<FlashCardBeginModal isModalOpen={isModalOpen}/>
		</>
	)
}

export default FlashCardPage;