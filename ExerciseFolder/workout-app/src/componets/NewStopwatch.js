import { useState, useEffect } from "react"; 
import Laps from "./LapTimer";
export default function NewStopWatch() { 
    const [seconds, setSeconds] = useState(0); 
    const [minutes, setMinutes] = useState(0); 
    const [hours, setHours] = useState(0); 
    const [miliSeconds, setMiliSeconds] = useState(0); 
    const [laps, setLaps] = useState([]); 
    const [isRunning, setIsRunning] = useState(false); 
  
    const formatWithLeadingZero = (number) => { 
        if (number < 10) return "0" + number; 
        else return number.toString(); 
    }; 
  
    useEffect(() => { 
        let interval; 
  
        if (isRunning) { 
            interval = setInterval(() => { 
            setMiliSeconds((miliSeconds) => { 
                if (miliSeconds >= 99) { 
                    setSeconds((seconds) => { 
                        if (seconds >= 59) { 
                            setMinutes((minutes) => { 
                                if (minutes >= 59) { 
                                    setHours((prevHours) => prevHours + 1); 
                                        return 0; 
                                    } else { 
                                        return minutes + 1; 
                                    } 
                                }); 
                                return 0; 
                            } else { 
                                return seconds + 1; 
                            } 
                        }); 
                        return 0; 
                    } else { 
                        return miliSeconds + 1; 
                    } 
                }); 
            }, 10); 
        } 
        return () => clearInterval(interval); 
    }, [isRunning]); 
  
    const start = () => { 
        setIsRunning(true); 
    }; 
  
    const stop = () => { 
        setIsRunning(false); 
    }; 
  
    const lap = () => { 
        const lapTime = 
            formatWithLeadingZero(hours) + 
            ":" + 
            formatWithLeadingZero(minutes) + 
            ":" + 
            formatWithLeadingZero(seconds) + 
            "." + 
            formatWithLeadingZero(miliSeconds); 
        setLaps((prevLaps) => [...prevLaps, lapTime]); 
    }; 
  
    const handleReset = () => { 
        setIsRunning(false); 
        setMiliSeconds(0); 
        setSeconds(0); 
        setMinutes(0); 
        setHours(0); 
        setLaps([]); 
    }; 
  
    return ( 
        <div className="container"> 
            <div className="timeDisplay"> 
                {formatWithLeadingZero(hours)} : {formatWithLeadingZero(minutes)} :{" "} 
                {formatWithLeadingZero(seconds)} : {formatWithLeadingZero(miliSeconds)} 
            </div> 
            <div className="buttons"> 
                <button 
                    className="btn"
                    onClick={start} 
                    disabled={isRunning} 
                    style={{ cursor: isRunning ? "not-allowed" : "pointer" }} 
                > 
                    Start 
                </button> 
                <button className="btn" onClick={stop}> 
                    Stop 
                </button> 
                <button className="btn" onClick={lap}> 
                    Lap 
                </button> 
                <button className="btn" onClick={handleReset}> 
                    Reset 
                </button> 
            </div> 
            <Laps laps={laps} /> 
        </div> 
    ); 
} 