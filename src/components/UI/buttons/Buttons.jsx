
function Buttons (props) {
  return (
      <div className="stopwatch__buttons">
        {(props.status === 0) ?
          <div>
            <button onClick={props.start}>Start</button>
            <button onClick={props.stop}>Stop</button>
            <button onClick={props.reset}>Reset</button>
            <button onClick={props.wait}>Wait</button>
          </div> : ""
        }
      </div>
  );
}

export default Buttons;