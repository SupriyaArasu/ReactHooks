import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
     // this will clear Timeout else timet tries to fetch if useeffect gets removed also
      // when component unmount like in willComponentUnmount
      // and time will not change to true
    return () => clearTimeout(timer);
     // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [time]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
  });

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
