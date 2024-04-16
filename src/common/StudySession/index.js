import { useState } from 'react';
import { Grid, Typography, Snackbar } from '@material-ui/core';
import { Alert } from '@mui/material';
import AnswerForm from '../AnswerForm';
import EndSessionModal from '../EndSessionModal';
import './styles.css';
import c1 from '../../SVG/Cmaj/C1.svg';

const mockData = [
  {noteBaseName: 'A', accidental: '', chosenString: ['D', 'A'], fingering: ['4', '0'], position: [3, 30]}, 
  {noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
  {noteBaseName: 'E', accidental: 'b', chosenString: ['D'], fingering: ['1'], position: [6]}
]

const StudySession = () => {
  const [dataIndex, setDataIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [isQuestionCorrect, setIsQuestionCorrect] = useState(false);
  const [isModalOpen, setIsModalOpen]= useState(false);

  console.log(mockData[dataIndex])
  const onSubmit = (noteBaseName, accidental, chosenString, fingering, position) => {
    // Step 1 first compare if the data is correct
    const question = mockData[dataIndex]
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
    if(dataIndex === mockData.length -1) {
      setIsModalOpen(true)
    } else {
      setDataIndex(dataIndex + 1)
    }
  }

  const closeModal = () => setIsModalOpen(false)

  return (
    <>
        <Grid container direction='row'>
          <EndSessionModal 
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            correctAnswers={correctAnswers}
            wrongAnswers={wrongAnswers}
            totalQuestions={mockData.length}
          
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
            <img alt="note" src={c1} style={{maxWidth: '1000px'}} />
          </Grid>
          {/* <Grid container direction='column'> */}
            <Grid item>
              <Typography>{`Correct: ${correctAnswers.length}/${mockData.length}`}</Typography>
              <Typography>{`Incorrect: ${wrongAnswers.length}/${mockData.length}`}</Typography>
            </Grid>
            <Grid item>
              <AnswerForm onSubmit={onSubmit}/>
            </Grid>
          {/* </Grid> */}
        </Grid>
    </>
  )

}

export default StudySession; 