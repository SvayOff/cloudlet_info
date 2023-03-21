import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const SunCol: React.FC = () => {
  const weatherToday = useSelector((state: RootState) => state.weatherSlice.weatherToday);

  const weatherTodaySunrice =
    weatherToday && new Date(weatherToday.sys.sunrise * 1000).getHours().toFixed(2);

  const weatherTodaySunset =
    weatherToday && new Date(weatherToday.sys.sunset * 1000).getHours().toFixed(2);

  return (
    <div className="information__col information__col-sun sun">
      <h2 className="information__col-title">Sunrise & Sunset</h2>
      <div className="information__col-sunrise">
        <svg viewBox="0 0 32 32" xmlSpace="preserve">
          <title />
          <path d="M25 20c0-4.971-4.029-9-9-9s-9 4.029-9 9h18z" fill="#F2B035" />
          <g fill="#1A1A1A">
            <path d="M22 23h8v2h-8zM2 23h8v2H2zM25.949 19c-.504-5.046-4.773-9-9.949-9s-9.446 3.954-9.949 9H0v2h12v-2H8.069c.495-3.94 3.859-7 7.931-7s7.436 3.06 7.931 7H20v2h12v-2h-6.051zM4 27h9v2H4zM19 27h9v2h-9z" />
            <path d="m19.707 22.293-3-3a.999.999 0 0 0-1.414 0l-3 3 1.414 1.414L15 22.414V32h2v-9.586l1.293 1.293 1.414-1.414zM15 0h2v2h-2zM3.98 9.393l1.414-1.414 2.829 2.829-1.415 1.414zM.882 14.668l.781-1.84 3.683 1.562-.781 1.841zM1.152 6.564 2.566 5.15 3.98 6.565 2.566 7.979zM23.777 10.807l2.83-2.829 1.414 1.414-2.83 2.83zM28.02 6.565l1.415-1.414 1.414 1.414-1.414 1.414zM15 4h2v4h-2zM9.08 5.54l1.853-.75L12.43 8.5l-1.854.748zM26.654 14.389l3.683-1.563.781 1.84-3.683 1.564zM19.57 8.499l1.498-3.71 1.853.75-1.498 3.709z" />
          </g>
        </svg>
        <time>{weatherTodaySunrice}</time>
      </div>
      <div className="information__col-sunset">
        <svg viewBox="0 0 32 32" xmlSpace="preserve">
          <title />
          <path d="M25 20c0-4.971-4.029-9-9-9s-9 4.029-9 9h18z" fill="#F2B035" />
          <g fill="#1A1A1A">
            <path d="M19 23h11v2H19zM2 23h11v2H2zM25.949 19c-.504-5.046-4.773-9-9.949-9-5.177 0-9.446 3.954-9.949 9H0v2h13v-2H8.069c.495-3.94 3.859-7 7.931-7s7.436 3.06 7.931 7H19v2h13v-2h-6.051zM4 27h7v2H4zM21 27h7v2h-7z" />
            <path d="M17 28.586V19h-2v9.586l-1.293-1.293-1.414 1.414 3 3a.997.997 0 0 0 1.414 0l3-3-1.414-1.414L17 28.586zM15 0h2v2h-2zM3.98 9.393 5.393 7.98l2.828 2.83-1.415 1.413zM.882 14.668l.782-1.841 3.682 1.563-.782 1.841zM1.152 6.564 2.566 5.15 3.98 6.565 2.566 7.979zM23.777 10.807l2.83-2.829 1.414 1.414-2.83 2.83zM28.02 6.565l1.415-1.414 1.414 1.414-1.414 1.414zM15 4h2v4h-2zM9.08 5.539l1.854-.75 1.5 3.71-1.855.749zM26.654 14.389l3.683-1.563.781 1.84-3.683 1.564zM19.57 8.499l1.498-3.71 1.853.75-1.498 3.709z" />
          </g>
        </svg>
        <time>{weatherTodaySunset}</time>
      </div>
    </div>
  );
};

export default SunCol;
