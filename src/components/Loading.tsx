import React from 'react';

const Loading = () => {
  return (
    <div className="loading">
      <i className="loading__decor">
        <svg height={91} width={91} xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FDE497"
            d="M87.912 37.63H56.344L45.512 4.648 34.682 37.63H3.109l25.584 18.21-10.269 31.256 27.088-19.283 27.085 19.283L62.332 55.84z"
          />
          <path
            d="M72.597 89.608a2.504 2.504 0 0 1-1.457-.466L45.512 70.896 19.881 89.143a2.514 2.514 0 0 1-2.947-.023 2.515 2.515 0 0 1-.896-2.808l9.691-29.498L1.652 39.677a2.512 2.512 0 0 1 1.457-4.56h29.753L43.124 3.864a2.514 2.514 0 0 1 4.775 0l10.265 31.253h29.749a2.513 2.513 0 0 1 1.457 4.56L65.297 56.813l9.688 29.498a2.514 2.514 0 0 1-2.388 3.297zM45.512 65.3c.51 0 1.021.155 1.457.466l20.854 14.848-7.878-23.989a2.51 2.51 0 0 1 .93-2.831l19.176-13.65H56.344a2.51 2.51 0 0 1-2.387-1.729l-8.445-25.713-8.443 25.713a2.512 2.512 0 0 1-2.387 1.729H10.973l19.178 13.65a2.514 2.514 0 0 1 .93 2.831L23.2 80.613l20.855-14.847a2.502 2.502 0 0 1 1.457-.466z"
            fill="#454B53"
          />
        </svg>
      </i>
    </div>
  );
};

export default Loading;
