import React, {useState} from 'react';
import styles from './styles/styles.scss'
import Stopwatch from "./components/Stopwatch";
import Buttons from "./components/UI/buttons/Buttons";

function App() {
  const [time, setTime] = useState({ s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 1000));
  };

  let updateS = time.s,
    updatedM = time.m,
    updatedH = time.h;


  // Логика секундомера
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

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };


  //Двойной клик!
  let pendingClick;
  let clicked = 0;
  const wait = () => {
    clicked++;
    if(clicked >= 2){
      mydblclick()
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

  function mydblclick(){
    console.log('Double click');
    clearInterval(interv);
    setStatus(2);
  }

  return (
    <div className="App">
        <Stopwatch time={time}/>
        <Buttons status={status} wait={wait} reset={reset} stop={stop} start={start}/>
    </div>
  );
}

export default App;
