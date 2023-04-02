import React from 'react';
import { useSelector } from 'react-redux';
import { selectWeatherToday } from '../redux/weather/selectors';
import WeatherTop from '../components/WeatherTop';
import Week from '../components/Week';
import Empty from './Empty';

const Weather: React.FC = () => {
  const weatherToday = useSelector(selectWeatherToday);
  const [isAnimate, setIsAnimate] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsAnimate(true);

    return () => setIsAnimate(false);
  }, []);

  return (
    <section className={isAnimate ? 'weather animate' : 'weather'}>
      {weatherToday ? (
        <>
          <WeatherTop />
          <Week />
        </>
      ) : (
        <Empty />
      )}
    </section>
  );
};

export default Weather;
