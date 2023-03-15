import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Humidity: React.FC = () => {
  const weatherToday = useSelector((state: RootState) => state.weatherSlice.weatherToday);

  const weatherTodayHamidity = weatherToday && weatherToday.main.humidity;

  return (
    <div className="information__col information__col-humidity humidity">
      <h2 className="information__col-title">Humidity</h2>
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
