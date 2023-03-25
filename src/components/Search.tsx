import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLocation, setWeatherToday, setWeatherDaily } from '../redux/weather/slice';
import { selectLocation } from '../redux/weather/selectors';
import { useTranslation } from 'react-i18next';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useSelector(selectLocation);

  const { t } = useTranslation();

  const locationInput = React.useRef<HTMLInputElement>(null);

  const urlWeatherDay = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=001880f79cc2b4febbc0da7678f430e7`;
  const urlWeatherDeily = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=6&appid=001880f79cc2b4febbc0da7678f430e7`;

  const onChangeLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLocation(event.target.value));
  };

  const onClickClear = () => {
    dispatch(setLocation(''));
    locationInput.current && locationInput.current.focus();
  };

  const searchLocation: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      axios.get(urlWeatherDay).then((response) => {
        dispatch(setWeatherToday(response.data));
      });

      axios.get(urlWeatherDeily).then((response) => {
        dispatch(setWeatherDaily(response.data.list));
      });

      dispatch(setLocation(''));
      locationInput.current && locationInput.current.blur();
      navigate('/');
    }
  };

  return (
    <div className="header__form">
      <input
        className="header__form-input"
        ref={locationInput}
        onChange={onChangeLocation}
        onKeyDown={searchLocation}
        value={location}
        placeholder={`${t('searchPlaceholder')}`}
      />
      <div className="header__form-img">
        <svg height={24} width={24} xmlns="http://www.w3.org/2000/svg">
          <g
            style={{
              display: 'inline',
            }}>
            <path
              d="M12 292.65c-4.723 0-8.572 3.853-8.572 8.579 0 .009 0 .018.002.027.105 3.813 2.17 6.371 4.687 8.164 2.275 1.62 3.088 2.805 3.088 2.805a1 1 0 0 0 1.713-.125c.677-1.011 1.955-2.06 2.898-2.686 2.698-1.771 4.756-4.374 4.756-8.186 0-4.725-3.85-8.578-8.572-8.578zm0 2a6.56 6.56 0 0 1 6.572 6.579c0 3.133-1.479 4.954-3.853 6.513-1.335.877-2.208 1.699-2.762 2.324a19.531 19.531 0 0 0-2.68-2.275c-2.232-1.59-3.755-3.436-3.847-6.574A6.56 6.56 0 0 1 12 294.65z"
              transform="translate(0 -290.65)"
            />
            <path
              d="M12 297.227c-2.198 0-4 1.803-4 4.002 0 2.198 1.802 4.003 4 4.003s4-1.805 4-4.003a4.016 4.016 0 0 0-4-4.002zm0 2c1.116 0 2 .883 2 2.002a1.987 1.987 0 0 1-2 2.003c-1.116 0-2-.885-2-2.003 0-1.12.884-2.002 2-2.002z"
              transform="translate(0 -290.65)"
            />
          </g>
        </svg>
      </div>
      {location.length ? (
        <span onClick={onClickClear} className="header__form-clear">
          <svg
            height={83.368}
            viewBox="0 0 1364 1142"
            width={99.612}
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>{'.fil0{fill:#201e1e}'}</style>
            </defs>
            <g id="Layer_x0020_1">
              <g id="_586686536">
                <ellipse className="fil0" cx={682} cy={938} rx={682} ry={203} />
                <path
                  className="fil0"
                  d="M1080 224c-52 67-106 134-159 202 45 36 89 72 133 109 63 55 132 105 172 181 26 49-3 103-47 119-8 12-17 24-25 36-26 35-50 70-96 79-1 0-1 1-2 1-88 50-209-88-267-141-32-28-63-55-94-83-70 101-135 205-190 315-13 26-38 42-65 44-64 21-130-18-182-54-50-34-98-72-133-123-44-28-58-92-18-135 9-10 19-21 28-31 2-1 3-2 4-3 85-89 173-175 262-259-80-62-160-126-231-199-40-40-24-103 18-128 55-60 128-98 197-140 49-29 106-5 126 41 30 27 54 58 80 88 4 3 7 5 10 8l64 34-14 18c8 7 17 14 25 22 59-56 118-113 175-171 15-41 65-68 111-47 28 14 56 27 84 42 47 4 88 49 80 99-1 31-19 61-46 76z"
                />
                <path
                  d="M1169 746c-34-65-102-115-157-163-59-50-120-99-180-147 69-88 140-177 209-266 13 0 23-15 21-28 6-17-15-35-31-28-31-18-65-34-96-49-13-6-28 7-23 19-76 77-155 152-234 227-33-28-66-57-98-87-1-6-3-11-8-15-2-2-4-3-5-4 0 0-1 0-1-1-6-4-12-9-18-13-30-35-59-73-93-100-1-17-18-33-37-22-62 38-139 77-187 133l-3 6c-13 0-23 19-13 30 87 88 187 163 284 239-108 101-215 203-316 310-1 0-1 1-2 1-9 10-18 19-27 29-16 17-3 39 14 42 31 50 78 88 126 121 33 22 93 63 134 43 8 1 16-1 20-9 67-135 149-261 236-382 49 43 98 87 147 130 14 12 174 181 201 125 4 1 8 1 12 1 25-5 45-36 58-55 14-19 29-40 41-60 17 11 35-12 26-27z"
                  style={{
                    fill: '#fefefe',
                  }}
                />
              </g>
            </g>
          </svg>
        </span>
      ) : null}
      <ul className="header__form-list">
        <li className="header__form-place">Kyiv, Ukraine</li>
        <li className="header__form-place">Lviv, Ukraine</li>
        <li className="header__form-place">Warszawa, Poland</li>
        <li className="header__form-place">Washington, USA</li>
        <li className="header__form-place">California, USA</li>
      </ul>
    </div>
  );
};

export default Search;
