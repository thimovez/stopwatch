import React, {useState} from 'react';
import Buttons from './UI/buttons/Buttons';

function Stopwatch () {
  const [time, setTime] = useState({ s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  //Единицы секундомера
  let updateS = time.s,
  updatedM = time.m,
  updatedH = time.h;
  // Not started = 0
  // started = 1
  // stopped = 2
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 1000));
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const wait = () => {
    console.log('Double click');
    clearInterval(interv);
    setStatus(2);
  }

  // Логика запуска секундомера
  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updateS === 60) {
      updatedM++;
      updateS = 0;
    }
    updateS++;
    return setTime({s:updateS, m:updatedM, h:updatedH})
  }

  //Двойной клик!
  let pendingClick;
  let clicked = 0;
  const dbClick = () => {
    clicked++;
    if(clicked >= 2){
      wait()
      clearTimeout(pendingClick)
      clicked = 0;
      return;
    }
    clearTimeout(pendingClick)
    pendingClick = setTimeout(() => {
      console.log('One click!')
      clicked = 0;
    }, 300);
  }
  
  // Время в часах
  const h = () => {
    if(time.h === 1){
      return '';
    }else {
      return <div className="hours">{(time.h >= 10)? time.h : "0"+ time.h}</div>;
    }
  }

  return (
    <div className="stopwatch">
      <div className="container">
        <div className="stopwatch__wrapper">
          <div className="stopwatch__numbers">
            {h()}
            <span>:</span>
              <div className="minutes">{(time.m >= 10)? time.m : "0"+ time.m}</div>
            <span>:</span>
            <div className="seconds">{(time.s >= 10)? time.s : "0"+ time.s}</div>
          </div>
          <Buttons status={status} start={start} stop={stop} reset={reset} wait={dbClick}/>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;