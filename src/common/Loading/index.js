import React, { Fragment } from 'react';
import musicLoader from './musicLoader.gif';

export const MusicLoader = () => (
    <Fragment>
        <img 
            src={musicLoader}
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt='Loading...'
        />
    </Fragment>
);

export default MusicLoader; 