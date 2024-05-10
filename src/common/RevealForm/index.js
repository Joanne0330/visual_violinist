import { Grid, Typography, Paper, Button } from '@mui/material';
import './styles.css';

const RevealForm = (props) => {
  const { dataArray, dataIndex, revealNextAnswer, revealPreviousAnswer, resetEntireExcercise, isSmallScreen } = props;
  
  const buttonShownColour = (num) => {
      if(num === dataArray[dataIndex].position[0]) {
          return '#B22222';
      } 
  }

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
          <Typography id="instructionText">You can find this note here on the fingerboard:</Typography>
          <Grid container item direction="row">
              <button className="buttonOpen" style={{backgroundColor: buttonShownColour(1)}}>G</button>
              <button className="buttonOpen" style={{backgroundColor: buttonShownColour(2)}}>D</button>
              <button className="buttonOpen" style={{backgroundColor: buttonShownColour(3)}}>A</button>
              <button className="buttonOpen" style={{backgroundColor: buttonShownColour(4)}}>E</button>
          
          </Grid>
          <Grid container item direction="row">
              <button className="button" style={{backgroundColor: buttonShownColour(5)}}><div className='verticalLine'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(6)}}><div className='verticalLine'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(7)}}><div className='verticalLine'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(8)}}><div className='verticalLine'></div></button>
          
          </Grid>
          <Grid container item direction="row">
              <button className="button" style={{backgroundColor: buttonShownColour(9)}}><div className='cross'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(10)}}><div className='cross'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(11)}}><div className='cross'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(12)}}><div className='cross'></div></button>
              {!isSmallScreen ? <Typography> First finger line</Typography> : <Typography> 1st finger</Typography>}

          </Grid>
          <Grid container item direction="row">
              <button className="button" style={{backgroundColor: buttonShownColour(13)}}><div className='verticalLine'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(14)}}><div className='verticalLine'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(15)}}><div className='verticalLine'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(16)}}><div className='verticalLine'></div></button>
          </Grid>           
          <Grid container item direction="row">
              <button className="button" style={{backgroundColor: buttonShownColour(17)}}><div className='verticalLine'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(18)}}><div className='verticalLine'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(19)}}><div className='verticalLine'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(20)}}><div className='verticalLine'></div></button>
          </Grid>
          <Grid container item direction="row">
              <button className="button" style={{backgroundColor: buttonShownColour(21)}}><div className='cross'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(22)}}><div className='cross'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(23)}}><div className='cross'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(24)}}><div className='cross'></div></button>
              {!isSmallScreen ? <Typography> Third finger line</Typography> : <Typography> 3rd finger</Typography>}
      
          </Grid>
          <Grid container item direction="row">
              <button className="button" style={{backgroundColor: buttonShownColour(25)}}><div className='verticalLine'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(26)}}><div className='verticalLine'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(27)}}><div className='verticalLine'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(28)}}><div className='verticalLine'></div></button>
          </Grid>
          <Grid container item direction="row">
              <button className="button" style={{backgroundColor: buttonShownColour(29)}}><div className='verticalLine'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(30)}}><div className='verticalLine'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(31)}}><div className='verticalLine'></div></button>
              <button className="button" style={{backgroundColor: buttonShownColour(32)}}><div className='verticalLine'></div></button>
          </Grid>
          <Grid justifyContent="space-between" direction="row" container>
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