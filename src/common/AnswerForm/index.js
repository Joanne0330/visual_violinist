import React, {useState} from 'react';
import { Grid, Typography, Select, FormControl, MenuItem, Paper, Fab, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
// import { StylesProvider } from "@material-ui/core/styles";
import './styles.css';

const AnswerForm = () => {
    const [noteBaseName, setNoteBaseName] = useState('');
    const [accidental, setAccidental] = useState('')
    const [fingering, setFingering] = useState('');
    const [position, setPosition] = useState(0);
    const [showStep2, setShowStep2] = useState(false)
    // const [showStep3, setShowStep3] = useState(false)


    const noteBaseNameChange = (e) => setNoteBaseName(e.target.value);
    const accidentalChange = (e) => setAccidental(e.target.value)
    const fingeringChange = (e) => setFingering(e.target.value);
    
    const buttonSelected = (num) => {
        if(num === position) {
            return '#9c27b0';
        } 
    }

    
    console.log('note base name: ',noteBaseName);
    console.log('accidental name: ', accidental)
    console.log('fingering',fingering);
    console.log('position',position);

    return (
        <>
        <Paper elevation={8} className="answerForm" style={{borderRadius:'25px'}}>
            <Grid container direction="column">
                <Grid justifyContent="flex-end" direction="row" container>
                  <Fab color="extended" aria-label="refresh" size='small'>
                    <RefreshIcon />
                  </Fab>
                </Grid>
                {/**Step 1 Area */}
                <Grid item>
                  <Typography id="instructionText">Step 1: What's the name of this note?</Typography>
                    {showStep2 ?
                      <>
                        <Grid justifyContent="center" direction="row" container>
                          <Typography id="myAnswer">{noteBaseName}<em>{accidental}</em></Typography>
                        </Grid>
                      </>
                    :
                      <>
                        <FormControl size="small" fullWidth >
                            <Select
                                value={noteBaseName}
                                onChange={noteBaseNameChange}
                                color='success'
                                style={{marginBottom: '10px'}}
                            >
                              <MenuItem value={'A'}>A</MenuItem>
                              <MenuItem value={'B'}>B</MenuItem>
                              <MenuItem value={'C'}>C</MenuItem>
                              <MenuItem value={'D'}>D</MenuItem>
                              <MenuItem value={'E'}>E</MenuItem>
                              <MenuItem value={'F'}>F</MenuItem>
                              <MenuItem value={'G'}>G</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl size="small" fullWidth>
                            <Select
                                value={accidental}
                                onChange={accidentalChange}
                                color='success'
                            >
                              <MenuItem value={''}>natural</MenuItem>
                              <MenuItem value={'b'}><em>b</em></MenuItem>
                              <MenuItem value={'#'}><em>#</em></MenuItem>
                            </Select>
                          </FormControl>
                      </>
                    }
                {!showStep2 &&
                  <Grid justifyContent="flex-end" direction="row" container>
                    <Button disabled={!noteBaseName} id='nextButton' size='small' variant="contained" color="secondary" onClick={() => setShowStep2(true)}>
                      Next
                    </Button>
                  </Grid>
                }
                </Grid>
                {/**Step 2 Area */}
                {showStep2 &&
                  <>
                    <Grid item>
                        <Typography id="instructionText">Step 2: What's the fingering for this note?</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={fingering}
                                onChange={fingeringChange}
                                color='success'
                            >
                                <MenuItem value={'E0'}>E string open</MenuItem>
                                <MenuItem value={'E1'}>E string 1</MenuItem>
                                <MenuItem value={'E2'}>E string 2</MenuItem>
                                <MenuItem value={'E3'}>E string 3</MenuItem>
                                <MenuItem value={'E4'}>E string 4</MenuItem>
                                <MenuItem value={'A0'}>A string open</MenuItem>
                                <MenuItem value={'A1'}>A string 1</MenuItem>
                                <MenuItem value={'A2'}>A string 2</MenuItem>
                                <MenuItem value={'A3'}>A string 3</MenuItem>
                                <MenuItem value={'A4'}>A string 4</MenuItem>    
                                <MenuItem value={'D0'}>D string open</MenuItem>
                                <MenuItem value={'D1'}>D string 1</MenuItem>
                                <MenuItem value={'D2'}>D string 2</MenuItem>
                                <MenuItem value={'D3'}>D string 3</MenuItem>
                                <MenuItem value={'D4'}>D string 4</MenuItem>
                                <MenuItem value={'G0'}>G string open</MenuItem>
                                <MenuItem value={'G1'}>G string 1</MenuItem>
                                <MenuItem value={'G2'}>G string 2</MenuItem>
                                <MenuItem value={'G3'}>G string 3</MenuItem>
                                <MenuItem value={'G4'}>G string 4</MenuItem>

                            </Select>
                        </FormControl>
                      <Grid justifyContent="flex-end" direction="row" container>
                        <Button id='nextButton' size='small' variant="contained" color="secondary">
                          Next
                        </Button>
                      </Grid>
                    </Grid>
                  </>
                }
                {/**Step 3 Area */}
                <Typography id="instructionText">Step 3: Where is this note on your fingerboard?</Typography>
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
        </Paper>

        </>
    )

}

export default AnswerForm;