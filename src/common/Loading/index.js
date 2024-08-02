import React, { Fragment } from 'react';
import musicLoader from './musicLoader.gif';

export const MusicLoader = () => (
	<Fragment>
		<img 
			src={musicLoader}
			style={{ width: '100%', margin: 'auto', display: 'block', background: 'linear-gradient(75deg, black, #254d74)' }}
			alt='Loading...'
		/>
	</Fragment>
);

export default MusicLoader; 