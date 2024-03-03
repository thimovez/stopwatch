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
  const [status, setStatus] = useState(0);
  
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

  /* Not started = 0
     Started = 1
     Stopped = 2
  */
  const start = () => {
    // RunTimer();
    // setStatus(1);
    setInterval1(setInterval(RunTimer, 10));
  };

  const stop = () => {
    clearInterval(interval);
    // setStatus(2);
  };

  const reset = () => {
    clearInterval(interval);
    // setStatus(0);
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
  
  // Время в часах
  // const h = () => {
  //   if(time.h === 1){
  //     return '';
  //   }else {
  //     return <div className="hours">{(time.h >= 10)? time.h : "0"+ time.h}</div>;
  //   }
  // }

  return (
    <div className="stopwatch">
      <div className="container">
        <div className="stopwatch__wrapper">
          <div className="stopwatch__numbers">
            {/* {h()} */}
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