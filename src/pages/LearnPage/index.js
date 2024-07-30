import './styles.css';
import LearnSession from "../../common/LearnSession";
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {useIsSmallScreen, useIsMediumScreen} from '../../hooks/screenSizeHooks';
import  learnData from './learnData';
import PageNotFound from '../../common/PageNotFound';

const LearnPage = () => {
	const [dataIndex,setDataIndex ] = useState(0);
	const [dataArray, setDataArray] = useState(undefined)
	const [keyName, setKeyName] = useState('');
	const location = useLocation();
	const isSmallScreen = useIsSmallScreen();
	const isMediumScreen = useIsMediumScreen();

	useEffect(() => {
    setDataIndex(0);
		setDataArray(learnData[location.pathname].learnData)
		const findKeyFromTitle = learnData[location.pathname].learnTitle.slice(7,16);
		setKeyName(findKeyFromTitle)
  }, [ 
		location.pathname])

	return (
		<>
			{!dataArray?
				<PageNotFound />
				:
				<>
					<h2 className='learnPageText'>{learnData[location.pathname].learnTitle}</h2>
					<h3 className='learnPageText'>{learnData[location.pathname].subText}</h3>
						<LearnSession 
							dataArray={dataArray}
							dataIndex={dataIndex}
							setDataIndex={setDataIndex}
							isSmallScreen={isSmallScreen}
							isMediumScreen={isMediumScreen}
							pathname={location.pathname}
							keyName={keyName}
							
						/>
				</>		
			}
		</>
	)
}

export default LearnPage;