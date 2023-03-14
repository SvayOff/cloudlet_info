import React from 'react';

import HumidityCol from '../components/HumidityCol';
import SunCol from '../components/SunCol';
import TempCol from '../components/TempCol';
import WindCol from '../components/WindCol';

const DayFull: React.FC = () => {
  return (
    <section className="dayfull">
      <div className="dayfull__inner">
        <div className="dayfull__how">
          <img className="dayfull__img" src="/images/icons/cloud_rain.svg" alt="rain" />
          <div className="dayfull__desc">
            <span className="dayfull__degree">
              10
              <span>°C</span>
            </span>
            <p className="dayfull__sky">Rainy</p>
          </div>
        </div>

        <div className="dayfull__about">
          <div className="dayfull__info">
            <p className="dayfull__city">Kyiv</p>
            <time className="dayfull__data">Monday, 10 March</time>
          </div>
        </div>
      </div>

      <div className="dayfull__cols">
        <HumidityCol />
        <SunCol />
        <TempCol />
        <WindCol />
      </div>
    </section>
  );
};

export default DayFull;
