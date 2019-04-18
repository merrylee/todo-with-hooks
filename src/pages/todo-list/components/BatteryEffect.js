import React, { useState, useEffect } from 'react';
import Battery from './Battery';

export default function BatteryEffect(props) {

  const [level, setLevel] = useState(0);
  const [charging, setCharging] = useState(false);
  const [count, setCount] = useState(100);

  useEffect( () => {
    let battery;
    navigator.getBattery().then(bat => {
      battery = bat;
      battery.addEventListener('levelchange', handleChange);
      battery.addEventListener('chargingchange', handleChange);
      handleChange({ target: battery });
     });

     return () => {
      battery.removeEventListener('levelchange', handleChange);
      battery.removeEventListener('chargingchange', handleChange);
     };
    }, [level, count]);

    useEffect( () => {
      let battery;
      navigator.getBattery().then(bat => {
        battery = bat;
        battery.addEventListener('levelchange', handleChange);
        battery.addEventListener('chargingchange', handleChange);
        handleChange({ target: battery });
       });

       return () => {
        battery.removeEventListener('levelchange', handleChange);
        battery.removeEventListener('chargingchange', handleChange);
       };
      }, [charging]);

  const handleChange = ({ target: { level, charging } }) => {
    setLevel(level);
    setCharging(charging);
  }

  const handleClick = () => {
    setCount(count - 1);
  }

  return (
    <section onClick={handleClick}>
      {count}
      <Battery level={level} charging={charging} />
    </section>
  );

}
