import React, { useState, useEffect } from 'react';
import Battery from './Battery';

export default function BatteryEffect(props) {

  const [level, setLevel] = useState(0);
  const [charging, setCharging] = useState(0);

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
    }, [level]);

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

  return (
    <section>
      <Battery level={level} charging={charging} />
    </section>
  );

}
