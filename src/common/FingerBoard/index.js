import React from 'react';
import { Grid, Typography } from '@mui/material';
// import { StylesProvider } from "@material-ui/core/styles";
import './styles.css';

const FingerBoard = () => {

    return (
        <>
            <Grid container direction="colum">
                <Grid container item direction="row">
                    <button className="buttonOpen">G</button>
                    <button className="buttonOpen">D</button>
                    <button className="buttonOpen">A</button>
                    <button className="buttonOpen">E</button>
                
                </Grid>
                <Grid container item direction="row">
                    <button className="button"><div className='verticalLine'></div></button>
                    <button className="button"><div className='verticalLine'></div></button>
                    <button className="button"><div className='verticalLine'></div></button>
                    <button className="button"><div className='verticalLine'></div></button>
                
                </Grid>
                <Grid container item direction="row">
                    <button className="button"><div className='cross'></div></button>
                    <button className="button"><div className='cross'></div></button>
                    <button className="button"><div className='cross'></div></button>
                    <button className="button"><div className='cross'></div></button>
                    <Typography> First finger line</Typography>

                </Grid>
                <Grid container item direction="row">
                    <button className="button"><div className='verticalLine'></div></button>
                    <button className="button"><div className='verticalLine'></div></button>
                    <button className="button"><div className='verticalLine'></div></button>
                    <button className="button"><div className='verticalLine'></div></button>
                </Grid>           
                <Grid container item direction="row">
                    <button className="button"><div className='verticalLine'></div></button>
                    <button className="button"><div className='verticalLine'></div></button>
                    <button className="button"><div className='verticalLine'></div></button>
                    <button className="button"><div className='verticalLine'></div></button>
                </Grid>
                <Grid container item direction="row">
                    <button className="button"><div className='cross'></div></button>
                    <button className="button"><div className='cross'></div></button>
                    <button className="button"><div className='cross'></div></button>
                    <button className="button"><div className='cross'></div></button>
                    <Typography> Third finger line</Typography>
            
                </Grid>
                <Grid container item direction="row">
                    <button className="button"><div className='verticalLine'></div></button>
                    <button className="button"><div className='verticalLine'></div></button>
                    <button className="button"><div className='verticalLine'></div></button>
                    <button className="button"><div className='verticalLine'></div></button>
                </Grid>
                <Grid container item direction="row">
                    <button className="button"><div className='verticalLine'></div></button>
                    <button className="button"><div className='verticalLine'></div></button>
                    <button className="button"><div className='verticalLine'></div></button>
                    <button className="button"><div className='verticalLine'></div></button>
                </Grid>
            </Grid>

        </>
    )

}

export default FingerBoard;