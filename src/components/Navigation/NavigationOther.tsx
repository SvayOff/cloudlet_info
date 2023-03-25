import React from 'react';
import NavigationOtherTheme from './NavigationOtherTheme';
import NavigationOtherLang from './NavigationOtherLang';

const NavigationOther: React.FC = () => {
  return (
    <div className="navigation__other">
      <NavigationOtherTheme />
      <NavigationOtherLang />
    </div>
  );
};

export default NavigationOther;
