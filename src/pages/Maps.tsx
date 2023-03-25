/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { useTranslation } from 'react-i18next';

const Maps: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="maps">
      <div className="maps__map clouds">
        <h2 className="maps__title title">{t('mapClouds')}</h2>
        <iframe
          src="https://www.meteoblue.com/en/weather/maps/widget?windAnimation=0&gust=0&satellite=0&cloudsAndPrecipitation=0&cloudsAndPrecipitation=1&temperature=0&sunshine=0&extremeForecastIndex=0&geoloc=detect&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=5&autowidth=auto"
          sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"></iframe>

        <a
          href="https://www.meteoblue.com/en/weather/maps/index?utm_source=weather_widget&utm_medium=linkus&utm_content=map&utm_campaign=Weather%2BWidget"
          target="_blank"
          rel="noopener noreferrer"></a>
      </div>
      <div className="maps__map sunshine">
        <h2 className="maps__title title">{t('mapSunshine')}</h2>
        <iframe
          src="https://www.meteoblue.com/en/weather/maps/widget?windAnimation=0&gust=0&satellite=0&cloudsAndPrecipitation=0&temperature=0&sunshine=0&sunshine=1&extremeForecastIndex=0&geoloc=detect&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=5&autowidth=auto"
          sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"></iframe>
        <a
          href="https://www.meteoblue.com/en/weather/maps/index?utm_source=weather_widget&utm_medium=linkus&utm_content=map&utm_campaign=Weather%2BWidget"
          target="_blank"
          rel="noopener noreferrer"></a>
      </div>
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
