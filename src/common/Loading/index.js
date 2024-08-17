import React, { Fragment } from 'react';
import musicLoader from './musicLoader.gif';

export const MusicLoader = (props) => {
	const {isSmallScreen, isFlashCardsFeature} = props;

	const heightFinder = (isSmallScreen, isFlashCardsFeature) => {
		return isSmallScreen && isFlashCardsFeature ? 250 : !isSmallScreen && isFlashCardsFeature ? 450 : ''
	}

	return (
		<Fragment>
			<img 
				src={musicLoader}
				style={{ width: '100%', height: heightFinder(isSmallScreen, isFlashCardsFeature), margin: 'auto', display: 'block', background: 'linear-gradient(75deg, black, #254d74)' }}
				alt='Loading...'
			/>
		</Fragment>
	)
};

export default MusicLoader; 