import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Search from './Search';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <header className="header">
      <div className="header__inner">
        <Logo />

        <Search />

        <NavLink className="header__signin" to="/login">
          {t('signIn')}
        </NavLink>

        <a className="header__account" href="#">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style></style>
            </defs>
            <title />
            <g data-name="Layer 19" id="Layer_19">
              <path
                className="cls-1"
                d="M16,17a8,8,0,1,1,8-8A8,8,0,0,1,16,17ZM16,3a6,6,0,1,0,6,6A6,6,0,0,0,16,3Z"
              />
              <path
                className="cls-1"
                d="M23,31H9a5,5,0,0,1-5-5V22a1,1,0,0,1,.49-.86l5-3a1,1,0,0,1,1,1.72L6,22.57V26a3,3,0,0,0,3,3H23a3,3,0,0,0,3-3V22.57l-4.51-2.71a1,1,0,1,1,1-1.72l5,3A1,1,0,0,1,28,22v4A5,5,0,0,1,23,31Z"
              />
            </g>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
