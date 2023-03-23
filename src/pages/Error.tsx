import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Error: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="error">
      <div className="error__images">
        <img className="error__image" src="/images/icons/error.svg" alt="error" />
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              {
                '.cls-2{stroke:#434a54;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;fill:none}'
              }
            </style>
          </defs>
          <title />
          <g data-name="katman 2" id="katman_2">
            <g id="icons">
              <circle
                cx={32}
                cy={32}
                r={20}
                style={{
                  stroke: '#434a54',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                  fill: '#f1c40f',
                }}
              />
              <path
                className="cls-2"
                d="M52.4 19.36A23.89 23.89 0 0 1 56 32M43.77 11.08A24 24 0 0 1 49 15M18.76 52A24.11 24.11 0 0 1 15 49"
              />
              <path
                style={{
                  fill: '#ecf0f1',
                  stroke: '#434a54',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                }}
                d="M44.44 25 19.56 59h0l15.42-28h-14L33.39 5h9L30.44 25h14z"
              />
              <path
                style={{
                  fill: 'none',
                }}
                d="M0 0h64v64H0z"
              />
            </g>
          </g>
        </svg>
      </div>
      <p className="error__desc">{t('errorText')}</p>
      <NavLink className="error__btn" to="/">
        {t('btnBack')}
      </NavLink>
    </section>
  );
};

export default Error;
