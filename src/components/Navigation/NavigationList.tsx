import React from 'react';
import NavigationListHome from './NavigationListHome';
import NavigationListMaps from './NavigationListMaps';
import NavigationListFavorite from './NavigationListFavorite';

const NavigationList: React.FC = () => {
  return (
    <ul className="navigation__list">
      <NavigationListHome />
      <NavigationListMaps />
      <NavigationListFavorite />
    </ul>
  );
};

export default NavigationList;
