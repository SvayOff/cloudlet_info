import React from 'react';

const Logo: React.FC = () => {
  return (
    <a className="header__logo" href="#">
      Cloudlet
      <span>Info</span>
      <img className="header__logo-img" src="/images/icons/cloud_logo.svg" alt="logo" />
    </a>
  );
};

export default Logo;
