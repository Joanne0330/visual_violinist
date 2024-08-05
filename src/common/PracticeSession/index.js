import { useState, useEffect, useCallback } from 'react';
import { Grid, Snackbar } from '@material-ui/core';
import { Alert, Pagination, Card, CardContent, CardMedia } from '@mui/material';
import AnswerForm from '../AnswerForm';
import RevealForm from '../RevealForm';
import EndSessionModal from '../EndSessionModal';
import './styles.css';
import { shuffleDataArray } from '../../hooks/dataHooks';

const PracticeSession = (props) => {
  const {isSmallScreen, selectedData, path, keyName} = props;
  const [dataArray, setDataArray] = useState([]);
  const [dataIndex, setDataIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [isQuestionCorrect, setIsQuestionCorrect] = useState(false);
  const [isModalOpen, setIsModalOpen]= useState(false);
  const [isSecondAttemptQuestions, setIsSecondAttemptQuestions] = useState(false);
  const [isReveal, setIsReveal] = useState(false);
  const [incorrectAnswerMessage, setIncorrectAnswerMessage] = useState('');

  const correctAnswersResponse = ["Correct! Well done!", "Hooray!! You've got this!", "Correct answer! You are on a roll!", "Great answers!" ]


  useEffect(() => {
    setDataArray([]);
    setCorrectAnswers([]);
    setWrongAnswers([]);
    const shuffledArray = shuffleDataArray(selectedData); 
    setDataIndex(0);
    setIsSecondAttemptQuestions(false);
    setIsReveal(false);
    setDataArray(shuffledArray);

  }, [selectedData, path])

  const getIncorrectAnswersMessage = (noteNameCorrect, fingeringCorrect, positionCorrect) => {
    let incorrectItems = []
    if(!noteNameCorrect) {
      incorrectItems.push(' Name')
    }
    if(!fingeringCorrect) {
      incorrectItems.push(' Fingering')
    }
    if(!positionCorrect) {
      incorrectItems.push(' Finger Placement')
    }

    let message = '';

    if(incorrectItems.length === 1) {
      message = `Sorry, the${incorrectItems[0]} was incorrect!`
    } else {
     message = 'Sorry, the following were incorrect:'
     for (let i = 0; i < incorrectItems.length; i++) {
       if(i === incorrectItems.length - 1) {
         message += ' and' + incorrectItems[i]
       } else {
         message += incorrectItems[i] + ",";
       }
     }
     message += '!'
    }
    setIncorrectAnswerMessage(message)
  }

  const onSubmit = (noteBaseName, accidental, chosenString, fingering, position) => {
    // Step 1 first compare if the data is correct
    const question = dataArray[dataIndex];

    const noteNameCorrect = question.noteBaseName === noteBaseName && question.accidental === accidental;
    const fingeringCorrect = question.chosenString.some(string => string === chosenString) && question.fingering.some(f => f === fingering);
    const positionCorrect = question.position.some(p => p === position)

    const isEverythingCorrect = noteNameCorrect && fingeringCorrect && positionCorrect;

    setIsQuestionCorrect(isEverythingCorrect)
    // Step 2 then push the correct and incorrect data in the designated array 
    if(isEverythingCorrect){
      setCorrectAnswers([...correctAnswers, question])
    } else {
      setWrongAnswers([...wrongAnswers, question])
      getIncorrectAnswersMessage(noteNameCorrect, fingeringCorrect, positionCorrect)
    }
    // Step 3 Snackbar that tells the user whether it's correct
    setShowSnackbar(true)

    // Step 4 go to next question
    if(dataIndex === dataArray.length -1) {
      setIsModalOpen(true)
    } else {
      setDataIndex(dataIndex + 1)
    }
  }

  const handleUseWrongAnswersData = () => {
    setIsSecondAttemptQuestions(true);
    setDataArray(wrongAnswers);
    setDataIndex(0)
    setIsModalOpen(false);
    setWrongAnswers([]);
    setCorrectAnswers([]);
  }

  const handleRevealAnswers = () => {
    setIsReveal(true);
    handleUseWrongAnswersData();
  }

  const revealNextAnswer = () => setDataIndex(dataIndex + 1);
  const revealPreviousAnswer = () => setDataIndex(dataIndex -1);

  const resetEntireExcercise = useCallback(() => {
    const shuffledArray = shuffleDataArray(selectedData); 
    setIsSecondAttemptQuestions(false);
    setDataArray(shuffledArray)
    setDataIndex(0);
    setIsModalOpen(false);
    setWrongAnswers([]);
    setCorrectAnswers([]);
    setIsReveal(false)
  },[selectedData])

  return (
    <>
        <Grid container direction='row' spacing={3} justifyContent="space-around">
          <EndSessionModal 
            isModalOpen={isModalOpen}
            correctAnswers={correctAnswers}
            wrongAnswers={wrongAnswers}
            totalQuestions={dataArray.length}
            handleUseWrongAnswersData={handleUseWrongAnswersData}
            resetEntireExcercise={resetEntireExcercise}
            isSecondAttemptQuestions={isSecondAttemptQuestions}
            handleRevealAnswers={handleRevealAnswers}
            keyName={keyName}
          />
          <Snackbar
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            open={showSnackbar}
            autoHideDuration={isQuestionCorrect ? 3000 : 4000}
            onClose={()=> setShowSnackbar(false)}
            
            >
            <Alert
              severity={isQuestionCorrect ? 'success' : 'error'}
              variant="filled"
              sx={{ width: '100%' }}
              style={{borderRadius: '10px'}}
            >
             {!isQuestionCorrect ? incorrectAnswerMessage : correctAnswersResponse[Math.floor(Math.random() * correctAnswersResponse.length)]} 
            </Alert>
          </Snackbar>
          {!!dataArray.length &&
            <Grid item xs={12} sm={8} md={5} >
              <Card raised sx={{ minWidth: '100%',  borderRadius:'15px' }}>
                <CardMedia
                  sx={{ minHeight: isSmallScreen ? 350 : 450}}
                  image={dataArray[dataIndex].noteImg}
                  title={`note ${dataArray[dataIndex].noteBaseName}${dataArray[dataIndex].accidental}`}
                />
                <CardContent className="notationCardContent" >
                  <Pagination size="small" count={dataArray.length} page={dataIndex + 1} variant="outlined" color="secondary" hidePrevButton hideNextButton/>
                </CardContent>
              </Card>
            </Grid>
          }
          <Grid item xs={12} sm={8} md={5} lg={6}>
          {/* <Grid item xs={12} sm={6} md={5}> */}
            {isReveal ?
              <RevealForm 
                dataArray={dataArray} 
                dataIndex={dataIndex} 
                revealNextAnswer={revealNextAnswer}
                revealPreviousAnswer={revealPreviousAnswer}
                resetEntireExcercise={resetEntireExcercise}
                isSmallScreen={isSmallScreen}
              /> 
              :
              <AnswerForm onSubmit={onSubmit} isSmallScreen={isSmallScreen}/>
            }
          </Grid>
        </Grid>
    </>
  )

}

export default PracticeSession; 