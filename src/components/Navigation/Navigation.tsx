import React from 'react';
import NavigationList from './NavigationList';
import NavigationOther from './NavigationOther';

const Navigation: React.FC = () => {
  return (
    <section className="navigation">
      <nav className="navigation__inner">
        <NavigationList />
        <NavigationOther />
      </nav>
    </section>
  );
};

export default Navigation;
