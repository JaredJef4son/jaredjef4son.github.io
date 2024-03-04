import {useState} from 'react'
export default function RepetitionExercise({exercise, setMenuScreen}){
    let [count, setCount] = useState(0)
    return <div>
    <p>{exercise.name}</p>
    <p>{count}</p>
    <button onClick={() => setCount(count=>count+1)}>inc.</button><button onClick={() => setCount(0)}>Reset</button>
    <button onClick={setMenuScreen} style={{fontSize: "1.5em"}}>Back to Menu</button>
    </div>
    
  }