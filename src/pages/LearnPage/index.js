import './styles.css';
import LearnSession from "../../common/LearnSession";
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import useIsSmallScreen from '../../hooks/useIsSmallScreen';
import  learnData from './learnData';
import PageNotFound from '../../common/PageNotFound';

const LearnPage = () => {
	const [dataIndex,setDataIndex ] = useState(0);
	const location = useLocation();
	const isSmallScreen = useIsSmallScreen();

	useEffect(() => {
    setDataIndex(0);
  }, [ 
		location.pathname])

	return (
		<>
			{!learnData[location.pathname] ?
				<PageNotFound />
				:
				<>
					<h2 className='learnPageText'>{learnData[location.pathname].learnTitle}</h2>
					<h4 className='learnPageText'>{learnData[location.pathname].subText}</h4>
						<LearnSession 
							dataArray={learnData[location.pathname].learnData}
							dataIndex={dataIndex}
							setDataIndex={setDataIndex}
							isSmallScreen={isSmallScreen}
						/>
				</>		
			}
		</>
	)
}

export default LearnPage;