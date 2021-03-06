import React, {useState} from 'react';
import { Grid, Typography, Select, FormControl, MenuItem} from '@mui/material';
// import { StylesProvider } from "@material-ui/core/styles";
import './styles.css';

const FingerBoard = () => {
    const [position, setPosition] = useState(0);
    const [noteName, setNoteName] = useState('');


    const noteNameChange = (e) => setNoteName(e.target.value);
    
    const buttonSelected = (num) => {
        if(num === position) {
            return '#008080';
        } 
    }

    
    console.log(position);
    console.log(noteName);

    return (
        <>
            <Grid container direction="column">
                <Grid item>
                    <Typography>Step 1: Select a name for this note</Typography>
                    <FormControl fullWidth>
                        <Select
                            value={noteName}
                            onChange={noteNameChange}
                        >
                        <MenuItem value={'A'}>A</MenuItem>
                        <MenuItem value={'Ab'}>Ab</MenuItem>
                        <MenuItem value={'B'}>B</MenuItem>
                        <MenuItem value={'Bb'}>Bb</MenuItem>
                        <MenuItem value={'C'}>C</MenuItem>
                        <MenuItem value={'C#'}>C#</MenuItem>
                        <MenuItem value={'D'}>D</MenuItem>
                        <MenuItem value={'D#'}>D#</MenuItem>
                        <MenuItem value={'Db'}>Db</MenuItem>
                        <MenuItem value={'E'}>E</MenuItem>
                        <MenuItem value={'Eb'}>Eb</MenuItem>
                        <MenuItem value={'F'}>F</MenuItem>
                        <MenuItem value={'F#'}>F#</MenuItem>
                        <MenuItem value={'G'}>G</MenuItem>
                        <MenuItem value={'G#'}>G#</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Typography>Step 3: Select a spot to place your finger to play this note</Typography>
                <Grid container item direction="row">
                    <button className="buttonOpen" style={{backgroundColor: buttonSelected(1)}} onClick={() => setPosition(1)}>G</button>
                    <button className="buttonOpen" style={{backgroundColor: buttonSelected(2)}} onClick={() => setPosition(2)}>D</button>
                    <button className="buttonOpen" style={{backgroundColor: buttonSelected(3)}} onClick={() => setPosition(3)}>A</button>
                    <button className="buttonOpen" style={{backgroundColor: buttonSelected(4)}} onClick={() => setPosition(4)}>E</button>
                
                </Grid>
                <Grid container item direction="row">
                    <button className="button" style={{backgroundColor: buttonSelected(5)}} onClick={() => setPosition(5)}><div className='verticalLine'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(6)}} onClick={() => setPosition(6)}><div className='verticalLine'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(7)}} onClick={() => setPosition(7)}><div className='verticalLine'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(8)}} onClick={() => setPosition(8)}><div className='verticalLine'></div></button>
                
                </Grid>
                <Grid container item direction="row">
                    <button className="button" style={{backgroundColor: buttonSelected(9)}} onClick={() => setPosition(9)}><div className='cross'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(10)}} onClick={() => setPosition(10)}><div className='cross'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(11)}} onClick={() => setPosition(11)}><div className='cross'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(12)}} onClick={() => setPosition(12)}><div className='cross'></div></button>
                    <Typography> First finger line</Typography>

                </Grid>
                <Grid container item direction="row">
                    <button className="button" style={{backgroundColor: buttonSelected(13)}} onClick={() => setPosition(13)}><div className='verticalLine'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(14)}} onClick={() => setPosition(14)}><div className='verticalLine'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(15)}} onClick={() => setPosition(15)}><div className='verticalLine'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(16)}} onClick={() => setPosition(16)}><div className='verticalLine'></div></button>
                </Grid>           
                <Grid container item direction="row">
                    <button className="button" style={{backgroundColor: buttonSelected(17)}} onClick={() => setPosition(17)}><div className='verticalLine'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(18)}} onClick={() => setPosition(18)}><div className='verticalLine'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(19)}} onClick={() => setPosition(19)}><div className='verticalLine'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(20)}} onClick={() => setPosition(20)}><div className='verticalLine'></div></button>
                </Grid>
                <Grid container item direction="row">
                    <button className="button" style={{backgroundColor: buttonSelected(21)}} onClick={() => setPosition(21)}><div className='cross'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(22)}} onClick={() => setPosition(22)}><div className='cross'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(23)}} onClick={() => setPosition(23)}><div className='cross'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(24)}} onClick={() => setPosition(24)}><div className='cross'></div></button>
                    <Typography> Third finger line</Typography>
            
                </Grid>
                <Grid container item direction="row">
                    <button className="button" style={{backgroundColor: buttonSelected(25)}} onClick={() => setPosition(25)}><div className='verticalLine'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(26)}} onClick={() => setPosition(26)}><div className='verticalLine'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(27)}} onClick={() => setPosition(27)}><div className='verticalLine'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(28)}} onClick={() => setPosition(28)}><div className='verticalLine'></div></button>
                </Grid>
                <Grid container item direction="row">
                    <button className="button" style={{backgroundColor: buttonSelected(29)}} onClick={() => setPosition(29)}><div className='verticalLine'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(30)}} onClick={() => setPosition(30)}><div className='verticalLine'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected(31)}} onClick={() => setPosition(31)}><div className='verticalLine'></div></button>
                    <button className="button" style={{backgroundColor: buttonSelected()}} onClick={() => setPosition(32)}><div className='verticalLine'></div></button>
                </Grid>
            </Grid>

        </>
    )

}

export default FingerBoard;