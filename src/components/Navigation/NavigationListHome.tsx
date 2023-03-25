import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationListHome: React.FC = () => {
  return (
    <li className="navigation__list-item navigation__list-home">
      <NavLink to="/">
        <svg className="navigation__item-img home-img" height={16} width={16} xmlSpace="preserve">
          <path d="M15.45 7 14 5.551V2c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v.553L9 .555C8.727.297 8.477 0 8 0s-.727.297-1 .555L.55 7C.238 7.325 0 7.562 0 8c0 .563.432 1 1 1h1v6c0 .55.45 1 1 1h3v-5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v5h3c.55 0 1-.45 1-1V9h1c.568 0 1-.437 1-1 0-.438-.238-.675-.55-1z" />
        </svg>
      </NavLink>
    </li>
  );
};

export default NavigationListHome;
