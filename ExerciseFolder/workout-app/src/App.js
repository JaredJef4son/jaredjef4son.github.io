import './App.css';
import {useCallback, useState} from 'react'
import DurationExercise from './componets/DurationExercise';
import RepetitionExercise from './componets/RepetitionExercise';
import RunningExercise from './componets/RunningExercise';

const MENU_SCREEN = "menu"
const EXERCISE_SCREEN = "exercise"
const DURATION_EXERCISE = "duration"
const REPETITION_EXERCISE = "repetition"
const RUNNING_EXERCISE = "run"




let exerciseList = [
  {type: DURATION_EXERCISE, name:"Walking"},
  {type: REPETITION_EXERCISE, name:"Pushups"},
  {type: DURATION_EXERCISE, name:"Swimming"},
  {type: RUNNING_EXERCISE, name:"Running"}
]



function App() {
let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN)
let [currentExercise, setCurrentExercise] = useState({})
let screenComponet = undefined
let buttonClick = useCallback((exercise)=> {
  setCurrentExercise(exercise)
  setCurrentScreen(EXERCISE_SCREEN)
}) 


if (currentScreen === MENU_SCREEN) {
  screenComponet = 
  <div>
  <p>Exercise Menu</p>
  <ul>
    {exerciseList.map((exercise)=>{
      return <li key={exercise.name}>
        <button onClick={() => buttonClick(exercise)}>{exercise.name}</button>
      </li> 
    })}
  </ul>
  </div>
}
else if (currentScreen === EXERCISE_SCREEN) {
  switch (currentExercise.type) {
    case DURATION_EXERCISE:
        screenComponet = <DurationExercise  
        exercise={currentExercise}
        setMenuScreen={()=> setCurrentScreen(MENU_SCREEN)}/>
    break;
    case REPETITION_EXERCISE:
        screenComponet = <RepetitionExercise
        exercise={currentExercise}
        setMenuScreen={()=> setCurrentScreen(MENU_SCREEN)} />
    break;
    case RUNNING_EXERCISE:
        screenComponet = <RunningExercise
        exercise={currentExercise}
        setMenuScreen={()=> setCurrentScreen(MENU_SCREEN)} />
    break;
    default:
      screenComponet= undefined
  }
}
return (
  <div className="App">
    <header className="App-header">
      {screenComponet}
    </header>
  </div>
);
}

export default App;
