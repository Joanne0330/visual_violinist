import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import AnswerForm from '../AnswerForm';
import './styles.css';
import c1 from '../../SVG/Cmaj/C1.svg';


const ExcerciseCard = () => {

  return (
    <>
        <Grid container direction='row'>
          <Grid item >
            <img alt="note" src={c1} style={{maxWidth: '1000px'}} />
          </Grid>
          {/* <Grid container direction='column'> */}
            <Grid item>
              <Typography>Correct: 0/10</Typography>
              <Typography>Incorrt: 0/10</Typography>
            </Grid>
            <Grid item>
              <AnswerForm />
            </Grid>
          {/* </Grid> */}
        </Grid>
    </>
  )

}

export default ExcerciseCard; 