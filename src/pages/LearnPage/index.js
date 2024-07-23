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
	const location = useLocation();
	const isSmallScreen = useIsSmallScreen();
	const isMediumScreen = useIsMediumScreen();

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
							isMediumScreen={isMediumScreen}
						/>
				</>		
			}
		</>
	)
}

export default LearnPage;