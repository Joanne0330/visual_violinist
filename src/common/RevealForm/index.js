import { Grid, Typography, Paper, Button } from '@mui/material';
import './styles.css';
import FirstPositionFingerboard from '../FirstPositionFingerboard';

const RevealForm = (props) => {
  const { dataArray, dataIndex, revealNextAnswer, revealPreviousAnswer, resetEntireExcercise, isSmallScreen } = props;
  
  return (
    <>
      <Paper elevation={8} className="answerForm" style={{borderRadius:'15px'}}>
        <Grid container direction="column">
          {/**Name area: */}
          <Grid item>
            <Typography id="instructionText">The name of this note is:</Typography>
            <Grid justifyContent="center" direction="row" container>
              <Typography className="answer">{dataArray[dataIndex].noteBaseName}<em>{dataArray[dataIndex].accidental}</em></Typography>
            </Grid>    
          </Grid>

          {/**String and fingering area */}
          <Grid item>
            {dataArray[dataIndex].fingering.length > 1 ? 
              <Typography id="instructionText">{`One of ${dataArray[dataIndex].fingering.length} ways you can play this note is using this string and finger:`}</Typography>
              :
              <Typography id="instructionText">The string and finger you should use to play this note:</Typography>
            }
              {/**TODO: you may need to iterate or assign index 0 */}
              <Grid justifyContent="center" direction="row" container>
                <Typography className="answer">{dataArray[dataIndex].chosenString[0]}{dataArray[dataIndex].fingering[0]}</Typography>
              </Grid>
          </Grid>
                 
          {/**Position area */}
          <FirstPositionFingerboard 
            position={dataArray[dataIndex].position[0]}
            setPosition={null}
            isSmallScreen={isSmallScreen}
            isReveal={true}
          />
          <Grid justifyContent="space-between" direction="row" container style={{marginTop: '10px'}}>
            <Button  id='nextButton' variant="contained" color="secondary" disabled={dataIndex === 0} onClick={revealPreviousAnswer}>
              Back
            </Button>
            {dataIndex === dataArray.length - 1 ?
              <Button id="nextButton" variant="contained" color="secondary" onClick={resetEntireExcercise}>
                Try the entire excercise again
              </Button>
            :
              <Button id="nextButton" variant="contained" color="secondary" disabled={dataIndex === dataArray.length - 1} onClick={revealNextAnswer}>
                Next
              </Button>
            }
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default RevealForm;