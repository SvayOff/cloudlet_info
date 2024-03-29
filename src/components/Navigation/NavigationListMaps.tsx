import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationListMaps: React.FC = () => {
  return (
    <li className="navigation__list-item navigation__list-maps">
      <NavLink to="/maps">
        <svg className="navigation__item-img map_img" height={24} width={24}>
          <g style={{ display: 'inline' }}>
            <path
              d="M12 292.65c-4.723 0-8.572 3.853-8.572 8.579 0 .009 0 .018.002.027.105 3.813 2.17 6.371 4.687 8.164 2.275 1.62 3.088 2.805 3.088 2.805a1 1 0 0 0 1.713-.125c.677-1.011 1.955-2.06 2.898-2.686 2.698-1.771 4.756-4.374 4.756-8.186 0-4.725-3.85-8.578-8.572-8.578zm0 2a6.56 6.56 0 0 1 6.572 6.579c0 3.133-1.479 4.954-3.853 6.513-1.335.877-2.208 1.699-2.762 2.324a19.531 19.531 0 0 0-2.68-2.275c-2.232-1.59-3.755-3.436-3.847-6.574A6.56 6.56 0 0 1 12 294.65z"
              transform="translate(0 -290.65)"
            />
            <path
              d="M12 297.227c-2.198 0-4 1.803-4 4.002 0 2.198 1.802 4.003 4 4.003s4-1.805 4-4.003a4.016 4.016 0 0 0-4-4.002zm0 2c1.116 0 2 .883 2 2.002a1.987 1.987 0 0 1-2 2.003c-1.116 0-2-.885-2-2.003 0-1.12.884-2.002 2-2.002z"
              transform="translate(0 -290.65)"
            />
          </g>
        </svg>
      </NavLink>
    </li>
  );
};

export default NavigationListMaps;
