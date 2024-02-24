import  { useEffect, useState } from 'react'

function OTPCountDown() {
    const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(timer);
          console.log('Countdown reached 0');
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []); 
  const formattedTime = `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;

  // if(seconds === 0) {
  //   setTime(true)
  // }  el
  console.log(seconds,"seconds")
  return (
    {formattedTime, seconds, setSeconds}
  )
}

export default OTPCountDown
