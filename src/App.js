import React, {useState, useEffect} from 'react';

import './App.css';
//components
import Start from './Components/StartComponent'
import Question from './Components/QuestionComponent'
import End from './Components/EndComponent'
import Modal from './Components/ModalComponent'
import Login from './Components/LoginComponent';
import Admin from './Components/AdminComponent';
//data
import quizzdata from './Data/quizz.json'
import usersdata from './Data/users.json'
//context
import {usersContext} from './Context/usersContext'

let interval

function App() {

  const [users, setUsers] = useState(usersdata.users)
  const [step, setStep] = useState(0)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [time, setTime] = useState(0)
  const [showModal, setShowModal] = useState(false)

  useEffect(()=>{
    if(step===3)
      clearInterval(interval)
  }, [step])

  const quizStartHandler = () => {
    setStep(2)
    interval = setInterval(()=>{
      setTime(prevTime => prevTime+1)
    }, 1000)
  }

  const ResetClickHandler =()=>{
    setActiveQuestion(0)
    setAnswers([])
    setStep(2)
    setTime(0)
    interval = setInterval(()=>{
      setTime(prevTime => prevTime +1)
    }, 1000)
  }

  return (
    <div className="App">
      <usersContext.Provider value={{users, setUsers}}>
        { step===0 && <Admin />} 

        { step===10 && <Login users={usersdata.users} onSetStep={setStep} />} 
        
        {step===1 && <Start onQuizStart={quizStartHandler} /> }
        
        { step===2 && <Question
          data={quizzdata.data[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={quizzdata.data.length}
          activeQuestion={activeQuestion}
          onSettActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
          />}
        
        { step===3 && <End 
          data={quizzdata.data}
          results={answers}
          onAnswersCheck={()=>{setShowModal(true)}}
          onReset={ResetClickHandler}
          time={time}
          /> }

        {showModal && <Modal 
          results={answers}
          data={quizzdata.data}
          onClose={()=>(setShowModal(false))}
        />}
      </usersContext.Provider>
    </div>
  );
}

export default App;
