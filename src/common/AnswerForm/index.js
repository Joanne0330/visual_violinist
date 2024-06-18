import { useState } from 'react';
import { Grid, Typography, Select, FormControl, MenuItem, Paper, Fab, Button, OutlinedInput, InputLabel } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import './styles.css';
import FirstPositionFingerboard from '../FirstPositionFingerboard';

const AnswerForm = (props) => {
  const { onSubmit, isSmallScreen } = props;
  const [noteBaseName, setNoteBaseName] = useState('');
  const [accidental, setAccidental] = useState('')
  const [chosenString, setChosenString] = useState('');
  const [fingering, setFingering] = useState('');
  const [position, setPosition] = useState(0);
  const [showStep2, setShowStep2] = useState(false)
  const [showStep3, setShowStep3] = useState(false)

  const onRefresh = () => {
    setNoteBaseName('')
    setAccidental('')
    setChosenString('')
    setFingering('')
    setPosition(0)
    setShowStep2(false)
    setShowStep3(false)
  }
  const onNoteBaseNameChange = (e) => setNoteBaseName(e.target.value);
  const onAccidentalChange = (e) => setAccidental(e.target.value)
  const onStringChange = (e) => setChosenString(e.target.value)
  const onFingeringChange = (e) => setFingering(e.target.value);
  
  const handleOnSubmit = () => {
    onSubmit(noteBaseName, accidental, chosenString, fingering, position);
    onRefresh();
  }

  return (
    <>
      <Paper elevation={8} className="answerForm" style={{borderRadius:'15px'}}>
          <Grid container direction="column">
              <Grid justifyContent="flex-end" direction="row" container>
                <Fab color="extended" aria-label="refresh" size='small' onClick={onRefresh}>
                  <RefreshIcon />
                </Fab>
              </Grid>
              {/**Step 1 Area */}
              <Grid item>
                <Typography id="instructionText">Step 1: What's the name of this note?</Typography>
                  {showStep2 ?
                    <>
                      <Grid justifyContent="center" direction="row" container>
                        <Typography className="myAnswer">{noteBaseName}<em>{accidental}</em></Typography>
                      </Grid>
                    </>
                  :
                    <>
                      <FormControl size="small" fullWidth >
                      <InputLabel color='secondary'>Name</InputLabel>
                          <Select
                              value={noteBaseName}
                              onChange={onNoteBaseNameChange}
                              color='secondary'
                              className='selectInput'
                              input={<OutlinedInput label="Name" color='secondary' />}
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
                          <InputLabel color='secondary'>Natural, <em>b</em> or <em>#</em></InputLabel>
                          <Select
                              value={accidental}
                              onChange={onAccidentalChange}
                              color='secondary'
                              input={<OutlinedInput label="Natural, b or #" color='secondary' />}
                          >
                            <MenuItem value={''} disabled>natural (default)</MenuItem>
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
                    {showStep3 ?
                      <>
                        <Grid justifyContent="center" direction="row" container>
                          <Typography className="myAnswer">{chosenString}{fingering}</Typography>
                        </Grid>
                      </>
                    :
                      <>
                        <FormControl size="small" fullWidth>
                          <InputLabel color='secondary'>String</InputLabel>
                          <Select
                              value={chosenString}
                              onChange={onStringChange}
                              color='secondary'
                              className='selectInput'
                              input={<OutlinedInput label="String" color='secondary' />}
                          >
                              <MenuItem value={'G'}>G string</MenuItem>
                              <MenuItem value={'D'}>D string </MenuItem>
                              <MenuItem value={'A'}>A string</MenuItem>
                              <MenuItem value={'E'}>E string</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl size="small" fullWidth>
                          <InputLabel color='secondary'>Finger</InputLabel>
                          <Select
                              value={fingering}
                              onChange={onFingeringChange}
                              color='secondary'
                              input={<OutlinedInput label="Finger" color='secondary' />}
                          >
                              <MenuItem value={'0'}>0</MenuItem>
                              <MenuItem value={'1'}>1</MenuItem>
                              <MenuItem value={'2'}>2</MenuItem>
                              <MenuItem value={'3'}>3</MenuItem>
                              <MenuItem value={'4'}>4</MenuItem>
                          </Select>
                        </FormControl>
                      </>
                    }
                    {!showStep3 &&
                      <Grid justifyContent="flex-end" direction="row" container>
                        <Button disabled={!fingering || !chosenString} id='nextButton' size='small' variant="contained" color="secondary" onClick={() => setShowStep3(true)}>
                          Next
                        </Button>
                      </Grid>
                    }
                  </Grid>
                </>
              }
              {/**Step 3 Area */}
              {showStep3 && 
                <>
                  <FirstPositionFingerboard 
                    position={position}
                    setPosition={setPosition}
                    isSmallScreen={isSmallScreen}
                    isReveal={false}
                  />
                  <Grid justifyContent="flex-end" direction="row" container>
                    <Button onClick={() => handleOnSubmit(noteBaseName, accidental, chosenString, fingering, position)} variant="contained" color="secondary" disabled={!noteBaseName || !chosenString || !fingering || !position}>
                      Submit
                    </Button>
                  </Grid>
                </>
              }
          </Grid>
      </Paper>
    </>
  )
}

export default AnswerForm;