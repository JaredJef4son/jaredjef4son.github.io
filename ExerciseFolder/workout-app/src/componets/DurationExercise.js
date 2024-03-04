import Stopwatch from "./Stopwatch"
export default function DurationExercise ({exercise, setMenuScreen}) {
    let {name} = exercise
    return <div>
      <p>{name}</p>
      <Stopwatch/>
      <button onClick={setMenuScreen} style={{fontSize: "1.5em"}}>Back to Menu</button>
    </div>
  } 