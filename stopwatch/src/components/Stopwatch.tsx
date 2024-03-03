import React, {useState} from 'react';
import Buttons from './UI/buttons/Buttons';

const Stopwatch: React.FC = () => {

  interface TimerState {
    milliseconds: number,
    second: number,
    minute: number,
    hour: number
  };

  const [time, setTime] = useState<TimerState>({
    milliseconds: 0,
    second: 0,
    minute: 0,
    hour: 0
  });

  const [interval, setInterval1] = useState<NodeJS.Timer>();
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  
  let updateMillisecond = time?.milliseconds;
  let updateSecond = time?.second;
  let updatedMinute = time?.minute;
  let updatedHour = time?.hour;

  const RunTimer = (): void => {
      updateMillisecond++;
      if (updateMillisecond >= 100) {  
        updateSecond++;
        updateMillisecond = 0;
      }

      if(updatedMinute === 60){
        updatedHour++;
        updatedHour = 0;
      }

      if(updateSecond === 60) {
        updatedMinute++;
        updateSecond = 0;
      }

      setTime({
        milliseconds: updateMillisecond,
        second:updateSecond,
        minute:updatedMinute,
        hour:updatedHour
      });

      return
    }

  const start = () => {
    setTimerStarted(true);
    setInterval1(setInterval(RunTimer, 10));
  };

  const stop = () => {
    setTimerStarted(false);
    clearInterval(interval);
  };

  const reset = () => {
    setTimerStarted(false);
    clearInterval(interval);
    setTime({
      milliseconds:0,
      second:0,
      minute:0,
      hour:0
    })
  };

  // const wait = () => {
  //   console.log('Double click');
  //   clearInterval(interv);
  //   setStatus(2);
  // }

  // Логика запуска секундомера
 

  //Двойной клик!
  // let pendingClick;
  // let clicked = 0;
  // const dbClick = () => {
  //   clicked++;
  //   if(clicked >= 2){
  //     wait()
  //     clearTimeout(pendingClick)
  //     clicked = 0;
  //     return;
  //   }
  //   clearTimeout(pendingClick)
  //   pendingClick = setTimeout(() => {
  //     console.log('One click!')
  //     clicked = 0;
  //   }, 300);
  // }
  
  const renderHour = () => {
    if(time.hour === 1){
      return '';
    }else {
      return time.hour >= 10 ? time.hour : "0"+ time.hour;
    }
  }
  
  return (
    <div className="stopwatch">
      <div className="container">
        <div className="stopwatch__wrapper">
          <div className="stopwatch__numbers">
            <div className="hours">{renderHour()}</div>
              <span>:</span>
            <div className="minutes">{(time.minute >= 10)? time.minute : "0"+ time.minute}</div> 
             <span>:</span> 
            <div className="millisecond">{(time.milliseconds >= 10) ? time.milliseconds : "0" + time.milliseconds}</div>
              <span>:</span> 
            <div className="seconds">{(time.second >= 10) ? time.second : "0" + time.second}</div>
          </div>
          {/* <Buttons status={status} start={start} stop={stop} reset={reset} wait={dbClick}/> */}
          <button onClick={start}>Start</button>
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;