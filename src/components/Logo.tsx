import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <NavLink className="header__logo" to="/">
      Cloudlet
      <span>Info</span>
      <img className="header__logo-img" src="/images/icons/cloud_logo.svg" alt="logo" />
    </NavLink>
  );
};

export default Logo;
