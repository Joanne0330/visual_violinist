import React from 'react';
import {Paper, Grid} from '@material-ui/core';
import AnswerForm from '../AnswerForm';
import './styles.css';
import c1 from '../../SVG/Cmaj/C1.svg';


const ExcerciseCard = () => {

    return (
        <>
            <Paper id="card" elevation={8}>
                <Grid container direction='row'>
                    <Grid item>
                        <img src={c1} style={{maxWidth: '1000px'}} />
                    </Grid>
                    <Grid item>
                        <AnswerForm />

                    </Grid>
                </Grid>

            </Paper>
        </>
    )

}

export default ExcerciseCard; 