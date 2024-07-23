import './styles.css';
import LearnSession from "../../common/LearnSession";
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import useIsSmallScreen from '../../hooks/useIsSmallScreen';
import  learnData from './learnData';
import PageNotFound from '../../common/PageNotFound';

const LearnPage = () => {
	const [dataIndex,setDataIndex ] = useState(0);
	const [dataArray, setDataArray] = useState(undefined)
	const location = useLocation();
	const isSmallScreen = useIsSmallScreen();

	useEffect(() => {
    setDataIndex(0);
		setDataArray(learnData[location.pathname].learnData)
  }, [ 
		location.pathname])

	return (
		<>
			{!dataArray?
				<PageNotFound />
				:
				<>
					<h2 className='learnPageText'>{learnData[location.pathname].learnTitle}</h2>
					<h4 className='learnPageText'>{learnData[location.pathname].subText}</h4>
						<LearnSession 
							dataArray={dataArray}
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