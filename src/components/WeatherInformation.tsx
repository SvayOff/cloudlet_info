import React from 'react';
import HumidityCol from './HumidityCol';
import SunCol from './SunCol';
import TempCol from './TempCol';

const WeatherInformation: React.FC = () => {
  return (
    <div className="weather__information information">
      <div className="information__inner">
        <h1 className="information__title title">More Information</h1>
        <div className="information__cols">
          <HumidityCol />
          <SunCol />
          <TempCol />
        </div>
      </div>
    </div>
  );
};

export default WeatherInformation;
