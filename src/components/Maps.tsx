import React from 'react';

const Maps: React.FC = () => {
  return (
    <section className="maps">
      <div className="maps__map clouds">
        <h2 className="maps__title title">Clouds</h2>
        <iframe
          src="https://www.meteoblue.com/en/weather/maps/widget?windAnimation=0&gust=0&satellite=0&cloudsAndPrecipitation=0&cloudsAndPrecipitation=1&temperature=0&sunshine=0&extremeForecastIndex=0&geoloc=detect&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=5&autowidth=auto"
          sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"></iframe>

        <a
          href="https://www.meteoblue.com/en/weather/maps/index?utm_source=weather_widget&utm_medium=linkus&utm_content=map&utm_campaign=Weather%2BWidget"
          target="_blank"
          rel="noopener noreferrer"></a>
      </div>
      <div className="map sunshine">
        <h2 className="maps__title title">Sunshine</h2>
        <iframe
          src="https://www.meteoblue.com/en/weather/maps/widget?windAnimation=0&gust=0&satellite=0&cloudsAndPrecipitation=0&temperature=0&sunshine=0&sunshine=1&extremeForecastIndex=0&geoloc=detect&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=5&autowidth=auto"
          sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"></iframe>
        <a
          href="https://www.meteoblue.com/en/weather/maps/index?utm_source=weather_widget&utm_medium=linkus&utm_content=map&utm_campaign=Weather%2BWidget"
          target="_blank"
          rel="noopener noreferrer"></a>
      </div>
      <div className="map temperature">
        <h2 className="maps__title title">Temperature</h2>
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
