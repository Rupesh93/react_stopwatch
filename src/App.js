import './App.css';
import { useState } from 'react';
var adjustInterval = undefined;

function App() {
  const [value,setvalue] = useState(0);
  const [started, setstarted] = useState(false);

  const startWatch = ()=>{
    adjustInterval = setInterval(() => {
      setvalue((x) => x + 1);
    }, 1000);
    setstarted(true);
  }
  const stopWatch = ()=>{
    clearInterval(adjustInterval);
    setstarted(false);
  }
  const resetWatch = ()=>{
    setvalue(0);
    clearInterval(adjustInterval);
    setstarted(false);
  }
  return (
    <div className="App">
    <h1>Stop Watch</h1>
    <h1>{value}</h1>
    <button disabled={started} className='start' onClick={startWatch}>Start</button>
    <button className='stop' onClick={stopWatch}>Stop</button>
    <button className='reset' onClick={resetWatch}>Reset</button>
   
    </div>
  );
}

export default App;
