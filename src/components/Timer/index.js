import React, {useState, useEffect} from 'react';



const Timer = () => {
// const [newQ, setNewQ] = useState(nextQuestion);
const [timer, setTimer] = useState(5);

useEffect(() => {
  const interval = setInterval(() => {
    setTimer(prev => prev - 1) 
}, 1000);
if (timer === 0) {
  clearInterval(interval)
}
},[])

// useEffect(() => {
//   setTimer(30)
// },[newQ])

  return (
  <div>{timer}</div>
  );
};

export default Timer;
