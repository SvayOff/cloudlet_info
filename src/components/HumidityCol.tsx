import React from 'react';
import { useSelector } from 'react-redux';
import { selectWeatherToday } from '../redux/weather/selectors';
import { getWeatherHamidity } from '../utils/getWeatherHamidity';
import { useTranslation } from 'react-i18next';

const Humidity: React.FC = () => {
  const { t } = useTranslation();

  const weatherToday = useSelector(selectWeatherToday);

  return (
    <div className="information__col information__col-humidity humidity">
      <h2 className="information__col-title">{t('humidityCol')}</h2>
      <div className="information__col-info">
        <div className="information__col-graph">
          <div
            className="information__col-fill"
            style={{ height: `${weatherToday && getWeatherHamidity(weatherToday)}%` }}></div>
        </div>
        <span className="information__col-number">
          {weatherToday && getWeatherHamidity(weatherToday)}%
        </span>
      </div>
    </div>
  );
};

export default Humidity;
