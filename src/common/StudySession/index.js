import { useState, useEffect, useCallback } from 'react';
import { Grid, Snackbar } from '@material-ui/core';
import { Alert, Pagination, Card, CardContent, CardMedia } from '@mui/material';
import AnswerForm from '../AnswerForm';
import RevealForm from '../RevealForm';
import EndSessionModal from '../EndSessionModal';
import './styles.css';

const mockData = [
  {noteImg: "/assets/images/mid_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['A', 'D'], fingering: ['0', '4'], position: [3, 30]}, 
  {noteImg: "/assets/images/high_G_sharp.png", noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
  {noteImg: "/assets/images/mid_E_flat.png", noteBaseName: 'E', accidental: 'b', chosenString: ['D'], fingering: ['1'], position: [6]}
]

const StudySession = () => {
  const [dataArray, setDataArray] = useState([])
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
    //Step 1: TODO - find which key and which data to use with useCallback function in order to reuse in resetEntireExcercise

    //Step 2: Randomise the data
    const shuffledArray = shuffle(mockData); 
    setDataArray(shuffledArray)

  }, [shuffle])

  console.log(dataArray)
  console.log(dataArray[dataIndex])
  console.log(dataArray[dataIndex]?.noteImg)

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
    // TODO - find which key and which data to use as in useEffect with useCallback function
    const shuffledArray = shuffle(mockData); 
    setIsSecondAttemptQuestions(false);
    setDataArray(shuffledArray)
    setDataIndex(0);
    setIsModalOpen(false);
    setWrongAnswers([]);
    setCorrectAnswers([]);
    setIsReveal(false)
  },[shuffle])


  console.log('is reveal', isReveal)

  return (
    <>
        <Grid container direction='row'>
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
            >
             {!isQuestionCorrect ? 'Sorry, not everything is correct...': 'Correct! Well done!'} 
            </Alert>
          </Snackbar>
          <Grid item >
            {/* {!!dataArray && !!dataArray[dataIndex]?.noteImg &&
              <img alt="note" src={dataArray[dataIndex]?.noteImg} style={{width: "100%"}} />
              // <img alt="note" src={require("../../images/mid_A.png")} style={{width: "100%"}} />
            } */}
            <Card raised sx={{ width: 345, borderRadius:'15px' }}>
              <CardMedia
                sx={{ height: 250 }}
                image={dataArray[dataIndex]?.noteImg}
                title="note"
              />
              <CardContent>
                <Pagination size="small" count={dataArray.length} page={dataIndex + 1} variant="outlined" color="secondary" hidePrevButton hideNextButton/>
              </CardContent>

            </Card>
            {/* <Pagination size="small" count={dataArray.length} page={dataIndex + 1} variant="outlined" color="secondary" hidePrevButton hideNextButton/> */}
          </Grid>
            <Grid item>
              {isReveal ?
                <RevealForm 
                  dataArray={dataArray} 
                  dataIndex={dataIndex} 
                  revealNextAnswer={revealNextAnswer}
                  revealPreviousAnswer={revealPreviousAnswer}
                  resetEntireExcercise={resetEntireExcercise}
                /> 
                :<AnswerForm onSubmit={onSubmit}/>
              }
            </Grid>
          {/* </Grid> */}
        </Grid>
    </>
  )

}

export default StudySession; 