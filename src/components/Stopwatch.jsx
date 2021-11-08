import React from 'react';

function Stopwatch (props) {

  const h = () => {
    if(props.time.h === 1){
      return '';
    }else {
      return <div className="hours">{(props.time.h >= 10)? props.time.h : "0"+ props.time.h}</div>;
    }
  }

  return (
    <div className="stopwatch">
      <div className="container">
        <div className="stopwatch__wrapper">
          <div className="stopwatch__numbers">
            {h()}
            <span>:</span>
              <div className="minutes">{(props.time.m >= 10)? props.time.m : "0"+ props.time.m}</div>
            <span>:</span>
            <div className="seconds">{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;