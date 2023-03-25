import React from 'react';
import { useSelector } from 'react-redux';
import { selectWeatherToday } from '../redux/weather/selectors';
import { useTranslation } from 'react-i18next';

const Humidity: React.FC = () => {
  const { t } = useTranslation();

  const weatherToday = useSelector(selectWeatherToday);

  const weatherTodayHamidity = weatherToday && weatherToday.main.humidity;

  return (
    <div className="information__col information__col-humidity humidity">
      <h2 className="information__col-title">{t('humidityCol')}</h2>
      <div className="information__col-info">
        <div className="information__col-graph">
          <div
            className="information__col-fill"
            style={{ height: `${weatherTodayHamidity}%` }}></div>
        </div>
        <span className="information__col-number">{weatherTodayHamidity}%</span>
      </div>
    </div>
  );
};

export default Humidity;
