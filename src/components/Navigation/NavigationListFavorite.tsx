import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationListFavorite: React.FC = () => {
  return (
    <li className="navigation__list-item navigation__list-favorite">
      <NavLink to="/favorites">
        <svg className="navigation__item-img favourite-img" height={24} width={24}>
          <title />
          <g
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={2}>
            <path d="m17.5 22.5-8-6.5-8 6.5v-20h16M18 7v10m5-5H13" />
          </g>
        </svg>
      </NavLink>
    </li>
  );
};

export default NavigationListFavorite;
