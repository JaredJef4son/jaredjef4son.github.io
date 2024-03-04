import NewStopWatch from "./NewStopwatch"

export default function RunningExercise ({exercise, setMenuScreen}) {
  let {name} = exercise
  return <div>
    <p>{name}</p>
    <NewStopWatch/>
    <button onClick={setMenuScreen} style={{fontSize: "1.5em"}}>Back to Menu</button>
  </div>
} 