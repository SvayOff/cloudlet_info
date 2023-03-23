import React from 'react';
import HumidityCol from './HumidityCol';
import SunCol from './SunCol';
import TempCol from './TempCol';
import { useTranslation } from 'react-i18next';

const WeatherInformation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="weather__information information">
      <div className="information__inner">
        <h1 className="information__title title">{t('titleInfo')}</h1>
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
