import { useState, useEffect, useCallback } from 'react';
import { Grid, Snackbar } from '@material-ui/core';
import { Alert, Pagination, Card, CardContent, CardMedia } from '@mui/material';
import AnswerForm from '../AnswerForm';
import RevealForm from '../RevealForm';
import EndSessionModal from '../EndSessionModal';
import './styles.css';

const PracticeSession = (props) => {
  const {isSmallScreen, selectedData, path} = props;
  const [dataArray, setDataArray] = useState([]);
  const [dataIndex, setDataIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [isQuestionCorrect, setIsQuestionCorrect] = useState(false);
  const [isModalOpen, setIsModalOpen]= useState(false);
  const [isSecondAttemptQuestions, setIsSecondAttemptQuestions] = useState(false);
  const [isReveal, setIsReveal] = useState(false);

  const shuffle = useCallback((array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array;
  }, []); 

  useEffect(() => {
    setDataArray([])
    const shuffledArray = shuffle(selectedData); 
    setDataIndex(0);
    setIsSecondAttemptQuestions(false);
    setIsReveal(false);
    setDataArray(shuffledArray);

  }, [shuffle, selectedData, path])

  const onSubmit = (noteBaseName, accidental, chosenString, fingering, position) => {
    // Step 1 first compare if the data is correct
    const question = dataArray[dataIndex]
    const isCorrect = question.noteBaseName === noteBaseName &&
      question.accidental === accidental &&
      question.chosenString.some(string => string === chosenString) &&
      question.fingering.some(f => f === fingering) &&
      question.position.some(p => p === position)

    setIsQuestionCorrect(isCorrect)
    // Step 2 then push the correct and incorrect data in the designated array 
    if(isCorrect){
      setCorrectAnswers([...correctAnswers, question])
    } else {
      setWrongAnswers([...wrongAnswers, question])
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
    const shuffledArray = shuffle(selectedData); 
    setIsSecondAttemptQuestions(false);
    setDataArray(shuffledArray)
    setDataIndex(0);
    setIsModalOpen(false);
    setWrongAnswers([]);
    setCorrectAnswers([]);
    setIsReveal(false)
  },[shuffle, selectedData])

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
          />
          <Snackbar
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            open={showSnackbar}
            autoHideDuration={3000}
            onClose={()=> setShowSnackbar(false)}
            
            >
            <Alert
              severity={isQuestionCorrect ? 'success' : 'error'}
              variant="filled"
              sx={{ width: '100%' }}
              style={{borderRadius: '10px'}}
            >
             {!isQuestionCorrect ? 'Sorry, not everything is correct...': 'Correct! Well done!'} 
            </Alert>
          </Snackbar>
          {!!dataArray.length &&
            <Grid item xs={12} sm={6} md={5} lg={4}>
              <Card raised sx={{ minWidth: '100%',  borderRadius:'15px' }}>
                <CardMedia
                  sx={{ minHeight: isSmallScreen ? 300 : 400}}
                  image={dataArray[dataIndex].noteImg}
                  title={`note ${dataArray[dataIndex].noteBaseName}${dataArray[dataIndex].accidental}`}
                />
                <CardContent className="notationCardContent" >
                  <Pagination size="small" count={dataArray.length} page={dataIndex + 1} variant="outlined" color="secondary" hidePrevButton hideNextButton/>
                </CardContent>
              </Card>
            </Grid>
          }
          <Grid item xs={12} sm={6} md={5}>
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