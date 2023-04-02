import React from 'react';
import { useTranslation } from 'react-i18next';

const Maps: React.FC = () => {
  const [isAnimate, setIsAnimate] = React.useState<boolean>(false);

  const { t } = useTranslation();

  React.useEffect(() => {
    setIsAnimate(true);

    return () => setIsAnimate(false);
  }, []);

  return (
    <section className={isAnimate ? 'maps animate' : 'maps'}>
      <div className="maps__map temperature">
        <h2 className="maps__title title">{t('mapTemp')}</h2>
        <iframe
          src="https://www.meteoblue.com/en/weather/maps/widget?windAnimation=0&gust=0&satellite=0&cloudsAndPrecipitation=0&temperature=0&temperature=1&sunshine=0&extremeForecastIndex=0&geoloc=detect&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=5&autowidth=auto"
          sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"></iframe>
        <a
          href="https://www.meteoblue.com/en/weather/maps/index?utm_source=weather_widget&utm_medium=linkus&utm_content=map&utm_campaign=Weather%2BWidget"
          target="_blank"
          rel="noopener noreferrer"></a>
      </div>
    </section>
  );
};

export default Maps;
