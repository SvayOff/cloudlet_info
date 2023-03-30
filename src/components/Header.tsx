import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Account from './Account';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  
  const authorized = useSelector((state: RootState) => state.authorizationSlice.authorized);

  return (
    <header className="header">
      <div className="header__inner">
        <Logo />

        <Search />

        {authorized ? (
          <Account />
        ) : (
          <NavLink className="header__signin" to="/login">
            {t('signIn')}
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
