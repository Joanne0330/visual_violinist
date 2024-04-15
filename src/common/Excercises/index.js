import { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import AnswerForm from '../AnswerForm';
import './styles.css';
import c1 from '../../SVG/Cmaj/C1.svg';


const Excercises = () => {
  const [dataIndex, setDataIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const mockData = [
    {noteBaseName: 'A', accidental: '', chosenString: ['D', 'A'], fingering: ['4', '0'], position: [3, 30]}, 
    {noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}
  ]

  console.log(mockData[dataIndex])
  const onSubmit = (noteBaseName, accidental, chosenString, fingering, position) => {
    console.log('HELLO!')
    console.log('note base name: ',noteBaseName);
    console.log('accidental name: ', accidental)
    console.log('chosen string: ', chosenString)
    console.log('fingering: ',fingering);
    console.log('position: ',position);
    // Step 1 first compare if the data is correct
    const question = mockData[dataIndex]
    const isCorrect = question.noteBaseName === noteBaseName &&
      question.accidental === accidental &&
      question.chosenString.some(string => string === chosenString) &&
      question.fingering.some(f => f === fingering) &&
      question.position.some(p => p === position)
    console.log("AM I CORRECT?", isCorrect)
    // Step 2 then push the correct and incorrect data in the designated array 
    if(isCorrect){
      setCorrectAnswers([...correctAnswers, question])
    } else {
      setWrongAnswers([...wrongAnswers, question])
    }

    // Step 3 go to next question
    setDataIndex(dataIndex + 1)
  }

  return (
    <>
        <Grid container direction='row'>
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

export default Excercises; 